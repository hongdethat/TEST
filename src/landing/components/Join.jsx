import React, { useEffect } from 'react';
import Timeout from './timeout/Timeout';
import './css/Join.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function Join() {
const { t } = useTranslation()

useEffect(() => {
  let Timeout = true;               // note mutable flag
  return () => { Timeout = false }; // cleanup toggles value, if unmounted
}, []);           
  return (
  	<div className="Section_join_padding">
      <div className="gpt3__cta" id="Section_join">
        <div className="gpt3__cta-content">
          <span className="kncnncnmxnx">
            <p>{t('Kết thúc sau')}</p>
            <Timeout />
          </span>
          <h3>{t('Tham gia ngay bây giờ để bắt đầu truy cập & khám phá những công nghệ tương lai')}.</h3>
        </div>
        <div className="gpt3__cta-btn">
          <a to="/Login/"><button type="button">{t('Tham gia')}</button></a>
        </div>
      </div>
  	</div>
  );
}

export default Join;
