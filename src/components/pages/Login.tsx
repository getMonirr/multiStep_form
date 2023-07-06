import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import WebWrapper from "../WebWrapper";
import FormWrapper from "../FormWrapper";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login";

const Login = () => {
  const { setUser } = useAuth();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const email = form?.email.value;
    const password = form?.password.value;
    const loginData = { email, password };

    // server request
    axios
      .post(API_URL, loginData)
      .then((res) => {
        if (res?.data?.authToken) {
          localStorage.setItem("Auth_Token", res?.data?.authToken);
          setUser(true);
          toast.success("Log in successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        toast.error(err.message || "login failed");
      });
  };

  return (
    <WebWrapper>
      <FormWrapper>
        <form onSubmit={handleLogin} className="space-y-4">
          <Typography variant="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography variant="body2">Sign in to continue.</Typography>

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
          <TextField
            className="bg-white"
            fullWidth
            id="outlined-multiline-flexible"
            label="Password"
            size="small"
            name="password"
            required
          />
          <Typography variant="body2">
            <Link to="/forget">
              Forget your password?{" "}
              <span className="text-blue-500">Reset password</span>
            </Link>
          </Typography>
          <Button variant="contained" fullWidth type="submit">
            Sign In
          </Button>
        </form>
      </FormWrapper>
    </WebWrapper>
  );
};

export default Login;
