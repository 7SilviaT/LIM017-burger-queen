import React from "react";
import styles from "./public.module.css";

const PublicTemplate = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PublicTemplate;
