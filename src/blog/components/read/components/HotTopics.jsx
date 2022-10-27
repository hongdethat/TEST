import '../../css/Hot_topics_news.css';
import { GoPrimitiveDot } from 'react-icons/go';
import Database from '../../../../database/Admin.json';
import { Link } from "react-router-dom";
import { BsHeart } from 'react-icons/bs';
import { BiTimeFive, BiComment } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import parse from 'html-react-parser';
import React, { useState } from 'react';
import ReactPaginate from "react-paginate";

function HotTopics() {

const [users, setUsers] = useState(Database.user.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const DATATINTUC = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((HomepageNewsBogs) => {
      return (
        <div className="Hot_topics_news_images_flex" key={HomepageNewsBogs.id}>
            <div className="Hot_topics_news_images">
              <Link  to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}>
                <img src={HomepageNewsBogs.link_images} alt={HomepageNewsBogs.title} width="100%" height="200px" className="Hot_topics_news_images_img"/>
              </Link>
              <Link
                  to={`/Blogs/${HomepageNewsBogs.danh_muc_link}/${HomepageNewsBogs.link_page}/`}
                  className="Hot_topics_news_images_title_colors"
              >
              <p className="Hot_topics_news_images_title">{HomepageNewsBogs.title}</p>
              </Link>
                <span className="Hot_topics_news_images_titlesc">{parse(HomepageNewsBogs.content)}</span>
              <span className="Hashtag_padding_btnMms">
              <p className="Hot_topics_news_images_date"><BiTimeFive/>Ngày {HomepageNewsBogs.Date}</p>
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
              </span>
            </div>
          </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <div className="Hot_topics_news_padidng">
      <h1 className="Hot_topics_news_h1"><GoPrimitiveDot className="Hot_topics_news_icon"/>Tin liên quan</h1>
      <div className="Hot_topics_news_padidng_hottopis">
       {DATATINTUC}
      </div>
      
      <ReactPaginate
        previousLabel={<FiChevronLeft className="LRPRENEXT"/>}
        nextLabel={<FiChevronRight className="LRPRENEXT"/>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"DesignALLPRENEXT"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeLinkClassName={"NumberP"}
        pageLinkClassName={"PageLinkNuber"}
      />
    </div>
  );
}

export default HotTopics;
