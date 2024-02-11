import { useRef } from "react";
import Button from "../Button/Button";
import styles from "./Search.module.scss";

const Search = ({ id, label }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} className={styles.inputBar} />
    </div>
  );
};

export default Search;
