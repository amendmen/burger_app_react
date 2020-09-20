import React from "react";
import clasess from "./Backdrop.css";

const backdrop = (props) =>
  props.show ? (
    <div className={clasess.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
