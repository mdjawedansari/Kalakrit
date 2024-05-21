"use client";

import React, { useRef } from "react";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import { uploadFiles } from "@/actions/uploadActions";
import { bytesToKB } from "@/backend/utils/fileSize";

const initialState = {
  companyName: "",
  fullName: "",
  email: "",
  contactNumber: "",
  domain: [],
  languageOfPair: "",
  projectType: "",
  secure_url:[],
  message: "",
};

// const option = [
//   "government",
//   "Medicare",
//   "BSFI(Banking and Finance)",
//   "Tourism and Hospitality",
//   "multimedia",
//   "Entertainment",
// ]

const TranslationForm = () => {
  const [formData, setFormData] = useState(initialState);
  // const {companyName,firstName,lastName,email,contactNumber, language,projectType,message} = formData;
  //file uploading to cloudinary and mongo database
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState(""); // State to manage the error message

  const formRef = useRef();

  async function handleInputFile(e) {
    const files = e.target.files;
    const allowedFileTypes = ["image/jpeg", "image/png", "application/pdf"];
    const newFiles = [...files].filter((file) => {
      if (
        allowedFileTypes.includes(file.type) &&
        file.size <= 5 * 1024 * 1024
      ) {
        setMessage("sucess");
        return file;
      }
    });

    setFiles((prev) => [...newFiles, ...prev]);
    formRef.current.reset();
  }

  const handleDeleteFile = async (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files.length) return setMessage("No file are selected");
    if (files.length > 3) return setMessage("Upload upto 3 files");

    const fileData = new FormData()
    files.forEach(file => {
      fileData.append('files', file)
    })

    setFiles([])
    const res = await uploadFiles(fileData)
    console.log("file submitted successfully")
    setMessage("sucess")
//form handling and sending form data to server storing data to database and also redirecting to email

const requiredFields = [
  "companyName",
  "fullName",
  "email",
  "contactNumber",
  "domain",
  "languageOfPair",
]

const hasEmptyField = requiredFields.some((field) => !formData[field]);

if (hasEmptyField) {
  toast.error("All fields are mandatory", {
    position: "top-right",
  });
}

try {
  await axios.post("/api/translation", formData, {
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(formData),
  });

  toast.success("Mail sent successfully", {
    position: "top-center",
  });

  setFormData(initialState);

} catch (error) {
  toast.error("Mail sending failed", error);
}



  };

  return (
    <>
      <div className="w-full bg-[#100f13] flex justify-around flex-wrap md:flex-nowrap sm:flex-wrap py-20">
        <div className="md:w-1/3 sm:w-full py-20 w-full">
          <div className="md:w-2/5 w-4/5 m-auto space-y-3">
            <h1 className="md:text-4xl text-xl font-bold">
              <span className="text-[#f6f6f6]">reach out</span>
              <span className="text-[#EB5A00]">to us.</span>
            </h1>
            <h1 className="text-[#f6f6f6] text-xl font-thin">Fill the form</h1>
          </div>
          <div className="content mt-10 md:w-2/5 w-4/5 m-auto space-y-6">
            <div className="im1 space-x-4  flex">
              <div className="text-2xl">
                <ImPhone className="text-[#f6f6f6]" />
              </div>
              <div>
                <p className="text-[#f6f6f6] font-thin">+91 7011845899</p>
              </div>
            </div>
            <div className="im1 space-x-4 flex">
              <div className="text-2xl">
                <MdEmail className="text-[#f6f6f6] font-thin" />
              </div>
              <div>
                <p className="text-[#f6f6f6] font-thin">contact@kalakrit.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* ................................ */}

        <div className="md:w-1/2 sm:w-4/5 w-full text-[#f6f6f6] py-8 px-8 bg-[#201f22]">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="w-full placeholder-[#f6f6f6a1] space-y-4"
          >
            <div className="md:mt-6 w-full">
              <input
                type="text"
                onChange={handleChange}
                placeholder="Company Name *"
                className="md:w-11/12 w-full focus:outline-none border-b-2 bg-[#201f22] placeholder-[#f6f6f6a1]"
              />
            </div>

            <div className="md:mt-6 md:space-x-20 space-y-4">
              <input
                type="text"
                placeholder="Full Name*"
                onChange={handleChange}
                className="md:w-2/5 w-full pt-3 focus:outline-none border-b-2 bg-[#201f22] placeholder-[#f6f6f6a1] border-[#f6f6f6]"
              />
              <input
                type="email"
                placeholder="Email*"
                onChange={handleChange}
                className="md:w-2/5 pt-3 w-full focus:outline-none border-b-2 bg-[#201f22] placeholder-[#f6f6f6a1]"
              />
            </div>
            <div className="md:mt-6 w-full">
              <input
                type="text"
                placeholder="Contact*"
                onChange={handleChange}
                className="md:w-2/5  pt-3 w-full focus:outline-none border-b-2 bg-[#201f22] placeholder-[#f6f6f6a1]"
              />
            </div>
            <div className="md:mt-6 w-full">
              <input
                type="text"
                placeholder="Language of Pair*"
                onChange={handleChange}
                className="md:w-11/12 pt-3  w-full focus:outline-none border-b-2 bg-[#201f22] placeholder-[#f6f6f6a1]"
              />
            </div>
            <div className="md:mt-6 md:space-x-4 w-full space-y-4">
              <input
                type="text"
                placeholder="Domain*"
                onChange={handleChange}
                className="md:w-2/5 pt-3  w-full focus:outline-none border-b-2 bg-[#201f22] placeholder-[#f6f6f6a1]"
              />
            </div>
            <div className="md:mt-6 md:space-x-4 w-full space-y-4">
              <input
                type="text"
                onChange={handleChange}
                placeholder="Types of Project*"
                className="md:w-11/12 pt-3  w-full focus:outline-none border-b-2 bg-[#201f22] placeholder-[#f6f6f6a1]"
              />
            </div>
            {/* /////////////////////////////////////////// */}
            <div className="md:mt-6 md:space-x-4 w-full space-y-4 ">
            <label className="text-sm text-[#f6f6f6a1]  pt-3">Attach Sample*</label>
            <div className="flex justify-between items-center ">
              <input  
                type="file"
                placeholder="attach sample*"
                accept="image/*,.pdf"
                multiple
                onChange={handleInputFile}
                className="md:w-2/5  w-full focus:outline-none border-none bg-[#201f22] placeholder-[#f6f6f6a1]"
              />
              <div>
                <h6 className="text-xs font-thin">(*upload upto 3 files)</h6>
                <h6 className="text-xs font-thin">file should be less then 5mb</h6>
              </div>
              {/* preview */}
            </div>
              {message && (
                <p
                  className={`${
                    message === "sucess" ? "text-green-400" : "text-red-500 "
                  } `}
                >
                  {message}
                </p>
              )}
              <div className=" w-full md:w-full gap-2 ">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex  justify-around shadow-lg rounded-lg w-full md:w-3/5 mt-2 bg-gray-700 px-2 "
                  >
                    <div className="w-4 h-4 my-2 rounded-md  text-gray-300 flex justify-center items-center">
                      {/* You can use appropriate icons for different file types */}
                      {file.type.includes("image") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <DescriptionIcon className="text-3xl backdrop-blur-sm text-gray-100 " />
                      )}
                    </div>
                    <div className="flex justify-around w-full items-center gap-2 text-xs">
                      <div className="w-3/4 px-2">{file.name}</div>
                      <div className="w-[20%]">{`${bytesToKB(file.size)}.kb`}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        handleDeleteFile(index);
                      }}
                    >
                      <DeleteIcon className="text-red-500 hover:text-red-400 hover:scale-95 " />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* /////////////////////////////////////////////////// */}
            <div className="md:mt-6 w-full">
              <textarea
                placeholder="Messages"
                onChange={handleChange}
                className="text-[#f6f6f6] pt-3  w-5/6 h-auto focus:outline-none border-b-2 bg-[#201f22] placeholder-[#f6f6f6a1]"
                rows={6}
              ></textarea>
            </div>
            <div className="md:mt-6 w-full ">
              <button type="submit" className="p-4 hover:scale-105 hover:bg-[#eb5a00a1]  bg-[#EA5F00] font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TranslationForm;
