import React from "react";
import classes from "./ModalWindow.module.scss";

const ModalWindow = ({ setOpen }) => {
  const modalItem = JSON.parse(localStorage.getItem("modal"));

  return (
    <div className="App">
      <div className={classes.overlay}>
        <div className={classes.modal}>
          <svg
            onClick={() => setOpen(false)}
            height="200"
            viewBox="0 0 200 200"
            width="200"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src={modalItem.download_url} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
