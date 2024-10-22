import { FormField } from "@/types/form-type";

export const formObj: FormField[] = [
  {
    defaultValue: "",
    id: "username",
    label: "Username",
    name: "username",
    placeholder: "Username",
    type: "text",
    validation: {
      type: "string",
      min: {
        value: 2,
        message: "Username must be at least 2 characters.",
      },
    },
  },
  {
    defaultValue: "",
    id: "firstName",
    label: "First Name",
    name: "firstName",
    placeholder: "First Name",
    type: "text",
    validation: {
      type: "string",
      min: {
        value: 2,
        message: "First name must be at least 2 characters.",
      },
    },
  },
  {
    defaultValue: "",
    id: "lastName",
    label: "Last Name",
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
    validation: {
      type: "string",
      min: {
        value: 2,
        message: "Last name must be at least 2 characters.",
      },
    },
  },
  {
    defaultValue: "",
    id: "email",
    label: "Email",
    name: "email",
    placeholder: "Email",
    type: "email",
    validation: {
      type: "email",
      message: "Invalid email.",
    },
  },
  {
    defaultValue: "",
    id: "password",
    label: "Password",
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      type: "string",
      min: {
        value: 6,
        message: "Password must be at least 6 characters.",
      },
    },
  },
  {
    defaultValue: "",
    id: "confirmPassword",
    label: "Confirm Password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    type: "password",
    validation: {
      type: "string",
      refine: {
        condition: ["confirmPassword", "password"],
        operator: "equal",
        message: "Password do not match",
        path: ["confirmPassword"],
      },
    },
  },
];
