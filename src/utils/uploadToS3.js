import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});


export async function uploadFileToS3({ Bucket, Key, Body, ContentType }) {
  try {
    await s3.send(
      new PutObjectCommand({
        Bucket,
        Key,
        Body,
        ContentType,
      })
    );

    return `https://${Bucket}.s3.${process.env.AWS_REGION || "ap-south-1"}.amazonaws.com/${Key}`;
  } catch (error) {
    console.error("S3 upload error:", error);
    throw new Error("File upload to S3 failed");
  }
}
