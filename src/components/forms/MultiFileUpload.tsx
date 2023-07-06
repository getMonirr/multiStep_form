import { Button, Typography } from "@mui/material";
import GeolocationStatusField from "../GeolocationStatusField/GeolocationStatusField";
import { ChangeEvent, useState } from "react";


const MultiFileUpload = ({ geolocation,multi_file, updateFields }: any) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const filesArray = Array.from(fileList);
      // Check if the number of selected files doesn't exceed the limit
      if (selectedFiles.length + filesArray.length <= 5) {
        setSelectedFiles((prevSelectedFiles) => [
          ...prevSelectedFiles,
          ...filesArray,
        ]);

        // Update the fields with the new selected files
        updateFields({ multi_file: [...selectedFiles, ...filesArray] });
      } else {
        alert("You can upload up to 5 files.");
      }
    }
  };
  return (
    <div className="space-y-4">
      <Typography variant="h5">Upload Multiple JPG/PDF file</Typography>
      <Button variant="contained" component="label" className="w-full">
        Upload File
        <input
          type="file"
          hidden
          multiple
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.pdf"
        />
      </Button>
      <GeolocationStatusField geolocation={geolocation} updateFields={updateFields} />
      {multi_file.map((file:any, index:number) => (
        <Typography key={index}>{file?.name}</Typography>
      ))}
    </div>
  );
};

export default MultiFileUpload;
