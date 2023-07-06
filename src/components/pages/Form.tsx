import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import BasicDetails from "../forms/BasicDetails";
import Address from "../forms/Address";
import FileUpload from "../forms/FileUpload";
import MultiFileUpload from "../forms/MultiFileUpload";
import Status from "../forms/Status";
import WebWrapper from "../WebWrapper";
import FormWrapper from "../FormWrapper";
import ProgressBar from "../progressBar/ProgressBar";
import axios from "axios";
import { toast } from "react-toastify";

type SingleFile = {
  path?: string;
  name?: string;
  type?: string;
  size?: number;
  mime?: string;
  meta?: any;
  url?: string;
};

type MultiFile = SingleFile[];

type FormData = {
  name: string;
  email: string;
  phone_number: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  pincode: number;
  country: string;
  geolocation: string;
  single_file: SingleFile;
  multi_file: MultiFile;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone_number: "",
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  pincode: 0,
  country: "",
  geolocation: "",
  single_file: {
    path: "",
    name: "",
    type: "",
    size: 0,
    mime: "",
    meta: {},
    url: "",
  },
  multi_file: [],
};

const App = () => {
  // progress state
  const [activeStep, setActiveStep] = React.useState(1);

  // form submit error
  const [status, setStatus] = useState("");

  // form data
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { step, isFirstStep, isLastStep, back, next, isSubmit } =
    useMultiStepForm([
      <BasicDetails {...data} updateFields={updateFields} />,
      <Address {...data} updateFields={updateFields} />,
      <FileUpload {...data} updateFields={updateFields} />,
      <MultiFileUpload {...data} updateFields={updateFields} />,
      <Status status={status} />,
    ]);

  // handle next
  const handleNext = () => {
    if (activeStep === 5) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  // handle back
  const handleBack = () => {
    if (activeStep === 1) return;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    back();
  };

  // handle form submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmit) {
      axios
        .post("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Auth_Token")}`,
          },
        })
        .then((res) => {
          if (res?.data?.status === 200) {
            setStatus("form submitted");
            toast.success("form successfully submitted");
          }
        })
        .catch((error) => {
          if (error) {
            setStatus(error?.message);
            toast.error(error?.message || "Something is wrong");
          }
        });
    }

    handleNext();
    if (!isLastStep) return next();
  };

  return (
    <WebWrapper>
      <FormWrapper>
        <div className="mb-8">
          <ProgressBar activeStep={activeStep} />
        </div>
        <form onSubmit={handleFormSubmit}>
          {/* render form  */}
          {step}

          <div className="text-end my-4">
            <ButtonGroup variant="contained">
              {!isFirstStep && (
                <Button type="button" onClick={handleBack}>
                  Back
                </Button>
              )}
              {!isLastStep && (
                <Button type="submit">{isSubmit ? "Submit" : "Next"}</Button>
              )}
            </ButtonGroup>
          </div>
        </form>
      </FormWrapper>
    </WebWrapper>
  );
};

export default App;
