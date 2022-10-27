import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/Feature.css';
import Phone from './Phone/Phone';
import { control, bluetooths } from '../../images/images';

import { VscSourceControl } from 'react-icons/vsc';
import { RiBluetoothFill } from 'react-icons/ri';
import { BsHddNetwork } from 'react-icons/bs';
import { GiMeshNetwork } from 'react-icons/gi';
import { FiBluetooth } from 'react-icons/fi';
import { HiSpeakerphone } from 'react-icons/hi';

const Features = function(props) {
const { t } = useTranslation()
const Data = [{
  id: 1,
  icon: <VscSourceControl className="world_feature_img_frame"/>,
  title: 'Kiểm soát',
  content: 'kiemsoat'
},
{
  id: 2,
  icon: <FiBluetooth className="world_feature_img_frame"/>,
  title: 'Điều khiển',
  content: 'dieukhien'
},
{
  id: 3,
  icon: <HiSpeakerphone className="world_feature_img_frame"/>,
  title: 'Giọng nói',
  content: 'dieukhien'
}]
  return (
    <div className="world_feature_flex" id="Section_feature">
        <div className="gpt3__possibilitys section__padding">
          <div className="approachThree-left">
          <h4 className="world_feature_text">{t('Hãy trang bị riêng cho mình một trợ lý')}, {t('Tại sao không?')}?</h4>
            <span className="section__feature_margin">
{/*              <div className="world_feature_height"></div>*/}
              {/*<h4 className="world_feature_backgrounds">{t('Ứng dụng World AI')}</h4>*/}
              <span className="world_feature_background">Ứng dụng World AI sẽ cho phép bạn điều khiển trợ lý AI trực tiếp bằng những hoạt động giao tiếp hàng ngày của bạn, chia sẻ cảm xúc hoặc cùng trò chuyện với bạn.</span>
            </span>
            <div className="Feature_text">
            {Data.map(({ icon, title, content, id }) => (
              <div className="Featute_text_p_cis" key={id}>
                <span>{icon}</span>
                <p className="Featute_text_p">{title}</p>
              </div>
            ))}
            </div>
          {/*  <div className="world_feature_chia">
              {Data.map(({ icon, title, content, id }) => (
                <div key={id}>
                  <img src={icon} alt="control" className="world_feature_img"/>
                  <h3>{t(title)}</h3>
                  <span className="world_feature_p">{t(content)}.</span>
                </div>
              ))}
            </div>*/}
          </div>
          <Phone className="world_feature_phone"/>
        </div>

    </div>
    )
}

export default Features;
