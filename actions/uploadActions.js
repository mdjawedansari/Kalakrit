"use server";

import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import File from "@/backend/models/TranslationModel";


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

async function uploadfilesToLocal(formData) {
  const files = formData.getAll("files");

  const multipleBuffersPromise = files.map((file) =>
    file.arrayBuffer().then((data) => {
      const buffer = Buffer.from(data);
      const name = uuidv4();
      const ext = file.type.split("/")[1];

      const tempdir = os.tmpdir();

      const uploadDir = path.join(tempdir, `/${name}.${ext}`);
      fs.writeFile(uploadDir, buffer);
      return { filepath: uploadDir, filename: file.name };
    })
  );

  return await Promise.all(multipleBuffersPromise);
}

async function uploadFilesToCloudinary(newFiles) {
  const multipleFilePromise = newFiles.map((file) =>
    cloudinary.uploader.upload(file.filepath, { folder: "Kalakrit" })
  );

  return await Promise.all(multipleFilePromise);
}

export async function uploadFiles(formData) {
  try {
    // save phot file to temporary folder
    const newFiles = await uploadfilesToLocal(formData);

    //upload to cloudnary after saving the file to temporary folder
    const files = await uploadFilesToCloudinary(newFiles);

    //delete ifles from temp folder

    newFiles.map((file) => fs.unlink(file.filepath));

    // save files to mongodb => no delay needed
    const newTranslationFiles = files.map((file) => {
      const newTranslationFile = new File({
        public_id: file.public_id,
        secure_url: file.secure_url,
      });
      return newTranslationFile ;
    });
   await File.insertMany(newTranslationFiles)

    // revalidatePath("/");

    return { msg: "upload sucess!" };
  } catch (error) {
    return { errMsg: error.message };
  }
}
