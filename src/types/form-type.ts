// export type InputType = "input" | "select" | "radio" | "checkbox";
// export type FieldType = "text" | "email" | "password" | "date";
// export type ValidationType = "string" | "email";
export enum InputType {
  Input = "input",
  Select = "select",
  Radio = "radio",
  Checkbox = "checkbox",
}

export enum FieldType {
  Text = "test",
  Email = "email",
  Password = "password",
  Date = "date",
}

export enum ValidationType {
  String = "string",
  Email = "email",
}

export type FormValidation = {
  type: ValidationType;
  min?: { value: number; message: string };
  max?: { value: number; message: string };
  message?: string;
  refine?: {
    condition: string[];
    operator: "equal";
    message: string;
    path: string[];
  };
};

export type FormField = {
  defaultValue: string;
  id: string;
  label: string;
  name: string;
  placeholder: string;
  input: {
    type: InputType;
    values?: Array<{ value: string; label: string }>;
  };
  type?: FieldType;
  validation: FormValidation;
};
