import React, { useState } from "react";
import "./mystyle.css"; // Import the CSS file
import styles from "./mystyle.module.css";

function MystyledFC() {
  let [isUnderlined, setIsUnderlined] = useState(true);

  const toggleIsUnderlined = () => {
    setIsUnderlined(!isUnderlined);
  };
  const myStyle = {
    fontSize: "25px",
    color: "blue"
  };
  return (
    <div className="my-component">
      <h2 className={`my-h2 ${isUnderlined && "underlined"}`}>
        Styled with file
      </h2>
      <button className="my-button" onClick={toggleIsUnderlined}>
        Change className content
      </button>
      <h2 style={myStyle}>Styled with js object</h2>
      <h2 className={styles.myH2}>Styled with Module as object</h2>
      <h3 className={`${styles.myH2} ${styles["my-h2"]}`}>
        Multiple className with Module as object
      </h3>
    </div>
  );
}

export default MystyledFC;
