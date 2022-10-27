import React, { useState } from 'react';
import PopupModal from '../../../modal/PopupModal'
import { IoMdDownload } from "react-icons/io";
import "../css/Download.css";

function Download(props) { 

  const [popup, setpopup] = useState(false);
  const closepopup = () => {
    setpopup(false);
  };
  
  return (
    
    <div className="Font_text">
      <button className="mausaccuanuti ppdlbt-toggle cangiuavtsscsc" onClick={() => setpopup(true)}>
          <IoMdDownload />
          <span className="salkdjoiasdj">Download Now</span>
      </button>
      
     <PopupModal
        show={popup}
        makeClose={closepopup}
        makeCloseItself={closepopup}
      />
  </div>
  )
}
export default Download;