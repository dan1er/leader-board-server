import * as yup from "yup";

const playerSchema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  score: yup
    .number()
    .required("Score required")
    .min(0, "Minimum score is 0")
    .max(100, "Maximum score is 100"),
});

export { playerSchema };
