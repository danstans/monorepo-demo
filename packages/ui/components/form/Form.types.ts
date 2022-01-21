import { DeepPartial, SubmitHandler, UnpackNestedValue } from "react-hook-form";

export type FormProps<TFields> = {
  formData?: any;
  defaultValues?: UnpackNestedValue<DeepPartial<any>>;
  onSubmit?: SubmitHandler<TFields>;
};
