import { Injectable, Inject } from "@nestjs/common";
import type { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import authConfig from "src/config/auth.config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.secret!
        });
    }

    async validate(payload: any) {
        return { id: payload.sub, email: payload.email }
    }
}