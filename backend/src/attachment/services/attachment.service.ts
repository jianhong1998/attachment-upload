import { Injectable } from '@nestjs/common';
import { AttachmentUtil } from '../utils/attachment.util';

@Injectable()
export class AttachmentService {
    constructor(private attachmentUtil: AttachmentUtil) {}

    public async getUploadUrl(fileName: string, fileType: string) {
        const stringArray = fileName.split('.');

        const fileExtension = stringArray[stringArray.length - 1];

        const generatedFileName =
            this.attachmentUtil.generateFileName(fileExtension);

        return this.attachmentUtil.createPresignUrl(
            generatedFileName,
            fileType,
        );
    }
}
