import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import WebWrapper from "../WebWrapper";
import FormWrapper from "../FormWrapper";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <WebWrapper>
      <FormWrapper>
        <form className="space-y-4">
          <Typography variant="h5" component="h1">
            <b>To Reset your password, Please enter gmail</b>
          </Typography>

          <TextField
            className="bg-white"
            fullWidth
            id="outlined-multiline-flexible"
            label="email"
            size="small"
            type="email"
            name="email"
            required
          />
          <Typography variant="body2">
            <Link to="/">Already have an account? <span className="text-blue-500">Login</span></Link>
          </Typography>
          <Button variant="contained" fullWidth type="submit">
            Reset Password
          </Button>
        </form>
      </FormWrapper>
    </WebWrapper>
  );
};

export default ForgetPassword;
