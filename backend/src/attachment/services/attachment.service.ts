import { Injectable } from '@nestjs/common';
import { AttachmentUtil } from '../utils/attachment.util';

@Injectable()
export class AttachmentService {
    constructor(private attachmentUtil: AttachmentUtil) {}

    public async getUploadUrl(fileName: string, fileType: string) {
        return this.attachmentUtil.createPresignUrl(fileName, fileType);
    }
}
