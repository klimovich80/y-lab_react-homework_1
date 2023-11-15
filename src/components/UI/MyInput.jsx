import { forwardRef } from "react";

const MyInput = ({ children, ...props }, ref) => {
  return (
    <>
      <input
        {...props}
        ref={ref ? ref : null}
        className={`input_type_${props.theme} form__input form__input_type_${props.name}`}
        value={props.value}
      />
      <span
        className={
          props.error
            ? `form__error_visible form__error-text ${props.name}-error`
            : `form__error-text ${props.name}-error`
        }
      >
        {props.error}
      </span>
    </>
  );
};
const forwardedMyInput = forwardRef(MyInput);

export default forwardedMyInput;