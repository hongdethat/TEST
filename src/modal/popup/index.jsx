import React from "react";
import "./styles.module.css";
import { useTranslation } from 'react-i18next';
import { arrow } from '../../images/images';
import QR from '../../landing/components/download/QR';

export default ({ makeClose }) => {
  const { t } = useTranslation();
  return (
   <div className="ppdlbt">
        <div className="popup_felex">
          <div className="ppdlbt-wrapper ppdlbt-transition">
            <div>
            </div>
            <div className="ppdlbt-body">
              <div className="ppdlbt-content">
                <div className="ggback">
                  <div className="popup_felex_dif">
                    <h2 className="ppdlbt-heading mnjsdi">{t('Tải xuống hoặc quét mã')}</h2>
                      <div className="link_wrapper ppdlbt-toggle">
                      <a href="#/" className="iconclose" onClick={makeClose}>Close</a>
                      <div className="icon">
                        <img src={arrow} alt={t('alt_img') + "'" + "Close" + "'"}/>
                      </div>
                    </div>
                  </div>
                  <QR/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};
