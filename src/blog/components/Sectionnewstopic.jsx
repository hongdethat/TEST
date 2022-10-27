import './css/Section_news_topic.css';
import { BsArrowRight } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Tabs, Tab, Content} from "./functions/tab/Tabtopic";
import { BiTimeFive } from 'react-icons/bi';
import { HiArrowSmRight } from 'react-icons/hi';
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Database from '../../database/Admin.json';
import { FiChevronRight } from "react-icons/fi";

function Sectionnewstopic() {

const [active, setActive] = useState(0);
const [empty, setempty] = useState();

const handleClick = e => {
  const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};


  return (
  	<div className="Section_news_topic_nen">
      <div className="Home_page_news_flex_row_2 Home_page_news_flex_row_2mobile">
        <div className="Home_page_news_flex_row_2_Hmrow">
          <span className="Home_page_news_flex_row_2_Hmrow_ppp">
            <div className="Home_page_news_flex_row_2_Hmrow_skp">Tin mới nhất</div>
          </span>
          <div className="Home_page_news_background_box">
            {Database.user.slice(Database.user.length - 3).map((HomepageNewsBogs) => (
            <span className="Home_page_news_img_flex" key={HomepageNewsBogs.id}>
              <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
                <figure className="Home_page_news_img_flexsm">
                  <img src={HomepageNewsBogs.link_images} alt={HomepageNewsBogs.title} className="Home_page_news_img"/>
                </figure>
              </Link>
              <div className="Home_page_news_img_snncxmcs">
                <div className="Home_page_news_l"><BiTimeFive/>Ngày {HomepageNewsBogs.Date}</div>
                <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
                  <figcaption className="Home_page_news_rowo">{HomepageNewsBogs.title}</figcaption>
                </Link>
              </div>
            </span>
            ))}
          </div>
            <div className="Home_page_news_margin_left_uuui"></div>
          </div>
        <div className="Home_page_news_margin_left">
          <p className="Home_page_news_row8">Đăng ký trở thành cộng tác viên?</p>
          <p className="Home_page_news_row18">Gia nhập đội ngũ cộng tác viên của chúng tôi</p>
          <span className="Home_page_news_row18FFF">Tại đây<HiArrowSmRight className="Secsion_news_title_divTopic"/></span>
        </div>
      </div>

      <div className="Section_news_topic_bacground_flex">
        <div className="Section_news_topic_bacground_flex_flexdis Secsion_news_black_1">
          <div className="Section_news_topic_bacground_map">
            {Database.user.slice(Database.user.length - 3).map((HomepageNewsBogs) => (
            <div className="Home_page_news_map" key={HomepageNewsBogs.id}>
              <div className="Home_page_news_row rh1">
                <GoPrimitiveDot className="Home_page_news_icon"/>
                <p>Hot topic</p>
              </div>
              <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
              <h4 className="Section_news_topic_map_title_h4s">{HomepageNewsBogs.title}</h4>
              </Link>
              <div className="po5"><BiTimeFive/>Ngày {HomepageNewsBogs.Date}</div>
            </div>
            ))}
          </div>

          <span className="Section_media_background_span_span_fl">
            <div className="gpt3__header-content__input">
              <input type="email" placeholder="Đăng ký nhận tin tức mới nhất" />
              <button type="button">Gửi</button>
            </div>
          </span>
        </div>

        <div className="Section_news_topic_container Secsion_news_black_2">
          <div className="Section_news_topic_container_abc_content">
            <div className="Section_news_topic_container_abc">
              {Database.user.slice(Database.user.length - 1).map((HomepageNewsBogs) => (
                <img src={HomepageNewsBogs.link_images} alt={HomepageNewsBogs.tilte} className="Section_news_topic_map_title_h4s_img" key={HomepageNewsBogs.id}/>
              ))}
            </div>
            <div className="Secsion_news_black"></div>
              <p className="Section_news_topic_p">
                Vũ trụ tin tức
                <div className="Secsion_news_title_div"></div>
              </p>
              <div className="Secsion_news_title">
              {Database.user.slice(Database.user.length - 1).map((HomepageNewsBogs) => (
              <div className="Section_news_topic_h1" key={HomepageNewsBogs.id}>
                <div className="Home_page_news_row bs1">
                  <GoPrimitiveDot className="Home_page_news_icon"/>
                  <p className="Section_news_topic_bacground_map_co">Top Trending</p>
                </div>
                <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
                  <h1 className="bs3">{HomepageNewsBogs.title}</h1>
                </Link>
                <div className="Home_page_news_row1 bs2">
                  <p className="Section_news_topic_map_time_pos_olll">27 phút trước</p>
                  <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`} >
                    <p className="Home_page_news_row2">Xem<BsArrowRight /></p>
                  </Link>
                </div>
              </div>
              ))}
            </div>
          </div> 
        </div>
        <div className="Section_news_with Secsion_news_black_3">
          <Tabs>
            <Tab onClick={handleClick} active={active === 0} id={0}>
              <p onClick={handleClick} active={active === 0} id={0} className="the_p_size">Tin mới nhất</p>
            </Tab>
            <Tab onClick={handleClick} active={active === 1} id={1}>
              <p onClick={handleClick} active={active === 1} id={1} className="the_p_size">Phổ biến</p>
            </Tab>
            <Tab onClick={handleClick} active={active === 2} id={2}>
              <p onClick={handleClick} active={active === 2} id={2} className="the_p_size">Hot topic</p>
            </Tab>
          </Tabs>
          <Content active={active === 0}> 
            <div className="Section_news_topic_all_scroll">
              <div className="Section_news_topic_all">
                {Database.user.map((HomepageNewsBogs) => (
                <div className="Section_news_topic_map_klls" key={HomepageNewsBogs.id}>
                    <Link className="Section_news_topic_map_klls_figure" to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
                      <img src={HomepageNewsBogs.link_images} alt={HomepageNewsBogs.title} className="Section_news_topic_map_data"/>
                    </Link>
                  <div className="Section_news_topic_map_sajn">
                    <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
                      <h4 className="Section_news_topic_map_title">{HomepageNewsBogs.title}</h4>
                    </Link>
                    <span className="Section_news_topic_map_title_os">
                      <div className="Section_news_topic_map_time"><BiTimeFive/>Ngày {HomepageNewsBogs.Date}</div>
                       <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/`} className="Section_news_topic_map_time_danh_muc">{HomepageNewsBogs.danh_muc}</Link>
                    </span>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </Content>
          <Content active={active === 1}>
            <p>Tab 2</p>
          </Content>
          <Content active={active === 2}>
            <p>Tab 3</p>
          </Content>
        </div>
      </div>
  	</div>
  );
}

export default Sectionnewstopic;
