import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig } from './app.config';

@Module({
    imports: [AppConfig.configModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
