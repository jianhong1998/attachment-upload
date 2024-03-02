import { ConfigModule } from '@nestjs/config';

export class AppConfig {
    public static configModule = ConfigModule.forRoot({
        envFilePath: '.env',
        cache: false,
        isGlobal: true,
    });
}
