import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { GoPrimitiveDot } from 'react-icons/go';
import { HiArrowSmRight } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';
import Database from '../../database/Admin.json';
import './css/Home_page_news.css';

const Homepagenews = function(props) {
const { t } = useTranslation()

// const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
// const randomUser = shuffle(user);

  return (
    <div id="news_background">
      <div className="Home_page_news_padding">
        <div className="Home_page_news_column">
          <div className="Home_page_news_row">
            <GoPrimitiveDot className="Home_page_news_icon"/>
            <p>Hot topic</p>
          </div>
          {Database.user.slice(Database.user.length - 1).map((HomepageNewsBogs) => (
          <div key={HomepageNewsBogs.id}>
            <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
              <h1 className="Home_page_news_color">{HomepageNewsBogs.title}</h1>
            </Link>
            <div className="Home_page_news_row1">
              <p className="Home_page_news_row2_pos">27 phút trước</p>
              <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/`} >
                <p className="Home_page_news_row2">{HomepageNewsBogs.danh_muc}</p>
              </Link>
            </div>
          </div>
          ))}
        </div>
        <div className="Home_page_news_scroll">
          {Database.user.map((HomepageNewsBogs) => (
            <div className="Home_page_news_map_flex" key={HomepageNewsBogs.id}>
              <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}`} >
                <p className="Home_page_news_row_2_2">Tin {HomepageNewsBogs.danh_muc}</p>
              </Link>
              <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
                <h4 className="Home_page_news_title">{HomepageNewsBogs.title}</h4>
              </Link>
              <div className="Home_page_news_map_row_2">
                <p className="Home_page_news_row_2"><BiTimeFive/>Ngày {HomepageNewsBogs.Date}</p>
                <Link className="Home_page_news_row_color"  to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>Xem<HiArrowSmRight className="HomepageNewsBogsMuiten"/></Link>
              </div>
            </div>
          ))}
        </div>  
      </div>
    </div>
  )
}

export default Homepagenews;
