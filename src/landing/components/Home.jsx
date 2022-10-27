import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/Home.css';

import { BsPlayFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { CanhTayRobot } from '../../images/images';
import Download from './download/Download';


function Home(props) {

  const { t } = useTranslation();

return (
    <div className="gradient__bg" id="Section_home">
        <div className="gpt3__header section__padding" id="home">
          <div className="gpt3__header-content">
            <h1 className="gradient__text">{t("Tải xuống và bắt đầu")} <span className="Section_home_flex_color">{t("huấn luyện AI")}</span> {t("cho riêng bạn")}</h1>
            <p className="Font_text">{t('pbtx')}.</p>
            <div className="sectionamenn">
              <div className="mskcknnvnnv Font_text">
                <Download/>
              </div>
              <a href="#Page_intro" className="djdsopo">
                <div className="ctdl_one">
                  <BsPlayFill className="ljsdjo"/>
                  </div>
                <div>
                  {t('Xem video')}
                </div>
              </a>
            </div>
            <div className="gpt3__header-content__people">
              <span className="Section_home_flex">
                <a href="#/"><FaFacebookSquare className="Section_home_icon" /></a>
                <a href="#/"><FaTwitterSquare className="Section_home_icon" /></a>
                <a href="#/"><AiFillGithub className="Section_home_icon" /></a>
              </span>
              <p className="Font_text">{t('Theo dõi chúng tôi để cập nhật thông tin mới nhất')}</p>
            </div>
          </div>
          <div className="gpt3__header-image">
            <img src={CanhTayRobot} className="Section_home_img" alt={t('alt_img') + "'" + "Robot" + "'"}/>
          </div>
        </div>
        <div id="section04" className="demo">
          <a className="lkcm" href="#Section_introduce">
            <span className="dichuyenchimuc" />
            <span className="dichuyenchimuc" />
            <span className="dichuyenchimuc" />
          </a>
        </div>
      </div>
  );
}

export default Home;
