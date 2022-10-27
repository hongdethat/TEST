import { useTranslation } from 'react-i18next';
import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import './css/Introduce.css';

import { BiCloudLightRain, BiChevronRight } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";
import { GiSolarSystem } from 'react-icons/gi';
import { CgDatabase } from 'react-icons/cg';
import { BsArrowRightShort } from 'react-icons/bs';

function Introduce() {
const { t } = useTranslation()

const Data = [{
  id:1,
  name: 'Huấn luyện',
  icon: <BiCloudLightRain className="size_btkpvt SIR"/>,
  beta: '(Beta)',
  title: 'Huấn luyện tri thức cho AI bằng mô hình deep learning',
  content: 'Huấn luyện dữ liệu',
  css: '',
  New: '(New)'
},
{
  id:2,
  name: 'Chuyển hóa dữ liệu',
  icon: <CgDatabase className="size_btkpvt SIB"/>,
  beta: '(Beta)',
  title: 'Chuyển hóa bằng nhiều loại phương thức',
  content: 'Chuyển hóa dữ liệu',
  css: '',
  New: '(New)'
},
{
  id:3,
  name: 'universe',
  icon: <GiSolarSystem className="size_btkpvt SIG"/>,
  beta: '(Beta)',
  title: 'Khám phá vũ trụ ảo thông qua AI',
  content: 'Solar system',
  css: '',
  New: '(New)'
}]

  return (
      <div className="ldpsdmfdfdv background_color_section_introduce" id="Section_introduce">
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
          <div className="gpt3__whatgpt3-feature">
           <h1 className="Introduce_color__text">Điều khiển trên mọi thiết bị</h1>
           <p className="Introduce_color__text__p">Tạo ra các mạng xã hội AI, giúp trao đổi và chia sẻ nguồn dữ liệu nhằm phát triển AI đến Singularity. Ngoài ra chúng tôi còn mang đến trải nghiệm vũ trụ 3D bằng công nghệ AI.</p>
           <Link to="Shop/"><button className="Introduce_color__text__btn">Đặt mua ngay</button></Link>
           {/* <Feature  title=<span className="dksnndnnc">
                              <span>{t('World-Singularity là gì?')}</span>
                              <span className="smncccsa">{t('noidung_mot')}.</span>
                            </span>
                      text=<div className="mdsmdlsdkmc">
                              <div className="mnsjnfjs">
                                <span className="mausacmuctieu">{t('Mục tiêu của chúng tôi')}</span>
                                <FiChevronRight className="FAcolor"/>
                              </div>

                              <span className="mausacssi">{t('noidung_hai')}.</span>
                            </div>
            />*/}
          </div>

      {/*    <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">{t('Khả năng')}</h1>
            <p className="dknsaddsad Font_text">{t('Khám phá Thư viện')} <BiChevronRight /></p>
          </div>*/}

          <div className="gpt3__whatgpt3-container">
          <div className="Introduce_color__text__BACK">
          {Data.map(({ title, name, icon, beta, css, content, New, id }) => (
            <span className="Introduce_backgroundbox" key={id}>
             <span>{icon}</span>
             <b className="Introduce_backgroundbox__bb">{content} {New}</b>
             <p className="Introduce_backgroundbox__pp">{title}</p>
            </span>
          ))}
          </div>
           {/*{Data.map(({ title, name, icon, beta, css, content, New, id }) => (
            <Feature title={t(name)} key={id}
                     text=<span className="mmmmmmccsssxa">
                          <span>{t(title)} {New}</span>
                            <div className="nenkpvtt">
                              <span></span>
                              <button className="mausaccuanut">
                              <div className="cangiuavt">
                                {icon}
                                <strong style={{textTransform: 'capitalize', whiteSpace: 'nowrap'}} >{t(content)} {beta}</strong>
                                <BsArrowRightShort size={18}/>
                              </div>
                              </button>
                              
                            </div>                            
                          </span>
            />
          ))}*/}
          </div>
        </div>
      </div>
    );
  }

// const Feature = props => {
// const { t } = useTranslation()
//   return (
//     <div className="gpt3__features-container__feature">
//       <div className="gpt3__features-container__feature-title"><div />
//         <h1>{props.title}</h1>
//     </div>

//     <div className="gpt3__features-container_feature-text">
//       <span>{props.text}</span>
//     </div>

//   </div>
//   );
// };

export default Introduce;

