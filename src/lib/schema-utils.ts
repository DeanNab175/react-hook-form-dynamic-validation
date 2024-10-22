import { z } from "zod";
import { FormField } from "@/types/form-type";

export function generateSchema(formObj: FormField[]) {
  const schemaObj: { [key: string]: z.ZodString } = {};

  formObj.forEach(({ name, validation }) => {
    let fieldSchema = z.string();
    if (validation.type === "string") {
      fieldSchema = z.string();
      if (validation.min) {
        fieldSchema = fieldSchema.min(validation.min.value, {
          message: validation.min.message,
        });
      }
    } else if (validation.type === "email") {
      fieldSchema = z.string().email({ message: validation.message });
    }
    schemaObj[name] = fieldSchema;
  });

  return z
    .object(schemaObj)
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match",
      path: ["confirmPassword"],
    });
}
