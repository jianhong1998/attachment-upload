import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AttachmentService } from '../services/attachment.service';

@Controller('/attachment')
export class AttachmentController {
    constructor(private attachmentService: AttachmentService) {}

    @Get('/url')
    public async getUploadUrl(
        @Query('fileName') fileName?: string,
        @Query('fileType') fileType?: string,
    ) {
        if (!fileName || !fileType) {
            throw new BadRequestException(
                'File name and file type is required.',
            );
        }

        const url = await this.attachmentService.getUploadUrl(
            fileName,
            fileType,
        );

        return { url };
    }
}
