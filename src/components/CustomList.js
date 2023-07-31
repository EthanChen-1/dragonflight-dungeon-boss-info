import React from "react";
import classes from "./CustomList.module.css";

export default function CustomList(props) {
  const otherStyles = props.className;
  return <ul className={classes.list + ` ${otherStyles}`}>{props.children}</ul>;
}
