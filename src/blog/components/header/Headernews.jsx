import './css/Header_news.css';
import { Link } from "react-router-dom";
import Logo from '../../../logo/Logo';
import Language from '../../../header/Language';
import Dropdown from '../../../header/Dropdown';
// import Mobile_header from'../../../../Component/Header/Mobile/Mobile_header';

import { useTranslation } from 'react-i18next';

function Headernews() {

const { t } = useTranslation()


  return (

      <nav className="Header_news_background">
        {/*<Mobile_header />*/}

        <span className="chiaheadera">
          <div className="ghv">
            <div className="Header_main_right">
              
              <Logo />

            </div>

            <ul className="chiadoimenu">

              <Dropdown />

            </ul>
          </div>
        
        <div className="chiup">
           <Language />
           <button className="Header_news_color Header_news_background_mobile gg_mobile">Tải xuống Assistant</button>
           <button className="Header_news_color Header_news_background_mobile">Khám phá vũ trụ</button>
        </div>
    </span>
  </nav>
  );
}

export default Headernews;
