import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./styles.module.css";

const Modal = ({ children, show, layerStyle, pos, makeCloseItself }) => {
  const popEl = useRef(null);
  const [offset, setOffset] = useState({});

  // useLayoutEffect(() => {

  //   if (show) {
  //     document.body.style.overflow = "hidden";
  //   }
  //   return () => {
  //     document.body.style.overflow = "visible";
  //   };
  // }, [show]);

  const adjustPos = ({ offset, pos }) => {
    const { width, height } = offset;

    const { vertical, horizontal } = pos;

    const match = /center|middle/;

    const left = match.test(horizontal) ? "50%" : `${horizontal}px`;
    const top = match.test(vertical) ? "50%" : `${vertical}px`;

    const marginLeft = match.test(horizontal)
      ? { marginLeft: `-${width / 2}px` }
      : {};
    const marginTop = match.test(vertical)
      ? { marginTop: `-${height / 2}px` }
      : {};

    return {
      left,
      top,
      ...marginLeft,
      ...marginTop
    };
  };

  useLayoutEffect(() => {
    if (popEl && show) {
      const width = popEl.current.offsetWidth;
      const height = popEl.current.offsetHeight;
      const offset = adjustPos({ offset: { width, height }, pos });
      setOffset(offset);
    }
    return () => {};
  }, [show]);

  const wrapClass = show ? `${styles.wrapmd} ${styles.show}` : styles.wrapmd;

  const popClass = show
    ? `${styles["pop-wrap"]} ${styles.show}`
    : styles["pop-wrap"];

  return (
    <div className={wrapClass}>
      <div
        className={styles.layer}
        style={layerStyle}
        onClick={makeCloseItself}
      />
      <div className={popClass} ref={popEl} style={offset}>
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  show: false,
  makeCloseItself: () => {},
  pos: {
    vertical: "center",
    horizontal: "center"
  },
  layerStyle: {}
};

export default Modal;
