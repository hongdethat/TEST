import './Offer_news.css';
import Database from '../../../../../database/Admin.json';
import { Link } from "react-router-dom";
import { BsFillBookmarksFill } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi';

function Offer_news() {

  return (
  	<div className="Offer_news_h2_flex_all">
      <h2 className="Offer_news_h2">Tin đề xuất</h2>
        {Database.user.slice(Database.user.length - 3).map((HomepageNewsBogs) => (
        <div className="Offer_news_img_div_flex" key={HomepageNewsBogs.id}>
          <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`} >
            <div className="Offer_news_img_div">
              <img src={HomepageNewsBogs.link_images} alt={HomepageNewsBogs.title} className="Offer_news_img"/>
              <Link to="#/" className="Offer__save"><BsFillBookmarksFill className="Offer__icon"/></Link>
            </div>
          </Link>

          <div className="Offer_news_img_div_p">
            <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/`}>
              <p className="Offer_news_color2">{HomepageNewsBogs.danh_muc}</p>
            </Link>
          <p className="Hot_topics_news_images_date"><BiTimeFive/>Ngày {HomepageNewsBogs.Date}</p>
          </div>
          <Link to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
            <h4 className="Offer_news_color1_h4">{HomepageNewsBogs.title}</h4>
          </Link>
        </div>
        ))}
  	</div>
  );
}

export default Offer_news;
