import { Typography } from "@mui/material";

const Status = ({ status }: { status: string }) => {
  return (
    <div>
      <Typography>Form Status: {status}</Typography>
    </div>
  );
};

export default Status;
