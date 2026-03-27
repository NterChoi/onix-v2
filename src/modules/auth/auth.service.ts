import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import SignUpDto from './dto/sign-up.dto';
import SignInDto from './dto/sign-in.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,

    ) { }

    async signUp(dto: SignUpDto) {
        // 1. 이미 존재하는 이메일인지 UserService를 통해 확인
        const findUser = await this.usersService.findByEmail(dto.email);
        // -> 존재한다면 409 Conflict 에러 반환
        if (findUser) {
            throw new ConflictException('이미 사용중인 이메일입니다.');
        }

        // 2. 비밀번호 해싱 (bcrypt.hash 사용, saltRounds는 10 추천)
        const hashedPassword = await bcrypt.hash(dto.password, 10)
        // 3. 생성된 유저를 DB에 저장 (UserService에 create 메서드 하나 추가해야 함!)
        const user = await this.usersService.createUser({ ...dto, password: hashedPassword });
        // 4. 회원가입 완료 후 유저 정보 리턴
        return user;

    }

    async signIn(dto: SignInDto) {
        // 1. 이메일로 유저 조회
        const user = await this.usersService.findByEmail(dto.email)
        // -> 없으면 401 UnauthorizedException 던지기
        if (!user) {
            throw new UnauthorizedException('일치하는 이메일이 존재하지 않습니다');
        }

        // 2. 비밀번호 일치 검사 (bcrypt.compare 사용)
        const result: boolean = await bcrypt.compare(dto.password, user.password)
        // -> 일치하지 않으면 UnauthorizedException 던지기
        if (!result) {
            throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
        }
        // 3. 서명된 JWT 토큰 생성 (this.jwtService.sign(payload) 사용)
        const token = this.jwtService.sign(dto);
        // payload 구조 추천 { sub: user.id, email: user.email }
        const payload = { sub: user.id, email: user.email }
        // 4. 토큰 리턴
        return {
            accessToken: token,
        }
    }
}
