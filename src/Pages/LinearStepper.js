import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import useHttp from './../hooks/use-http';
import {addemployeerecord} from './../lib/api';
import MenuItem from '@mui/material/MenuItem';

import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Personal information",
    "Professional Information",
    "Technical Skill Information",
    "others",
  ];
}

const PersonalForm = () => {
 const { control } = useFormContext();
  return (
    <>
      <Controller control={control}
        name="fullName"
        rules={{
          minLength:3,
          required:"please enter something",
          message: "You must specify your full name",
          maxLength: 12,
      
          required: true,
        pattern: /^[A-Za-z]+$/i ,
          
         }}
        
        
        render={({ field }) => (
          <TextField
          
         
            id="full-name"
            label="Full Name"
            variant="outlined"
            required
            placeholder="Enter Your Full Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      
      />

<Controller
        control={control}
        name="emailAddress"
        rules={{
          
          message: "You must specify your full name",
         required: true,
        pattern: /^[A-Za-z]+$/i ,
          
         }}
        
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
         
            variant="outlined"
            required
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"


        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
      
            variant="outlined"
            required
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> 
       <Controller
        control={control}
        name="address"
        render={({ field }) => (
          <TextField
            id="address"
            label="Address "
            variant="outlined"
            placeholder="Enter Your Address "
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
<Controller
        control={control}
        name="panId"
        render={({ field }) => (
          <TextField
            id="pan-id"
            label="Pan number"
            variant="outlined"
            required
            placeholder="Enter Your pan ID"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const ProfessionalForm = () => {
  const dateNow = new Date(); 
  const year = dateNow.getFullYear(); 
  const monthWithOffset = dateNow.getUTCMonth() + 1; 
  const month = // Setting current Month number from current Date object
    monthWithOffset.toString().length < 2  ? `0${monthWithOffset}`
      : monthWithOffset;
  const date =
    dateNow.getUTCDate().toString().length < 2 
      ? `0${dateNow.getUTCDate()}`
      : dateNow.getUTCDate();
  
  const materialDateInput = `${year}-${month}-${date}`;
  const { control } = useFormContext();
  return (
    <>
     
      <Controller
        control={control}
        name="prevdesg"
        render={({ field }) => (
          <TextField
            id="Prevdesg"
            label="Previous designation"
            variant="outlined"
            placeholder="Enter Your Previous designation"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

<Controller
        control={control}
        name="date"
        render={({ field }) => (
<TextField
        id="date"
        label="Joining date"
        type="date"
        variant="outlined"
            placeholder="date"
            fullWidth
            margin="normal"
            {...field}
        defaultValue={materialDateInput} // Today's Date being used as default
        InputLabelProps={{
          shrink: true
        }}
      />
      )}
     />
      <Controller
        control={control}
        name="project"
        render={({ field }) => (
          <TextField
            id="current project"
            label="current project"
            variant="outlined"
            placeholder="Enter Your Project name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />


<Controller
        control={control}
        name="desg"
        render={({ field }) => ( <TextField
          id="currentdesg"
         
          label="Present Designation"
          variant="outlined"
            placeholder="current role"
            fullWidth
            required
            margin="normal"
            {...field}
         />
         )}
      />

<Controller
        control={control}
        name="Experience"
        render={({ field }) => (
          <TextField
            id="Experience"
            label="Experience"
            variant="outlined"
            placeholder="Enter Your Experience in years"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

    </>
  );
};
const TechnicalForm = () => {

  const { control } = useFormContext();
  return (
    <>
     
      <Controller
        control={control}
        name="certifications"
        render={({ field }) => (
          <TextField
            id="certifications"
            label="certifications"
            variant="outlined"
            placeholder="Enter Your certifications"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Tools"
        render={({ field }) => (
          <TextField
            id="Tools"
            label="Tools used"
            variant="outlined"
            placeholder="Tools you worked on"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
       <Controller
        control={control}
        name="languages"
        render={({ field }) => (
          <TextField
            id="languages"
            label="languages"
            variant="outlined"
            placeholder="write languages you know here"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="hobbies"
        render={({ field }) => (
          <TextField
            id="hobbies"
            label="hobbies"
            variant="outlined"
            placeholder="Enter Your hobbies"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="AreaofInterest"
        render={({ field }) => (
          <TextField
            id="AreaofInterest"
            label="Area of Interest"
            variant="outlined"
            placeholder="Enter Your Area of Interest"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const OtherinfoForm = () => {
  const { control } = useFormContext();
  return (
    <>
     
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalForm />;

    case 1:
      return <ProfessionalForm />;
    case 2:
      return <TechnicalForm />;
   // case 3:
      //return "unknown step";
      //return <OtherinfoForm />;
    default:
      return "unknown step";
  }
}



const LinearStepper = () => {
  
  const { sendRequest, status } = useHttp(addemployeerecord); 
 
  const classes = useStyles();

  const methods = useForm({
    defaultValues: {
      fullName: "",
      panId: "",
      prevdesg: "",
      emailAddress: "",
      phoneNumber: "",
      project: "",
      address: "",
      date:"",
     languages:"",
     desg:"",
   
      Experience: "",
      Tools: "",
      certifications: "",
      languages:"",
      hobbies:"",
      AreaofInterest:"",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };
  
  const handleNext = (data) => {
    console.log(data);

const employeerecord={

  fullName: data.fullName ,
      panId: data.panId,
      prevdesg: data.prevdesg,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
      project: data.project,
      date:data.date,
      address: data.address,
     languages:data.languages,
     desg:data.desg,
   Experience: data.Experience,
      Tools: data.Tools,
      certifications: data.certifications,
      languages:data.languages,
      hobbies:data.hobbies,
      AreaofInterest:data.AreaofInterest,
};

    console.log(employeerecord);
    if (activeStep === steps.length - 1) {
      sendRequest(employeerecord);
      console.log("hello");
      
      /*fetch("http://localhost:4000/api/Register/new")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);  
          setActiveStep(activeStep + 1);
         });

          */
          setActiveStep(activeStep + 1);
      
        
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
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
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
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
                
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
         Registered successfully
        </Typography>
           
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)} >
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinearStepper;



/*
const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    dob: Yup.string()
        .required('Date of Birth is required')
        .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: Yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required')
});
const formOptions = { resolver: yupResolver(validationSchema) };

// get functions to build form with useForm() hook
const { register, handleSubmit, reset, formState } = useForm(formOptions);
const { errors } = formState;




*/
