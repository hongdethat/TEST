import React, { useState } from "react";
import "../css/style.css";
import { useTranslation } from 'react-i18next';

export default ({ LGclose, ClickLogin }) => {
  const { t } = useTranslation();
  // check checkbox
  const [boxes, setBoxes] = useState([]);
  function handleChange(e) {

    const { parentNode: { children } } = e.target;

    const index = [...children].indexOf(e.target);

    const newState = [...boxes];

    newState[index] = !newState[index];

    setBoxes(newState);
  }

  function isDisabled() {
    const len = boxes.filter(box => box).length;
    return len === 0 || len > 1;
  }
  return (
    <div>
      <main className="vbt">
        <section className="dkcs">
          <div className="dkcs__heading ggt">
            <h2>{t('extra')}</h2>
          </div>

          <div className="dkcs__content">
            <center>
              <h2 className="mauchu">{t('Term')}</h2>
            </center>
            <p className="cansangtrai">{t('Term_content')}</p>
          </div>

          <div className="dkcs__nav">

          <small>
            <i  className="Login_google_color">{t('OK')}</i>
          </small>

          <form>
            <div className="klg-group">
              <input type="checkbox" id="ok" onChange={handleChange}/>
              <label htmlFor="ok">{t('Accept')}</label>
            </div>
          </form>
          
          </div>
        </section>
      </main>

      <div className="cachnhutlg chia_lgt">
        <button type="button" className="login-with-google-btn" disabled={isDisabled()} onClick={ClickLogin}>{t('gg')}</button>

        <button type="button" className="login-with-facebook-btn" disabled>{t('fb')} (Look)</button>
      </div>
  </div>

  );
};
