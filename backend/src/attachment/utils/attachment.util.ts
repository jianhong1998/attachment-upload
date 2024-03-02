import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3, config } from 'aws-sdk';

@Injectable()
export class AttachmentUtil {
    private bucketName: string;
    private s3: S3;

    constructor(configService: ConfigService) {
        const accessKey = configService.get('AWS_ACCESS_KEY');
        const secretKey = configService.get('AWS_SECRET_KEY');
        const region = configService.get('AWS_REGION');

        this.bucketName = configService.get('AWS_BUCKET_NAME');

        config.update({
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
            region,
        });

        this.s3 = new S3();
    }

    public createPresignUrl(fileName: string, fileType: string): string {
        const params = {
            Bucket: this.bucketName,
            Key: fileName,
            Expires: 120,
            ContentType: fileType,
            ACL: 'bucket-owner-full-control',
        };

        const url = this.s3.getSignedUrl('putObject', params);

        return url;
    }
}
