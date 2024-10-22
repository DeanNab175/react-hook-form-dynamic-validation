import { zodResolver } from "@hookform/resolvers/zod";
import { /* ControllerRenderProps, */ useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "@/components/ui/input";
import { generateSchema } from "@/lib/schema-utils";
import { formObj } from "@/data/form-obj";

const signupFormSchema = generateSchema(formObj);
type SignupFormType = z.infer<typeof signupFormSchema>;

const formDefaultValues = formObj.reduce(
  (acc: { [key: string]: string }, { id, defaultValue }) => {
    acc[id] = defaultValue;
    return acc;
  },
  {}
);
console.log("signupFormSchema", signupFormSchema);
console.log("formDefaultValues", formDefaultValues);

function SignupForm() {
  const form = useForm<SignupFormType>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: formDefaultValues,
  });

  const onSubmit = (values: SignupFormType) => {
    console.log(values);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h3>Signup Form</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {formObj.map(({ id, label, placeholder, type }) => (
            <FormField
              key={id}
              control={form.control}
              name={id}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input type={type} placeholder={placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default SignupForm;
