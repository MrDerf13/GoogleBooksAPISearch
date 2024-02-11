import styles from "./Button.module.scss";

const Button = ({ children, callbackfn }) => {
  return (
    <button className={styles.buttons} onClick={callbackfn}>
      {children}
    </button>
  );
};

export default Button;
