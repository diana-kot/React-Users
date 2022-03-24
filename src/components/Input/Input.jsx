import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import cn from "classnames";

const Input = ({
  id,
  value,
  className,
  label,
  error,
  handleInputChange,
  handleSubmit,
  placeholder,
  classes,

  ...attrs
}) => {
  return (
    <>
      <div className={cn(styles.wrapper__input)}>
        <div className={cn(styles.labelsWrapper, classes)}>
          {label && (
            <label className={cn(styles.inputLabel, classes)} htmlFor={id}>
              {label}
            </label>
          )}
          {attrs.required && (
            <span className={cn(styles.inputRequired, classes)}>Required</span>
          )}
        </div>

        <input
          id={id}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={placeholder}
          className={styles.input}
        />
        {error && (
          <span className={cn(styles.inputError, classes)}>{error}</span>
        )}
      </div>
    </>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};

export default Input;
