import './css/NewsHistory.css';
import Database from '../../database/Admin';
import { AiOutlineBarChart, AiOutlineEdit, AiFillStar } from 'react-icons/ai';
import { BiCommentDetail } from "react-icons/bi";
import { MdDelete, MdEdit, MdVisibility, MdMoreHoriz, MdInsertComment, MdManageAccounts } from 'react-icons/md';
import { BsFillEyeFill, BsCalendarEventFill, BsPlusCircle } from 'react-icons/bs';
import { TiArrowBack } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { deleteUser ,getallUsers } from '../service/api';

import React, { Component, useState, useEffect } from "react";
import axios from "axios";

function NewsHistory(){
  const Dem = JSON.parse(JSON.stringify(Database.user)).length;
  
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }

    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }

    const history = useNavigate();

  return (

    <div className="BaiDang_max_w_all_fl Font_text HomeDashboard_all_grids">
    <title> Tin tức - Quản lý bài đăng | WORLD SINGULARITY</title>
     <div className="TEsthgb">      
      <span className="BD3">
          <div className="BaiDang_max_w_o">
            <div className="BaiDang_max_w">
              <div className="BaiDang_max_w_abc">
                  <div className="Newshistory__back">
                    <button onClick={()=> history("/Administrator/Dashboard/News/News-List/")} className="NewsHistory__back"><TiArrowBack/></button>
                    <Link to="/Administrator/Dashboard/News/Update-News/">
                      <button className="News__history__ADD__POST Font_text"><BsPlusCircle className="NewsHistory_flex_button__quanly__icon"/>Thêm bài viết mới</button>
                    </Link>
                  </div>
                <span className="NewsHistory_flex_button__quanly">
                  <select className="BaiDang_max_w_select">
                    <option>Tất cả bài đăng ({Dem})</option>
                  </select>
                  <button className="News__history__ADD__POST__TEST"><MdManageAccounts className="News__history__ADD__POST__IO"/>Quản lý tùy chọn</button>
                </span>
              </div>


              {Database.user.map((HomepageNewsBogs) => (
              <div className="BaiDang_img_fl" key={HomepageNewsBogs.id}>
                <div className="NewsHistory__flex__all">
                  <img src={HomepageNewsBogs.link_images} alt={HomepageNewsBogs.title} className="BaiDang_img"/>
                    <span className="NewsHistory__title__Flex">
                      <span className="NewsHistory__title">
                        <h3>{HomepageNewsBogs.title}</h3>
                        <div className="NewsHistory__contents">{parse(HomepageNewsBogs.content)}</div>
                      </span>
                      <div className="NewsHistory__contents__center">
                        <MdInsertComment className="utilities1"/>
                        <AiFillStar className="utilities2"/>
                        <BsCalendarEventFill className="utilities3"/>
                        <span>Ngày đăng {HomepageNewsBogs.Date}</span>
                      </div>
                    </span>
                     <span className="NewsHistory__title__span">
                      <Link to={`/Administrator/Dashboard/News/Editor-posts/${HomepageNewsBogs.id}`} className="NewsHistory__contents_BR EDIT1"><MdEdit className="NewsHistory__Eddit"/>Edit</Link>
                      <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}`} target="_blank" className="NewsHistory__contents_BR EDIT2"><MdVisibility className="NewsHistory__Views"/>View</Link>
                      <a onClick={() => deleteData(HomepageNewsBogs.id)} className="NewsHistory__contents_BR EDIT3"><MdDelete className="NewsHistory__DElete"/>Delete</a>
                      <div className="NewsHistory__contents_BR EDIT4"><MdMoreHoriz className="NewsHistory__More"/>More...</div>
                      <div className="EDIT5"></div>
                      <div className="EDIT6"></div>
                    </span>
                </div>
            
              </div>
              ))}
            </div>
          </div>
        </span>
        </div>
      </div>
    );
  }
export default NewsHistory;
