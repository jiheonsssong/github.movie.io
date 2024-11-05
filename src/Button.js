import PropTypes from "prop-types";
import style from "./Button.module.css";

export default function Button({ text, onClick}) {
  return <button className={style.btn} onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
