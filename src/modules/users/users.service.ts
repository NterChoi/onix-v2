import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import SignUpDto from '../auth/dto/sign-up.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findByEmail(email: string): Promise<User | null> {
        return await this.userRepository.createQueryBuilder('user')
            .addSelect('user.password')
            .where('user.email = :email', { email })
            .getOne();
    }

    async createUser(dto: SignUpDto): Promise<User | null> {
        const user = this.userRepository.create(dto);
        await this.userRepository.save(user);
        return user;
    }
}
