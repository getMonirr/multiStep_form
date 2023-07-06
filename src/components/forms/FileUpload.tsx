import { Button, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

type SingleFile = {
  path?: string;
  name?: string;
  type?: string;
  size?: number;
  mime?: string;
  meta?: any;
  url?: string;
};

type FileUploadData = {
  single_file: SingleFile;
};

type FileUploadProps = FileUploadData & {
  updateFields: (fields: Partial<FileUploadData>) => void;
};

const FileUpload = ({ single_file, updateFields }: FileUploadProps) => {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      console.log(file);
      const fileType = file.type;
      // Check if the file type is either JPG or PDF
      if (fileType === "image/jpeg" || fileType === "application/pdf") {
        // setSelectedFile(file);

        // Create the single_file object
        const updatedSingleFile: SingleFile = {
          path: " ",
          mime: " ",
          meta: {},
          url: " ",
          name: file.name,
          type: file.type,
          size: file.size,
        };

        // Call the updateFields function to update the single_file field
        updateFields({ single_file: updatedSingleFile });
      } else {
        alert("Invalid file type. Please upload a JPG or PDF file.");
      }
    }
  };

  return (
    <div className="space-y-4">
      <Typography variant="h5">Upload your JPG/PDF file</Typography>
      <Button variant="contained" component="label" className="w-full">
        Upload File
        <input
          type="file"
          hidden
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.pdf"
        />
      </Button>
      {/* {selectedFile && (
        <Typography>Selected File: {selectedFile.name}</Typography>
      )} */}
      {single_file && (
        <Typography>Selected File: {single_file.name}</Typography>
      )}
    </div>
  );
};

export default FileUpload;
