"use client";
import React from "react";
import { useState, useMemo, useCallback, useContext } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button, Input } from "../componets";
import images from "../assets";

const CreateNft = () => {
  const { theme } = useTheme();
  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(() => {
    //Upload image to blockchain
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxSize: 500000,
  });
  const fileStyle = useMemo(
    () =>
      `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center  p-5 rounded-sm border-dashed 
      ${isDragActive} && "border-file-active'
      ${isDragAccept} && "border-file-accept'
      ${isDragReject} && "border-file-reject'
    
    `,

    [isDragAccept, isDragActive, isDragReject]
  );
  return (
    <div className="flex justify-center sm:px-4 p-12 ">
      <div className="w-3/5 md:w-full ">
        <h1 className=" font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl text-semibold ml-4 xs:ml-0 ">
          Create new NFT
        </h1>
        <div className="mt-16 ">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
            Upload File
          </p>
          <div className="mt-4">
            {" "}
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center ">
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                  PNG , GIF , SVG , WEBM , MAX 100mb.
                </p>
                <div className="my-12 w-full flex justify-center items-center ">
                  <Image
                    src={images.upload}
                    alt="upload"
                    width={100}
                    height={100}
                    objectFit="contain"
                    // className={theme === "light" && "filter invert"}
                  />
                </div>
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                  Drag and Drop file(s)
                </p>
              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <Image src={fileUrl} alt="asset_file" />
                </div>
              </aside>
            )}
          </div>
        </div>
        <Input
          inputType="input"
          title="Name"
          placeholder="NFT Name"
          handleClick={() => {}}
        />
        <Input
          inputType="textarea"
          title="Description"
          placeholder="NFT Description"
          handleClick={() => {}}
        />
        <Input
          inputType="number"
          title="Price"
          placeholder="NFT Price"
          handleClick={() => {}}
        />
        <div className="mt-7 w-full flex justify-end ">
          <Button
            btnName="Create NFT"
            classStyles="rounded-xl"
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNft;
