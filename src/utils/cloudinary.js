import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localfilePath) => {
  try {
    if (!localfilePath) return null;
    //upload the file on cloudninary

    const reponse = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    //file has been uploaded sucessfull

    console.log("file is uploaded in cloudinary", reponse.url);
    return reponse;
  } catch (error) {
    fs.unlinkSync(localfilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadCloudinary };


