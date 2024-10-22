import {
  FieldType,
  FormField,
  InputType,
  ValidationType,
} from "@/types/form-type";

export const formObj: FormField[] = [
  {
    defaultValue: "",
    id: "username",
    label: "Username",
    name: "username",
    placeholder: "Username",
    input: {
      type: InputType.Input,
    },
    type: FieldType.Text,
    validation: {
      type: ValidationType.String,
      min: {
        value: 2,
        message: "Username must be at least 2 characters.",
      },
      max: {
        value: 8,
        message: "Username must not be more than 8 characters.",
      },
    },
  },
  {
    defaultValue: "",
    id: "firstName",
    label: "First Name",
    name: "firstName",
    placeholder: "First Name",
    input: {
      type: InputType.Input,
    },
    type: FieldType.Text,
    validation: {
      type: ValidationType.String,
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
    input: {
      type: InputType.Input,
    },
    type: FieldType.Text,
    validation: {
      type: ValidationType.String,
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
    input: {
      type: InputType.Input,
    },
    type: FieldType.Email,
    validation: {
      type: ValidationType.Email,
      message: "Invalid email.",
    },
  },
  {
    defaultValue: "",
    id: "password",
    label: "Password",
    name: "password",
    placeholder: "Password",
    input: {
      type: InputType.Input,
    },
    type: FieldType.Password,
    validation: {
      type: ValidationType.String,
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
    input: {
      type: InputType.Input,
    },
    type: FieldType.Password,
    validation: {
      type: ValidationType.String,
      refine: {
        condition: ["confirmPassword", "password"],
        operator: "equal",
        message: "Password do not match",
        path: ["confirmPassword"],
      },
    },
  },
  {
    defaultValue: "",
    id: "gender",
    label: "Gender",
    name: "gender",
    placeholder: "Select a gender",
    input: {
      type: InputType.Select,
      values: [
        {
          value: "male",
          label: "Male",
        },
        {
          value: "female",
          label: "Female",
        },
      ],
    },
    validation: {
      type: ValidationType.String,
      min: {
        value: 1,
        message: "Gender is required.",
      },
    },
  },
];
