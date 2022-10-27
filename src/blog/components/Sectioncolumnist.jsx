import React from "react";
import ReactDOM from "react-dom";
import './css/Section_columnist.css';
import Database from '../../database/Admin.json';
import { GoPrimitiveDot } from 'react-icons/go';
import parse from 'html-react-parser';
import { BsArrowRight, BsArrowReturnRight, BsHeart } from 'react-icons/bs';
import { BiComment } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Sectioncolumnist() {

  return (
  	<div className="Section_columnist_background">
      <h4 className="Section_columnist_h4">
        Nổi bật trong tuần
        <p className="Section_columnist_p">Xem tất cả <BsArrowRight style={{color: 'red'}}/></p>
      </h4>
      <div className="Section_post_flex_div"></div>
        <div className="Section_post_flex2">
        {Database.user.slice(Database.user.length - 3).map((HomepageNewsBogs) => (
        <div className="Section_column_img_bhj" key={HomepageNewsBogs.id}>
          <Link 
              to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
          >
            <img src={HomepageNewsBogs.link_images} alt={HomepageNewsBogs.title} className="Section_column_img" />
          </Link>
          <div className="Section_column_img_bhj_all_oo">
           <div className="Section_column_img_bhj_all">
              <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/`} className="Section_column_img_bhj_all_fl_icon">
                <GoPrimitiveDot className="Section_column_img_bhj_all_icongo"/>
                <p>Tin {HomepageNewsBogs.danh_muc}</p>
              </Link>
              <Link 
              to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
              >
              <h3>{HomepageNewsBogs.title}</h3>
              </Link>
              <span className="Section_column_img_bhj_all_icongo_content">
                <p>{parse(HomepageNewsBogs.content)}</p>
              </span>
              <Link 
              to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
              >
              <div className="Section_column_img_bhj_all_fl_icon_icon2">
               Đọc toàn bộ
               <BsArrowReturnRight className="Section_column_img_bhj_all_icongo_content_sk"/>
              </div>
              </Link>
           </div>

            <div className="Section_column_img_bhj_flex8">
                <span className="Section_column_img_bhj_all_icongo_content_span">
                 <BsHeart className="Section_column_img_bhj_flex8s"/>
                 <p>1k</p>
                </span>
                <span className="Section_column_img_bhj_all_icongo_content_span">
                  <BiComment className="Section_column_img_bhj_flex8s"/>
                  <p>1k</p>
                </span>
            </div>
          </div>
        </div>
        ))}
      </div>
  	</div>
  );
}

export default Sectioncolumnist;
