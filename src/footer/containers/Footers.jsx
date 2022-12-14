import React from 'react';
import Logo from '../../logo/Logo';
import Link_phu from '../components/Link_phu/Link_phu';
import Register_popup_news from '../components/Tab_for/Register_news/Register_popup_news_coming_soon/Register_popup_news';
import Register_popup_thu from '../components/Tab_for/Register_news/Register_popup_news_coming_soon/Register_popup_thu';
import '../components/Footer.css';
import Text_link from '../components/Text_link/Text_link';
import { useTranslation } from 'react-i18next';
import { viet_nam, tieng_anh, tieng_nhat } from '../../images/images';
import { GrFacebookOption } from 'react-icons/gr';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { Tabs, Tab, Content, TextNote} from "../components/Tab/Tab";
import { RiContactsLine, RiSingleQuotesL } from 'react-icons/ri';
import { useState } from 'react';
import { BiPlanet } from 'react-icons/bi';
import Trich_dan from '../components/Tab_for/Trich_dan/Trich_dan';
import Register_news from '../components/Tab_for/Register_news/Register_news';
import Slider_planet from '../components/Tab_for/Slider_planet/Slider_planet';


const Footers = function(props) {
const { t } = useTranslation();


const [active, setActive] = useState(0);
const handleClick = e => {
  const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};


  return (
    <footer className="av" id="footer_img">

      <div className="cuoitrangf-distributed">

      <div className="mb1">
      <div className="chiafts">

      <span className="FT1">

        <Text_link />

      </span>
          
            <ul className="tabs tabul FT2">
              <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                  <span onClick={handleClick} active={active === 0} id={0} className="Tab_for_flext">
                    <RiContactsLine className="Tab_for_icon " onClick={handleClick} active={active === 0} id={0}/>
                    <TextNote onClick={handleClick} active={active === 0} id={0}>
                      {t("Contact")}
                    </TextNote>
                  </span>
                </Tab>
                <Tab onClick={handleClick} active={active === 1} id={1}>
                  <span onClick={handleClick} active={active === 1} id={1} className="Tab_for_flext">
                    <RiSingleQuotesL className="Tab_for_icon " onClick={handleClick} active={active === 1} id={1}/>
                    <TextNote onClick={handleClick} active={active === 1} id={1}>
                      Quote
                    </TextNote>
                  </span>
                </Tab>
                <Tab onClick={handleClick} active={active === 2} id={2}>
                  <span onClick={handleClick} active={active === 2} id={2} className="Tab_for_flext">
                    <BiPlanet className="Tab_for_icon " onClick={handleClick} active={active === 2} id={2}/>
                    <TextNote onClick={handleClick} active={active === 2} id={2}>
                      {t("Kh??m ph?? h??nh tinh")}
                    </TextNote>
                  </span>
                </Tab>
              </Tabs>
            </ul>  

        <span className="FT0">
          <Content active={active === 0}>
            <Register_news/>
          </Content>
          
          <Content active={active === 1}>
            <Trich_dan/>
          </Content>

          <Content active={active === 2}>
            <Slider_planet/>
          </Content>
        </span>


      {/*<span className="FT4">
        <img src={look} alt="Copyright" />
        <div className="CHiaFTs">
          <span className="FTCPR1">GDPR</span>
          <span className="FTCPR2">???? b???o m???t</span>
        </div>
      </span>*/}
        
      <span className="FT3">
        <button><img src={viet_nam} alt="Vi???t nam" className="Footer_imgs"/><span className="Footer_imgs_text">Ti???ng vi???t</span></button>
        <button><img src={tieng_anh} alt="English" className="Footer_imgs"/><span className="Footer_imgs_text">English</span></button>
        <button><img src={tieng_nhat} alt="?????????" className="Footer_imgs"/><span className="Footer_imgs_text">?????????</span></button>
      </span>

      <span className="FT4">
       <div className="FTHS">
         <input type="text" placeholder={t("?????a ch??? Email")}/>
         <button>SIGNUP</button>
       </div>
      </span>

      <span className="FT5">
{/*        <h4 className="Text_link_color">{t('Theo d??i ch??ng t??i t???i')}</h4>*/}
        <div className="Text_link_social">
          <GrFacebookOption className="GrFacebookOption"/>
          <FaInstagram className="FaInstagram"/>
          <FaTwitter className="FaTwitter" />
        </div>
      </span>
      
      <span className="FT6">
        <Link_phu />
      </span>
        </div>
      </div>     
          
        </div>

    </footer>
  )
}
export default Footers;