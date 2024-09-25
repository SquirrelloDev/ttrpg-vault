import { forwardRef, InputHTMLAttributes, useId } from "react";
import { useFormContext } from "react-hook-form";
interface FormTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
}
const FormTextInput = forwardRef<HTMLInputElement, FormTextInputProps>(
  ({ placeholder, type, name, ...props }, ref) => {
    const id = useId();
    const {
      register,
      formState: { errors },
    } = useFormContext();
    return (
      <div className="block">
        <label htmlFor={id} className="text-white">
          {placeholder}
        </label>
        <input
          id={id}
          placeholder=" "
          type={type}
          className="px-6 py-4 my-3 bg-neutral-800 rounded-lg text-white text-xl font-kalam border border-lime-900 focus:outline-none focus:border-lime-700"
          ref={ref}
          {...register(`${name}`)}
          {...props}
        />
        {errors[name!] && (
          <p className="text-red-500">{`${errors[name!]?.message}`}</p>
        )}
      </div>
    );
  }
);
export default FormTextInput;
