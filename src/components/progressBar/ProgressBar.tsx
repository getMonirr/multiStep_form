import MobileStepper from "@mui/material/MobileStepper";
import "./progressBar.css";

const ProgressBar = ({ activeStep }: { activeStep: number }) => {
  return (
    <MobileStepper
      className="bg-red-400"
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      nextButton={<></>}
      backButton={<></>}
    />
  );
};

export default ProgressBar;
