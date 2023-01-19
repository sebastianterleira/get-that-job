import emotion from "@emotion/styled";
import { fonts } from "../../styles";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Check from "@mui/icons-material/Check";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Typography, TextField, Stepper, Step, StepLabel } from "@mui/material";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import { useAuth } from "../../context/auth-context";

const ContentButton = emotion.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 18px;
margin-top: 30px;
`;

const MessageWarning = emotion.div`
font-family: ${fonts.bedroom};
padding: 25px 14px 20px 14px;
font-weight: 700;
font-size: 15px;
line-height: 24px;
color: darkgray;
text-align: center;
`;

const ButtonForm = emotion.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #F48FB1;
border-radius: 30px;
font-family: ${fonts.chiron};
width: 110px;
height: 35px;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #fff;
background: #F48FB1;
padding: 5px;
cursor: pointer;
overflow: hidden;
transition: all 500ms ease;
z-index: 0;

&:before {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	margin: auto;
	background-color: #BF5F82;
	transition: all 500ms ease;
	z-index: 1;
}
&:hover {
	background-color: #F48FB1;
	box-shadow: 0 0 10px #F48FB1, 0 0 10px #F48FB1, 0 0 15px #F48FB1;
	color: #fff;
}
`;

const ButtonSkip = emotion.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #F48FB1;
border-radius: 30px;
font-family: ${fonts.chiron};
width: 110px;
height: 35px;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #616161;
background: #fff;
padding: 5px;
cursor: pointer;
overflow: hidden;
transition: all 500ms ease;
z-index: 0;

&:before {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	margin: auto;
	background-color: #BF5F82;
	transition: all 500ms ease;
	z-index: 1;
}
&:hover {
	background-color: #F48FB1;
	box-shadow: 0 0 10px #F48FB1, 0 0 10px #F48FB1, 0 0 15px #F48FB1;
	color: #616161;
}
`;

const StyledForm = emotion.form`
display: flex;
flex-direction: column;
gap: 20px;
`;

function getSteps() {
  return ["Login information", "Personal information"];
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#F48FB1",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#F48FB1",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#BF5F82",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#BF5F82",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const AuthInformation = () => {
  const { control } = useFormContext();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <TextField
            id="email"
            label="Company Name"
            variant="standard"
            placeholder="Company Name"
            fullWidth
            color="primary"
            margin="normal"
            required
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            id="Email"
            label="Email"
            variant="standard"
            placeholder="some.user@mail.com"
            fullWidth
            color="primary"
            margin="normal"
            required
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <FormControl variant="standard" required color="primary" {...field}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              placeholder="******"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="password_confirmation"
        render={({ field }) => (
          <FormControl variant="standard" required color="primary" {...field}>
            <InputLabel htmlFor="standard-adornment-password2">
              Password Confirmation
            </InputLabel>
            <Input
              id="standard-adornment-password2"
              placeholder="******"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      />
    </>
  );
};

const RecruiterInformation = () => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="website"
        render={({ field }) => (
          <TextField
            id="company_website"
            label="Company Website"
            variant="standard"
            placeholder="https://www.mycompany.sa"
            fullWidth
            color="primary"
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <TextField
            id="about_company"
            label="About the Company"
            placeholder="My Company SA has the vision to change thw way how..."
            multiline
            color="primary"
            maxRows={4}
            fullWidth
            defaultValue="Default Value"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="profile"
        render={({ field }) => (
          <TextField
            id="title"
            variant="standard"
            fullWidth
            name="upload_photo"
            margin="normal"
            type="file"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AuthInformation />;
    case 1:
      return <RecruiterInformation />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const { signupCompany } = useAuth();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      website: "",
      description: "",
    },
  });

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }

    if (activeStep === 1) {
      signupCompany(data);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data)
  // };

  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps} StepIconComponent={QontoStepIcon}>
                {step}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 1 ? (
        <MessageWarning>
          You can complete this information later but we reccomend you to do it
          now
        </MessageWarning>
      ) : (
        ""
      )}

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <StyledForm onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <ContentButton>
                {activeStep === 0 || activeStep === 1 ? (
                  ""
                ) : (
                  <ButtonForm onClick={handleBack}>{"<    previus"}</ButtonForm>
                )}
                {isStepOptional(activeStep) && (
                  <ButtonSkip
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                  >
                    skip this!
                  </ButtonSkip>
                )}
                <ButtonForm
                  variant="contained"
                  color="primary"
                  // onClick={Submit}
                  type="submit"
                >
                  {activeStep === steps.length - 1
                    ? "Finish    >"
                    : "Next    >"}
                </ButtonForm>
              </ContentButton>
            </StyledForm>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
