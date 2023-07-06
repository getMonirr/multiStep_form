import { createBrowserRouter } from "react-router-dom";
import Form from "../components/pages/Form";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../components/pages/ForgetPassword";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Form />
      </PrivateRoute>
    ),
  },
  {
    path: "/forget",
    element: <ForgetPassword />,
  },
]);

export default Routers;
