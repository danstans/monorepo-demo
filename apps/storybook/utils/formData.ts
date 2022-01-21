import * as z from "zod";

export const nameForm = [
  {
    name: "firstName",
    defaultValue: "Daniel",
    schema: z.string().min(1, { message: "First name is required." }),
    breakpoints: {
      xs: 12,
      sm: 6,
      md: 12,
      lg: 4,
    },
    props: {
      label: "First Name",
    },
  },
  {
    name: "lastName",
    defaultValue: "Stansberry",
    schema: z.string().min(1, { message: "Last name is required." }),
    breakpoints: {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
    },
    props: {
      label: "Last Name",
    },
  },
  {
    name: "age",
    defaultValue: 26,
    schema: z.number({ invalid_type_error: "Age is required" }).positive().min(10).int(),
    breakpoints: {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
    },
    props: {
      label: "Age",
    },
  },
];
