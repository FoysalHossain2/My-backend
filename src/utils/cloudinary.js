import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // file has been uploaded successfull

        // console.log("File uploaded:", response.secure_url);
        fs.unlinkSync(localFilePath); // Delete the local file after successful upload
        return response;
    } catch (error) {
        if (localFilePath) {
            fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload opertation got failed
        }
        console.error(error);
        return null;
    }
};

export { uploadOnCloudinary };