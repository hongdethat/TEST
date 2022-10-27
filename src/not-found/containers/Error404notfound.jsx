import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../../logo/Logo';
// import Footers from '../../footer/containers/Footers';
import { Link } from 'react-router-dom';
import Login from '../../header/Login';
import Language from '../../header/Language';
import { notfound } from '../../images/images';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import './Error.css';

const Error404notfound = function(props) {

const { t } = useTranslation();

  return (
    <div>
  <div className="err_background App">
    <title>{t('Page not found')} | AI Singularity</title>
        <div className="err_background_header">
          <div className="Assistant_background_question_paddingdsmflecx">
            <Logo/>
            <div className="Assistant_background_question_paddingnsja"></div>
            <p>Không tìm thấy trang</p>
          </div>
          <span className="Error404notfound_fl_span2dls">
          <div className="Error404notfound_fl_lang"><Language/></div>
          <Login/>
          </span>
        </div>

      <div className="wrapper__Error404notfound">
        <div className="content__Error404notfound">
          <img src={notfound} className="image__Error404notfound" alt="Image 404" />
          <article className="info__Error404notfound">
            <h2 className="info__Error404notfound-title">Không tìm thấy trang</h2>
            <p className="info__Error404notfound-description Font_text">Trang bạn đang tìm kiếm có thể bị xóa hoặc không tồn tại.</p>
            <span className="Error404notfound_fl_span2dlsFlex Font_text">
              <Link to="/"><button className="info__Error404notfound-btn">Quay lại trang chủ</button></Link>
              <a href="#/" className="info__Error404notfound-btn_a">Trung tâm trợ giúp</a>
            </span>
          </article>
        </div> 
        <footer className="footer__Error404notfound">
        <p>All rights reserved © 2022<a href="/" target="_blank">AI WORLD</a></p>
        <span><GrFacebookOption className="Error404notfound_fl_lang__color"/><AiOutlineTwitter className="Error404notfound_fl_lang__color"/><FiGithub className="Error404notfound_fl_lang__color"/></span>
      </footer> 
      </div>

  </div>
{/*  <div className="Assistant_background_question_padding_back">
          <Footers />
        </div>*/}
  </div>
  )
}

export default Error404notfound;
