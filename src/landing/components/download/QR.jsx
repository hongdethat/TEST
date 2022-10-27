import React from 'react';
import { Qr_code } from '../../../images/images';
import { useTranslation } from 'react-i18next';

import { FaGooglePlay } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import { DiWindows } from "react-icons/di";


function QR(props) {
const { t } = useTranslation();
  return (
    <div className="Qr_code_flex">
        <span className="Qr_code_grid">
          <div className="chiaqr QRCODE1">
            <img src={Qr_code} alt={t('alt_img') + "'" + "QR CODE" + "'"}/>
          </div>
          <div className="chiaamw QRCODE2">
            <div className="chiaamws">
              <span className="background_icon">
                <FaGooglePlay/>
                <div className="dfhshdf">
                  <span className="fontss">{t('Get it on')}</span>
                  <span className="fontsss">Google play</span>
                </div>
              </span>
              <span className="background_icon">
                <GrApple/>
                <div className="dfhshdf">
                  <span className="fontss">{t('Available on the')}</span>
                  <span className="fontsss">App store</span>
                </div>
              </span>
              <span className="background_icon">
                <DiWindows/>
                <div className="dfhshdf">
                  <span className="fontss">{t('Available on the')}</span>
                  <span className="fontsss">Window</span>
                </div>
              </span>
            </div>
          </div>
        </span>
        <center className="QRCENTER"> 
          <h3 className="c-connaks__title" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gridGap: '5px', color: ' rgb(15, 23, 36)', fontSize: '16px' }}>{t('ct_dl')} 
            <div className="LoaderBalls">
              <div className="LoaderBalls__item" />
              <div className="LoaderBalls__item" />
              <div className="LoaderBalls__item" />
            </div>
          </h3>
          <span className="c-connaks__description xcxvcbvbcv"><span className="QRcontent">{t('ct_dl_1')}</span>, <a href="#/" className="traiphai gjoob"> {t('ct_dl_2')}</a></span>
        </center>
        <div className="cangiuadlss">
          <div className="gachdl" />
        </div>
        <div className="cangiuadls">
          <span className="Qr_code_flex_p">{t('Đăng ký và tải xuống giới hạn')}</span>
          <button className="chucnangpudktButton thumot">
            <div className="vhiadoinutdownload">
              <HiDownload/>
              <font>Download</font>
            </div>
          </button>
        </div>
      </div>
  )
}
export default QR;