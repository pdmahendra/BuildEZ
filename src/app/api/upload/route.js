import { uploadFileToS3 } from "../../../utils/uploadToS3";
import { authMiddleware } from "../../../utils/authMiddleware";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req) {
  try {
    const authResponse = await authMiddleware(req);
    if (authResponse.status !== 200) {
      return new Response(JSON.stringify(authResponse.body), {
        status: authResponse.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response(
        JSON.stringify({ success: false, message: "No file provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const bucketName = process.env.AWS_BUCKET_NAME;
    if (!bucketName) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Server configuration error: Missing AWS_BUCKET_NAME",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const fileName = `${Date.now()}-${file.name}`;
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const contentType = file.type;

    const contentUrl = await uploadFileToS3({
      Bucket: bucketName,
      Key: fileName,
      Body: fileBuffer,
      ContentType: contentType,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "File uploaded successfully",
        contentUrl,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("File upload error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "File upload failed",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
