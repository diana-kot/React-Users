import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ text, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
