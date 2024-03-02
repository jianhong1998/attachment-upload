import { Module } from '@nestjs/common';
import { AppConfig } from './app.config';
import { AttachmentUtil } from './attachment/utils/attachment.util';
import { AttachmentController } from './attachment/controllers/attachment.controller';
import { AttachmentService } from './attachment/services/attachment.service';

@Module({
    imports: [AppConfig.configModule],
    controllers: [AttachmentController],
    providers: [AttachmentUtil, AttachmentService],
})
export class AppModule {}
