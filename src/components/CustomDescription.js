import React from "react";
import classes from "./CustomDescription.module.css";

export default function CustomDescription(props) {
  return <p className={classes.description}>{props.children}</p>;
}
