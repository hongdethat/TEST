import { MenuLevelDropDown } from "./Menulevel/Data/Datamenulevel";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";
import { GiSolarSystem } from 'react-icons/gi'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from "react";
import MultiMenus from "./Menulevel/MultiMenus";

import'./css/Menu_level.css';
import "./css/Menu.css";

function Menulevel(){

const { t } = useTranslation();

 return (
    <div>
      
      <li className="the_li_menu_level Font_text">
        <MultiMenus menus={MenuLevelDropDown} />
      </li>

    </div>
  )
}

export default Menulevel;

