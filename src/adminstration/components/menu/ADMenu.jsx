import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu
} from "react-pro-sidebar";

import { Link } from 'react-router-dom';
// import Function from "../Function/Function";
// import useModal from '../../../../Modal/useModal';
import '../css/Function.css';

import { FaList, FaRegHeart, FaHeart, FaUsersCog } from "react-icons/fa";
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiMail, FiExternalLink } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiCommentDetail } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlinePlus, AiOutlineBarChart } from 'react-icons/ai';
import { BsFillFileEarmarkPostFill, BsPen } from 'react-icons/bs';
import "react-pro-sidebar/dist/css/styles.css";
import "../css/Dashboard.css";

function ADMenu() {
  const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  
  return (
    <>

      <div className="Dashboard_icon_flexbar">
        <span className="Dashboard_icon_span_height">
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader className="Dashboard_icon">
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? (
                  <div className="ADmenu__ceneter__icon"><FiArrowRightCircle className="Header_admin_img_ixon"/></div>
                ) : (
                  <div className="ADmenu__ceneter__icon"><FiArrowLeftCircle className="Header_admin_img_ixon5"/></div>
                )}
              </div>
            </SidebarHeader>

              {/*{menuCollapse ? (
              null
              ) : (
              <SidebarHeader>
                <Link to="News/Update-News/" className="Dashboard_icon_span_spa">
                  <button className="Dashboard_icon_span_btn"><AiOutlinePlus/> Bài đăng mới</button>
                </Link>
              </SidebarHeader>
              )}*/}

            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem active={false} icon={<AiOutlineDashboard />}>
                  <Link to="/Administrator/Dashboard/">
                    <span className="Dashboard_icon_span">Bảng điều khiển</span>
                  </Link>
                </MenuItem>
                <SubMenu title="Website" active={false} icon={<BsFillFileEarmarkPostFill />}>
                  <MenuItem>Trang chủ</MenuItem>
                  <Link to="/Administrator/Dashboard/News/News-List/"><MenuItem>Trang tin tức</MenuItem></Link>
                  <MenuItem>Trang người dùng</MenuItem>
                </SubMenu>
                <MenuItem active={false} icon={<AiOutlineBarChart />}>Thống kê</MenuItem>
                <MenuItem active={false} icon={<BiCommentDetail />}>Bình luận</MenuItem>
                <SubMenu title="Quản lý người dùng" active={false} icon={<FaUsersCog />}>
                  <MenuItem>Tài khoản người dùng</MenuItem>
                  <MenuItem>
                    <Link to="Account/Management-account-admin/">
                      Tài khoản Admin
                    </Link>
                  </MenuItem>
                </SubMenu>
                <MenuItem active={false} icon={<BsPen />}>Đăng ký mới</MenuItem>
                <MenuItem active={false} icon={<FiMail />}>Quản lý thư</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem active={false} icon={<FiExternalLink />}><a href="/" target="_blank" className="Dashboard_icon_span">Đi đến trang chủ</a></MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </span>
      </div>
    </>
  );
};

export default ADMenu;
