import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from "react";
import Logo from '../logo/Logo';
import { CgMenuRightAlt } from 'react-icons/cg';
import Dropdown from './Dropdown';
import SearchMenuLevel from './Menulevel/SearchMenuLevel';
import Menulevel from './Menulevel';
import Language from './Language';
import Login from './Login';
import { useDetectOutsideClick } from "./Dropdown/Dropdowns";
import { Close, Time_out } from './Menulevel/Data/Datamenulevel';
import { RB } from '../images/images';
import './css/header.css';

function Header() {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = event => {
    if (window.scrollY <= 0) {
      return setHeader("header");
    } else if (window.scrollY > 1) {
      return setHeader("header__scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

    const dropdownRef = useRef(null);
    const [sidebar, setSidebar] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setSidebar(!sidebar);


    const showSidebar = () => setSidebar(!sidebar);
    const { t } = useTranslation();

    const releaseDate = new Date('2021-09-03')
    const timeDifference = new Date() - releaseDate
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))


    //date
    var now = new Date();
    const days = ['day_1','day_2','day_3','day_4','day_5','day_6','day_7'];
    const dayName = days[now.getDay()];
    const Date_show = new Date().toLocaleDateString();
    const Time_show = new Date().toLocaleTimeString();


  return (
    <div>
      <header className={header}>
        <div className="Header_main_NAVbar_bgrextras_flex">
          <span className="Header_main_rightsks">
            <Logo/>
            <Dropdown/>
          </span>
          <span className="headerallop">
            <Language/>
            <div className="BTN_MOBILE"><Login /></div>
            <CgMenuRightAlt className="Header_main_NAVbar" onClick={showSidebar}/>
          </span>      
        </div>
      </header>

      <div className={sidebar ? 'OverlayMNLV' : null} onClick={showSidebar}></div>
          <aside className={sidebar ? 'Menulevelio activeMNLVE Font_text' : 'Menulevelio Font_text'} id="levelmenu_web">
              <div className="sadjasdhsis"></div>     
              <div className="Header_main_NAVbar_bgrextras">
              <span>
              <ul className="Menulevel_headert">
              {Close.map((Datas) =>
                <li className="the_li_menu_level js-menu-hide_Menu_level_Maga " key={Datas.id} onClick={showSidebar}>
                  <a href={Datas.link} className="MultiMenus_A">
                    {Datas.icon}{Datas.name}</a>
                </li>
              )}
              </ul>
              {/*tìm kiếm*/}
                  
                  <SearchMenuLevel/>

              {/*kết thúc tìm kiếm*/}
            <Menulevel/>

          <span className="xuongdong">
            {Time_out.map((Datas) =>
                <div key={Datas.id}>
                  {Datas.icon}
                </div>
            )}
            <i style={{fontSize: '13px'}}>{t('days_since_release', { number_of_days })}</i>
          </span>

          <div className="sadjasdhsis"></div>
            <div className="dju">
              <span className="datejk">
                <span>{t(dayName)}</span>
                <span>{Date_show}</span>
                <span>{Time_show}</span>
              </span>
            </div>
          </span>

          <span>
            <span className="Header_main_rightsk">
                {/*<i className="phien_ban">V.1.0.1</i>*/}
                <img src={RB} className="manjdsbj" />
            </span>
          </span>
          </div>

        </aside>
    </div>
  );
}

export default Header;
