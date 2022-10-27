import './css/Header_extra.css';
import Mobileextraheader from './Mobile/Mobileextraheader';
import $ from 'jquery';

import { FaRegShareSquare, FaBloggerB } from 'react-icons/fa';
import { Data_header } from '../Data/Data.js';
import { Link, NavLink } from "react-router-dom";
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { useState } from 'react';
import SearchInput from '../SearchNews/SearchInput';

function Headerextra() {

$(window).scroll(function(){
    if ($(window).scrollTop() >= 73.6) {
        $('.header_news').addClass('fixed-header');
        $('.header_news div').addClass('visible-title');
    }
    else {
        $('.header_news').removeClass('fixed-header');
        $('.header_news div').removeClass('visible-title');
    }
});

const navLinkClass = ({ isActive }) => {
  return isActive ? "Linkdefault activeLink" : "Linkdefault"
}
  return (
    <div className="TEstExtra">
      <Mobileextraheader />
      <nav className="header_news">
        <ul className="Header_extra_mn">
          {Data_header.map(({link, name, Readnews, id}) => (
            <li className="Header_extra_font_size" key={id}>
              <NavLink to={link}
                    className={navLinkClass} >
                {name}
              </NavLink>
            </li>
            ))}
          </ul>
          
          <ul className="Header_extra_mn">
            <li>
              <SearchInput/>
            </li>
            <li className="Header_extra_0">
              <div className="Header_extra_icon_share">
                <GrFacebookOption className="Header_extra_icon_icon_share1"/>
                <AiOutlineTwitter className="Header_extra_icon_icon_share2"/>
                <FaBloggerB className="Header_extra_icon_icon_share3"/>
              </div>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Headerextra;
