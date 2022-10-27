import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Database from '../../../../database/Admin.json';
import './css/Read_news.css';
import { iconlogo } from '../../../../images/images';
import { Link } from 'react-router-dom';
import { HotTopics } from '../../../';
import parse from 'html-react-parser';
import { FiChevronRight } from 'react-icons/fi';
import { BsCalendar2, BsPeople } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaBloggerB } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { GoLink } from 'react-icons/go';
import { Footers } from '../../../../footer';
import Comments from './Comments/Comments';
import Like from './Like/Like';
import Tags from './Tags/Tags';
import Video from './Video/Video';
import Offer from './Offer/Offer';
import useCopyToClipboard  from "../Coppy/useCopyToClipboard";
import Sectionsend from '../../Sectionsend';


const Read = () => {
  const { HomepageNewsBogs } = useParams();
  const Details = Database.user.find((Readdetails) => Readdetails.link_page === HomepageNewsBogs);

  const [copyText, setCopyText] = useState(`http://localhost:3000/Blogs/${Details.danh_muc_link}/${Details.link_page}/`);
  const { isCopied, onCopy } = useCopyToClipboard({ text: copyText });

  const handleChange = (ev) => {
      setCopyText(ev.target.value);
  };


  return (
    <div key={Details.id}>
      <div className="Read_news_background_all Font__Blogs__read"> 
        <title>{Details.title} | WORLD SINGULARITY</title>
         <div className="Read_news_padding_flex">
        <span>
          <div className="Read_news_padding">
            <div className="Read_news_background_left">
              <Link to="/">
                <img src={iconlogo} alt="Logo" height="25" with="30" />
              </Link>
              <FiChevronRight className="Read_news_background_icon"/>
              <Link to="/Blogs" className="Read_news_background_p">
                Tin tức
              </Link>
              <FiChevronRight className="Read_news_background_icon"/>
              <Link to={`/Blogs/${Details.danh_muc_link}`}>
              <p className="Read_news_background_p">{Details.danh_muc}</p>
              </Link>
            </div>
            
            <div className="Read_news_background_flex_row">

              <div className="Read_news_background_felxs">
                {/*<p className="Read_news_background_p_p">Tin tức</p>*/}

                <h2 className="Read_news_background_h2">{Details.title}</h2>

                {/*<img src={Details.link_images} alt={Details.title} className="Readimg__title"/>*/}


                    <span className="Read_news_background_p_content_span_span_flex">

                      <p className="Read_news_background_pc"><BsPeople style={{color: 'hsl(214, 89%, 52%)'}}/>Đăng bởi: <b>{Details.teams}</b></p>

                      <div className="Read__flex__share_all">
                        <div className="Read__flex__share">
                          <div className="Read_news_background_scroll_div_p">
                            <BsCalendar2 style={{color: 'hsl(214, 89%, 52%)'}}/>
                            <span className="READSPAN">
                              <p>Ngày đăng: {Details.Date}</p>
                              <p>{Details.Time}</p>
                            </span>
                          </div>
                          <div className="Read_news_background_height"></div>
                          <span className="Read_news_background_p_content_span_slcnj">
                            <div className="Read_news_backgroundd">
                              <FaFacebookF className="icon_Read_news GrFacebookOption"/>
                              <FaTwitter className="icon_Read_news FaTwitter"/>
                              <FaBloggerB className="icon_Read_news FaBloggerB"/>
                              <BiCodeAlt className="icon_Read_news BiCodeAlt" />
                              <GoLink className="icon_Read_news GoLink" onClick={onCopy}/>
                            </div>
                          </span>
                        </div>
                        <div>
                          <button className="Read__button_1">Lưu tin</button>
                          <button className="Read__button_2">Đánh dấu là đã đọc</button>
                        </div>
                      </div>
                    </span>
{/*
                    <span>
                      <div className="Read_news_background_div_p_link">
                        <input type="text" value={copyText} onChange={handleChange} disabled className="ClipboardREADNEWS"/>
                        <button type="button" onClick={onCopy} className="ClipboardREADNEWSYS">
                          Sao chép liên kết
                        </button>
                      </div>
                    </span>*/}
                    {/*<p>Sao chép liên kết: <strong>{isCopied ? 'Thành công' : 'Thất bại'}</strong></p>*/}

                  {/*<img src={require(`../../../../Image/timeline/${images}`).default} alt={t('alt_img') + "'" + t(title) + "'"} className="Read_news_background_img_2"/>*/}
                 {/* <img src={link_images} alt={t('alt_img') + "'" + t(title_img) + "'"} className="Read_news_background_img_2"/>
                  <i className="Read_news_background_i">{title_img}</i>*/}

                  <p className="Read_news_background_p_content">{parse(Details.content)}</p>

                  <div className="Read_news_background_emoji">
                    <Like />
                  </div>

                  <Comments />
              </div>

              <span className="Read_news_background_p_content_span">
                <Offer />

                <Video />

                <Tags />
              </span>
            </div>

         {/*<Link to="/News">
              <button style={{ marginTop: "1rem" }}>Back</button>
            </Link>*/}
    
          </div>
        </span>

      </div>

      <HotTopics />
      
      <Sectionsend />
      <div className="Home_News_bgr">
        <div className="Background_news_home">
        <Footers />
        </div>
      </div>

      </div>
    </div>
  )
}

export default Read;