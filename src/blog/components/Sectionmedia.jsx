import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import './css/Section_media.css';
import { GoPrimitiveDot } from 'react-icons/go';
import { Tabs, Tab, Content} from "./functions/tab/Tabmedia";
import Database from '../../database/Admin.json';
import { Link } from "react-router-dom";
import TabImage from './functions/TabImage/TabImage';

import { BsFillPlayFill, BsArrowRight } from 'react-icons/bs';
import { MdClose } from "react-icons/md";
import { AiOutlineEye } from 'react-icons/ai';
import { BiLoaderAlt, BiTimeFive } from "react-icons/bi";

function Sectionmedia() {

const [active, setActive] = useState(0);

const handleClick = e => {
  const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};


// modal iframe youtube
const [modal_popup, setModal] = useState(false);
const [videoLoading, setVideoLoading] = useState(true);


const openModal = () => {
  setModal(!modal_popup);
};

const spinner = () => {
  setVideoLoading(!videoLoading);
};

//random data
// const shuffle = Mang_arr => [...Mang_arr].sort(() => Math.random() - 0.5);
// const randomUser = shuffle(user);

return (
  	<div className="Section_media_padding">
      <div className="Section_media_padding_right">
        <p className="Section_media_padding_p">Tin vũ trụ</p>
        <div className="Section_media_height"></div>

        <div className="Section_media_padding_flex">
          <div className="Section_news_topic_container_abc_content">
              <div className="Section_news_topic_container_abc">
                {Database.user.slice(Database.user.length - 1).map((HomepageNewsBogs) => (
                  <img src={HomepageNewsBogs.link_images}  alt={HomepageNewsBogs.tilte} className="Section_news_topic_map_title_h4s_img Section_media_black2" key={HomepageNewsBogs.id}/>
                ))}
              </div>
              <div className="Secsion_news_black"></div>
              <div className="Secsion_news_title">
              {Database.user.slice(Database.user.length - 1).map((HomepageNewsBogs) => (
              <div className="Section_news_topic_h1" key={HomepageNewsBogs.id}>
                <div className="Home_page_news_row bs1">
                  <GoPrimitiveDot className="Home_page_news_icon"/>
                  <p className="Section_news_topic_bacground_map_co">Top Trending</p>
                </div>
                <Link 
                   to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
                >
                <h1 className="bs3">{HomepageNewsBogs.title}</h1>
                </Link>
                <div className="Home_page_news_row1 bs2">
                  <p className="Section_news_topic_map_time_pos_olll">27 phút trước</p>
                  <Link 
                    to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
                  >
                  <p className="Home_page_news_row2">Xem<BsArrowRight /></p>
                  </Link>
                </div>
              </div>
              ))}
              </div>
          </div>

          <div className="Section_media_img_flex">
            {Database.user.slice(Database.user.length - 1).reverse().map((HomepageNewsBogs) => (
            <div className="Section_media_img_div" key={HomepageNewsBogs.id}>
            <Link
                     to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
                      className="Section_media_img_div_imgs"
              >
              <img src={HomepageNewsBogs.link_images} alt="Nasa" className="Section_media_img"/>
              </Link>
              <span className="Section_media_img_span">
                <Link
                      to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}

                >
                  <h4 className="Section_media_img_h4">{HomepageNewsBogs.title}</h4>
                </Link>

                <p className="Section_news_topic_map_time"><BiTimeFive/>Ngày {HomepageNewsBogs.Date}</p>
              </span>
            </div>
            ))}
            <div className="Section_media_border_flex_collumn">
             {Database.user.slice(Database.user.length - 1).map((HomepageNewsBogs) => (
                <span className="Section_media_img_span2" key={HomepageNewsBogs.id}>
                  <Link
                          to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
                  >
                  <h4 className="Section_media_margin1">{HomepageNewsBogs.title}</h4>
                  </Link>
                  <p className="Section_media_margin">27 phút trước</p>
                </span>
              ))}
                {Database.user.slice(Database.user.length - 4).map((HomepageNewsBogs) => (
                <div className="Section_media_img_div" key={HomepageNewsBogs.id}>
                  <Link
                          to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
                          className="Section_media_img_div_imgs"
                  >
                  <img src={HomepageNewsBogs.link_images} alt={HomepageNewsBogs.title} className="Section_media_img"/>
                  </Link>
                  <span className="Section_media_img_span">
                    <Link
                          to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
                  >
                  <h4 className="Section_media_img_h4">{HomepageNewsBogs.title}</h4>
                  </Link>
                    <p className="Section_news_topic_map_time"><BiTimeFive/>Ngày {HomepageNewsBogs.Date}</p>
                  </span>
                </div>
                ))}
              </div>
          </div>
        </div>
      </div>

      <div className="Section_media_border_media">
        <div className="Section_media_border"></div>

        <div className="Section_media_with">

            <Tabs>
              <Tab onClick={handleClick} active={active === 0} id={0}>
                <p onClick={handleClick} active={active === 0} id={0}  className="the_p_size">Video</p>
              </Tab>
              <Tab onClick={handleClick} active={active === 1} id={1}>
                <p onClick={handleClick} active={active === 1} id={1}  className="the_p_size">Ảnh</p>
              </Tab>
              <Tab onClick={handleClick} active={active === 2} id={2}>
                <p onClick={handleClick} active={active === 2} id={2}  className="the_p_size">Khác</p>
              </Tab>
            </Tabs>

            <Content active={active === 0}>
              <div className="Section_media_all">
                <div className="ui1_section_media">
                {Database.Video_iframe.map((MediaPage) => (
                <div className="Section_news_topic_map_klls" onClick={openModal} key={MediaPage.id}>
                  <div className="Section_media_topic_map_klls">
                    <div className="Section_media_img_div_s">
                      <img src={MediaPage.image_video} alt={MediaPage.title_video} className="Section_media_topic_map_data"/>
                    </div>
                    <p className="title_media"><BsFillPlayFill className="Section_media_img_div_s_icon_soze Section_media_img-aij"/></p>
                    <div className="overlay_media"></div>
                  </div>

                  <div className="Section_news_topic_map_sajn">
                    <h4 className="Section_news_topic_map_title">{MediaPage.title_video}</h4>
                    <div className="Video_news_img_div_p">
                     <p className="Hot_topics_news_images_date"><BiTimeFive/>Ngày {MediaPage.Date_video}</p>
                    </div>
                  </div>

                  {modal_popup ? (
                  <section className="modal__bg App">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal_popup}>
                        <MdClose
                          className="modal__close"
                          arial-label="Close modal"
                          onClick={setModal}
                        />
                        <div className="modal__video-align">
                          {videoLoading ? (
                            <div className="modal__spinner">
                              <BiLoaderAlt
                                className="modal__spinner-style"
                                fadeIn="none"
                              />
                            </div>
                          ) : null}
                          <iframe
                            className="modal__video-style"
                            onLoad={spinner}
                            loading="lazy"
                            width="800"
                            height="500"
                            src={MediaPage.Video_video}
                            title={MediaPage.title_video}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
                </div>
                ))}
                </div>
              </div>
            </Content>

            <Content active={active === 1}>
              <TabImage/>
            </Content>

            <Content active={active === 2}>
              <p>Tab khác</p>
            </Content>

          </div>
        </div>

  	</div>
  );
}

export default Sectionmedia;
