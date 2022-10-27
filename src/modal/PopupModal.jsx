import React from "react";
import Modal from "./modal";
import PopupA from "./popup";

export default ({ show, makeClose, makeCloseItself }) => {
  return (
    <Modal show={show} makeCloseItself={makeCloseItself}>
      <PopupA makeClose={makeClose} />
    </Modal>
  );
};
