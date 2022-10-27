import React from 'react';
import { trainghiem } from '../../images/images';
import { useTranslation } from 'react-i18next';
import PhoneFT from './Phone/PhoneFT';
import { GGPL, Apple } from '../../images/images';
import './css/Experience.css';

const Experience = function(props) {
const { t } = useTranslation()

  return (
    <div className="dsmkcmmcmcv" id="Section_experience">
      <div className="gpt3__possibility section__padding" id="possibility">
       {/* <div className="gpt3__possibility-image">*/}

          {/*<img src={trainghiem} alt="Robot" />*/}
          <span className="Experience_Css_kls">
          <h1 className="Experience_Css_kl">Bắt đầu huấn luyện trợ lý của chính bạn.</h1>
          <p>Phiên bản vẫn đang trong quá trình thử nghiệm và sẽ có một số lỗi không mong muốn xảy ra nếu bạn tải xuống bạn sẽ phải chấp nhận mọi điều khoản của chúng tôi.</p>
          <span className="Experience_Css_kls_button">
            <button><img src={Apple} className="Experience_Css_kls_button_img1"/>Download App</button>
            <button><img src={GGPL} className="Experience_Css_kls_button_img2"/>Download App</button>
          </span>
          </span>

        {/*</div>*/}
        <div className="gpt3__possibility-content">
         {/* <h4>{t('Chức năng mô phỏng hiện chưa có sẵn')}</h4>
          <h1 className="gradient__text">{t('Khả năng')}</h1>
          <p>{t('Nội dung section D')}.</p>
          <h4>{t('Trải nghiệm thử tính năng')}</h4>
          <button className="dsmkmcmmc">{t('trải nghiệm')}</button>*/}
          <PhoneFT/>
        </div>
      </div>
    </div>
  )
}

export default Experience;
