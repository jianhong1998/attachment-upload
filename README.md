# Large Attachment Upload POC

To proof the concept of uploading large attachment file such as video with directly access to S3 bucket.

## Pre-request

1. Node >= 18
2. AWS S3 bucket created
3. S3 bucket configured with CORS policy for PUT request

## Library Used

1. `NestJS`: Express framework.
2. `aws-sdk`: Library for the backend to communicate with AWS S3.

## Start Locally

### Backend

1. Redirect to `backend` folder.
2. Install all packages by running command `npm install`.
3. Create `.env` file by following `.env.template`.
4. Start backend service with command `npm run start:dev`

### Frontend

1. Redirect to `frontend` folder.
2. Install all packages by running command `npm install`.
3. Start frontend development server with command `npm start`

## References

- [handling large file uploads using S3 pre-signed URLs](https://www.pullrequest.com/blog/handling-large-file-uploads-in-react-securely-using-aws-s3-pre-signed-urls/#:~:text=Uploading%20large%20files%20in%20a,a%20high%20level%20of%20security)
