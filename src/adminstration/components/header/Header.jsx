import Logo from '../../../logo/Logo';
import { MdMailOutline } from 'react-icons/md';
import { BsBell, BsSearch } from 'react-icons/bs';
import { None, iconlogo } from '../../../images/images';
import { FiUser, FiSettings } from 'react-icons/fi';
import { MdFilterAlt } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {

  const [toggleMenu_reponsive, setToggleMenu_reponsive] = useState(false);

  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const logout = () => setUser(null);

  return (
  	<div className="Header_admin_img_Background Font_text">
      <div className="Header_admin_img_Background_flex_okadsk">
        <span className="Header_admin_img_Background_fl_icon_skjm">
          <Logo/>
        </span>
        <Link to="/" className="Header_admin_img_Background_fl_icon_skjmsn" target="_blank">
          <img src={iconlogo} alt="logo" className="Header_admin_img_Backgroundsnkanaks"/>
        </Link>
        <div className="Header_admin_img_Background_gach"></div>
        <Link to="/Administrator/Dashboard"><p className="Header_admin_img_Background_fl_icon_sijska">Bảng điều khiển Dashboard</p></Link>
      </div>
      <div className="Header__border__left__display__flex">
        <span className="Header__ADMIN__FLEX_SEARCH">
          <BsSearch className="Header__border__left__SEARCH"/>
          <input type="text" placeholder="Search in dashboard..."/>
          <div className="Header__border__left"></div>
          <div className="HEADER_FILTER"><p className="Header__ADMIN_P__SEARCH">Lọc</p><MdFilterAlt/></div>
        </span>
        <div className="Header_admin_img_Background_fl">
          <MdMailOutline className="Header_admin_img_Background_fl_icon"/>
          <BsBell className="Header_admin_img_Background_fl_icon"/>
            {toggleMenu_reponsive
            ? <img src={None} alt="Avatar" className="Header_img" onClick={() => setToggleMenu_reponsive(false)}/>
            : <img src={None} alt="Avatar" className="Header_img" onClick={() => setToggleMenu_reponsive(true)}/>
            }
            {toggleMenu_reponsive && (
             <div className="Mobile_extra_header_menu_user animation_extra">
                <div className="Header_img_p_p_menu">
                  <p className="Header_img_p">Tài khoản</p>
                  <p className="Header_img_p_p"><BsBell/>Thông báo</p>
                  <p className="Header_img_p_p"><MdMailOutline/>Tin nhắn</p>
                  <p className="Header_img_p1">Cài đặt</p>
                  <Link to="Account/Profile/">
                    <p className="Header_img_p_p"><FiUser/>Hồ sơ</p>
                  </Link>
                  <p className="Header_img_p_p"><FiSettings/>Cài đặt</p>
                </div>
             </div>
            )}

        </div>
      </div>
  	</div>
  );
}

export default Header;
