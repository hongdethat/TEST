import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/loading.css';
import Logo from '../../../logo/Logo';

function Loading() {

  const { t } = useTranslation();

  return (
    <div className="ipl-progress-indicator" id="ipl-progress-indicator">
      <div className="ipl-progress-indicator-head">
        <div className="first-indicator"></div>
        <div className="second-indicator"></div>
      </div>

      <div className="insp-logo-frame">
        <div className="chiatt_ld">
          <div className="chiaall_ld">
            <div className="chia_loading">

              <div className="loader_ld">
                <div className="inner_ld one_ld"></div>
                <div className="inner_ld two_ld"></div>
                <div className="inner_ld three_ld"></div>
              </div>

            </div>

            <div className="chia_loadings App">
              <center className="mau_ld">{t('LOADING')}</center>

              <div className="LoaderBalls">
                <div className="LoaderBalls__item LoadingpageBG"></div>
                <div className="LoaderBalls__item LoadingpageBG"></div>
                <div className="LoaderBalls__item LoadingpageBG"></div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
  );
}

export default Loading;
