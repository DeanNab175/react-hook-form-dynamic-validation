export type FormValidation = {
  type: "string" | "email";
  min?: {
    value: number;
    message: string;
  };
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
  type: "text" | "email" | "password";
  validation: FormValidation;
};
