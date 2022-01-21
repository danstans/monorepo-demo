import { DeepPartial, SubmitHandler, UnpackNestedValue } from "react-hook-form";

export interface FormProps<TFields> {
  /**
   * Array containing name, schema, props.
   */
  formData?: any;
  defaultValues?: UnpackNestedValue<DeepPartial<any>>;
  onSubmit?: SubmitHandler<TFields>;
}
