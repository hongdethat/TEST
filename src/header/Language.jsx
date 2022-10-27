import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from "i18next";
import cookies from 'js-cookie';
import { useDetectOutsideClick } from "./Dropdown/Dropdowns";
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/language.css';

import { viet_nam, tieng_anh, tieng_nhat } from '../images/images';
import { FaLanguage } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';

const languages = [
  { 
    id: 1,
    code: 'en',
    name: 'English',
    search: 'English, Tiếng Anh, tieng anh, en',
    country_code: 'gb',
    image: tieng_anh
  },
  { 
    id: 2,
    code: 'vn',
    name: 'Tiếng Việt',
    search: 'Tiếng Việt, Việt Nam, tieng viet, vn',
    country_code: 'vi',
    image: viet_nam
  },
  { 
    id: 3,
    code: 'jp',
    name: '日本語',
    search: 'Tiếng Nhật, Nhật Bản, Tieng nhat, jp',
    country_code: 'jp',
    image: tieng_nhat
  }
]

function Language() {

  const [LangMap, setLangMap] = useState(languages);

  const searchHandler = event => {
    let searcjQery = event.target.value.toLowerCase(),
      displayedContacts = languages.filter(LangSearch => {
        let searchValue = LangSearch.search.toLowerCase();
        return searchValue.indexOf(searcjQery) !== -1;
        console.log('abc')

      });
    setLangMap(displayedContacts);
  };

  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'vn';


  //onclick modal language
  const dropdownRefsa = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRefsa, false);
  const onClicksa = () => setIsActive(!isActive);
  //kết thúc onclick modal language

  const [toggleMenu2, setToggleMenu2] = useDetectOutsideClick(dropdownRefsa, false);

  const [activemenu, setactivemenu] = useDetectOutsideClick(dropdownRefsa, false);
  
  const Lang = props => {
    return (
      <div key={props.id}>
        <Link to={props.code} className="Language_input__code">
          <label className="sdksmmvvv Language_option_flex" key={props.country_code} 
          onClick={() => { i18next.changeLanguage(props.code)}}
        >
          <img src={props.image} className="anh_img" alt={t('alt_img') + "'" + t('lg_change') + "'"}/>
          <p className="hover_language">{props.name}</p>
            
          </label>
        </Link>
      </div>
    );
  };


  return (
      <div className="trinh_tha_xuong tt_language">
          {toggleMenu2
          ? <div onClick={() => setToggleMenu2(false)} className="kkhai">
              <button className="btn_lg" onClick={onClicksa} data-tip data-for="Ngonngu">
              <label onClick={() => setactivemenu(!activemenu)} className={activemenu ? "lgcoloractive" : "lgcolor"} htmlFor="bien_toggle_menu" style={{display: 'flex', alignItems: 'center', gridGap: '5px',cursor: 'pointer',justifyContent: 'center',fontSize: '21px'}}>
                <span className="khsd">{t('Ngôn ngữ')}</span>
                 <IoIosArrowUp size={13} className="cusorksnd"/>
              </label>
              </button>
            </div>

          : <div onClick={() => setToggleMenu2(true)} className="kkhai">
              <button className="btn_lg" onClick={onClicksa} data-tip data-for="Ngonngu">
                <label onClick={() => setactivemenu(!activemenu)} className={activemenu ? "lgcoloractive" : "lgcolor"} htmlFor="bien_toggle_menu" style={{display: 'flex', alignItems: 'center', gridGap: '5px',cursor: 'pointer',justifyContent: 'center',fontSize: '21px'}}>
                  <span className="khsd">{t('Ngôn ngữ')}</span>
                   <IoIosArrowDown size={13} className="cusorksnd"/>
                </label>
              </button>
            </div>}

          <div className="menu-containerl">
              <nav
                ref={dropdownRefsa}
                className={`menulst ${isActive ? "activelst" : "inactive"}`}
              >
                <div className="the_profilesxsc">
                  
                  <div className="Language_input">
                    <AiOutlineSearch className="Language_input_icon"/>
                    <div className="Language_input_Gack"></div>
                    <input type="text" placeholder="Tìm kiếm ngôn ngữ..." onChange={searchHandler}/>
                  </div>

                    {LangMap.map(LangSearch => {
                      return (

<Lang
                          key={LangSearch.id}
                          name={LangSearch.name}
                          image={LangSearch.image}
                          code={LangSearch.code}
                          country_code={LangSearch.country_code}
                        />
                      );
                    })}

                </div>
              </nav>
          </div>

        </div>
              
  )
}
export default Language;
