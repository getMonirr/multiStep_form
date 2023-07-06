import { Typography } from "@mui/material";
import {  useEffect } from "react";

type geolocationData = {
  geolocation: string
};

type geolocationProps = geolocationData & {
  updateFields: (fields: Partial<geolocationData>) => void;
};

const GeolocationStatusField = ({geolocation, updateFields}: geolocationProps) => {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        updateFields({geolocation:`latitude: ${latitude}, longitude: ${longitude}` })
      },
      (error) => {
        // Handle any errors that occur during Geolocation capture
        console.error(error);
      }
    );
  }, []);

  return (
    <div>
      <Typography variant="body1">
        Geolocation Status:<span className="text-blue-500"> {geolocation}</span>
      </Typography>
    </div>
  );
};

export default GeolocationStatusField;
