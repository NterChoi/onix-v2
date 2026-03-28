import { ConfigService, ConfigType } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import databaseConfig from "./database.config";

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
    inject: [databaseConfig.KEY],
    useFactory: (config: ConfigType<typeof databaseConfig>) => ({
        type: 'mysql',
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        autoLoadEntities: true,
        synchronize: config.synchronize,
        logging: config.logging,
    }),
};