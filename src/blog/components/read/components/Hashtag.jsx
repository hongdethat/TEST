import { Link, useLocation, useParams } from "react-router-dom";
import Database from '../../../../database/Admin.json';
import { Tabs, Tab, Content} from "../../functions/tab/Tabhashtag";
import { useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { BsCalendarDay, BsArrowRightShort, BsHeart, BsFillBookmarksFill } from 'react-icons/bs';
import { BiComment, BiTimeFive } from 'react-icons/bi';
import { Footers } from '../../../../footer';
import Sectionsend from '../../Sectionsend';
import parse from 'html-react-parser';
import React from 'react';
import './css/Hashtag.css';

function Hashtag () {

const { Category } = useParams();
const CategoryDetails = Database.user.find((Hashdetails) => Hashdetails.danh_muc_link === Category);
const [active, setActive] = useState(0);
const handleClick = e => {
  const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};

 const Data = [{
  id:1,
  title:'Vũ trụ',
},
{
  id:2,
  title:'Thiên văn học',
},
{
  id:3,
  title:'World Singularity',
},
{
  id:4,
  title:'Công nghệ',
},
{
  id:5,
  title:'Thế giới',
}]


// Slider reponsive 
  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? Database.user.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === Database.user.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  // create a new array with 5 elements from the source user
  const activeImageSourcesFromState = Database.user.slice(
    currentImageIdx,
    currentImageIdx + 1
  );

  // check the length_RPS of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const Reponsivemap =
    activeImageSourcesFromState.length < 1
      ? // if the Reponsivemap's length is lower than 5 user than append missing user from the beginning of the original array
        [
          ...activeImageSourcesFromState,
          ...Database.user.slice(0, 1 - activeImageSourcesFromState.length)
        ]
      : activeImageSourcesFromState;

// end slider reponsive 

// Slider reponsive danh mục
  const [currentImagesuu, setcurrentImagesuu] = useState(0);

  const prevSlidedanhmuc = () => {
    const resetdanhmuc = currentImagesuu === 0;

    const indexdanhmuc = resetdanhmuc ? Database.user.length - 1 : currentImagesuu - 1;

    setcurrentImagesuu(indexdanhmuc);
  };

  const nextSlidedanhmuc = () => {

    const resetIndex = currentImagesuu === Database.user.length - 1;

    const indexdanhmuc = resetIndex ? 0 : currentImagesuu + 1;

    setcurrentImagesuu(indexdanhmuc);
  };

  const activedanhmucstate = Database.user.slice(
    currentImagesuu,
    currentImagesuu + 3
  );

  const Reponsivemapdanhmuc =
    activedanhmucstate.length < 3
      ? 
        [
          ...activedanhmucstate,
          ...Database.user.slice(0, 3 - activedanhmucstate.length)
        ]
      : activedanhmucstate;

// end slider reponsive danh mục

const shuffle = Mang_arr => [...Mang_arr].sort(() => Math.random() - 0.5);
const randomUser = shuffle(Database.user);
const randomUser2 = shuffle(Database.user);

  return (
    <div key={CategoryDetails.id}>
      <div className="Font_text">
        <title>{CategoryDetails.danh_muc} | WORLD SINGULARITY</title>
          <div className="Hashtag_padding">
            <div className="paddingHT">
              <h1 className="skajnHash_tags">Danh mục {CategoryDetails.danh_muc}</h1>
                <div className="HashtagMobileslide2">
                    {Reponsivemap.map((image, index) => {
                        return (
                          <figure className="HTALL2MB" key={image["id"]}>
                            <img src={image["link_images"]} alt={image["title"]} className="Hashtag_img_2-imagemb" />
                            <Link to={`/Blogs/${image["danh_muc_link"]}/${image["link_page"]}/`}>
                              <figcaption>
                              <div className="overlayHTMB">
                                <div className="textHTMB">
                                    <Link to={`/Blogs/${image["danh_muc_link"]}/`}  className="Hashtag_img_2_overlay_img6fff"><h4>{image["danh_muc"]}</h4></Link>
                                    <p>{image["title"]}<br/> <i className="Hot_topics_news_images_date Hot_topics_news_images_date tj"><BiTimeFive/>Ngày {image["Date"]}</i></p>
                                </div>
                              </div>
                              </figcaption>
                            </Link>
                            <span className="Hashtag_padding_btn"><MdNavigateBefore onClick={prevSlide} className="Hashtag_img_2-image_p_icos"/><MdNavigateNext onClick={nextSlide} className="Hashtag_img_2-image_p_icos"/></span>
                          </figure>
                        );
                      }
                    )}
                </div>

            <div className="testHT HashtagMobileslide">
            {randomUser.slice(Database.user.length - 1).map((CategoryDetails, id) => (
              <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`} key={id}>
              <figure className="HTALL2" key={id}>
                  <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}>
                   <img src={CategoryDetails.link_images} alt={CategoryDetails.link_images} className="Hashtag_img_2-image" />
                  </Link>
                <figcaption>
                <div className="overlayHT">
                <div className="Hashtag__flexsave">
                      <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/`} className="Hashtag_abcoverlay">
                        <h4 className="Hashtagbackgroundcategory">{CategoryDetails.danh_muc}</h4>
                      </Link>
                      <Link to="#/">
                        <BsFillBookmarksFill className="Hashtag__BsFillBookmarksFill"/>
                      </Link>
                    </div>
                  <div className="textHT">
                      <p>
                        <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`} className="Hashtag_img_2_overlay_img6fff">{CategoryDetails.title}</Link>
                        <i className="Hot_topics_news_images_date"><BiTimeFive/>Ngày {CategoryDetails.Date}</i>
                      </p>
                  </div>
                </div>
                </figcaption>
              </figure>
              </Link>
            ))}

            <div className="text_hashtag2">
              {randomUser2.slice(Database.user.length - 1).map((CategoryDetails) => (
                <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`} key={CategoryDetails.id}>
                <figure className="HTALL">
                  <img src={CategoryDetails.link_images} alt={CategoryDetails.link_images} className="Hashtag_img_2-image" />
                  <figcaption>
                  <div className="overlayHT">
                  <div className="Hashtag__flexsave">
                      <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/`} className="Hashtag_abcoverlay">
                        <h4 className="Hashtagbackgroundcategory">{CategoryDetails.danh_muc}</h4>
                      </Link>
                      <Link to="#/">
                        <BsFillBookmarksFill className="Hashtag__BsFillBookmarksFill"/>
                      </Link>
                    </div>
                    <div className="textHT">
                      <p>
                        <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`} className="Hashtag_img_2_overlay_img6fffactive">{CategoryDetails.title}</Link>
                        <i className="Hot_topics_news_images_date"><BiTimeFive/>Ngày {CategoryDetails.Date}</i>
                      </p>
                    </div>
                  </div>
                  </figcaption>
                </figure>
                </Link>
              ))}

              <div className="Ht3">
                {Database.user.slice(Database.user.length - 2).map((CategoryDetails, id) => (
                  <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}  key={id}>
                  <figure className="HTALL">
                    <img src={CategoryDetails.link_images} alt={CategoryDetails.link_images} className="Hashtag_img_2-image" />
                    <figcaption>
                    <div className="overlayHT">
                    <div className="Hashtag__flexsave">
                      <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/`} className="Hashtag_abcoverlay">
                          <h4 className="Hashtagbackgroundcategory">{CategoryDetails.danh_muc}</h4>
                      </Link>
                      <Link to="#/">
                        <BsFillBookmarksFill className="Hashtag__BsFillBookmarksFill"/>
                      </Link>
                    </div>
                      <div className="textHT">
                        <p>
                          <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`} className="Hashtag_img_2_overlay_img6fffactive">{CategoryDetails.title}</Link>
                          <i className="Hot_topics_news_images_date"><BiTimeFive/>Ngày {CategoryDetails.Date}</i>
                        </p>
                      </div>
                    </div>
                    </figcaption>
                  </figure>
                  </Link>
                ))}
              </div>
            </div>
            </div>
          </div>

          <div className="Hashtag_img_2_overlay_bgr">
            <div className="Hashtag_img_2_overlay_skk">
              <h1 className="Hashtag_img_2_overlay_cs">Danh mục khác</h1>
              <h3 className="Hashtag_img_2_h3">Xem tất cả danh mục<BsArrowRightShort color="red" className="Hssc"/></h3>
            </div>

            <div>
               <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                  <p onClick={handleClick} active={active === 0} id={0} className="Hashtag_img_2-image_p">Khám phá</p>
                </Tab>
                <Tab onClick={handleClick} active={active === 1} id={1}>
                  <p onClick={handleClick} active={active === 1} id={1} className="Hashtag_img_2-image_p">Vũ trụ</p>
                </Tab>
                <Tab onClick={handleClick} active={active === 2} id={2}>
                  <p onClick={handleClick} active={active === 2} id={2} className="Hashtag_img_2-image_p">Công nghệ</p>
                </Tab>
                 <Tab onClick={handleClick} active={active === 3} id={3}>
                  <p onClick={handleClick} active={active === 3} id={3} className="Hashtag_img_2-image_p">Khoa học</p>
                </Tab>
              </Tabs>

              <Content active={active === 0}>
                <div className="Hashtag_img_2_overlay_margin-b HashtagMBDANHMUC1">    
                   {Database.user.slice(Database.user.length - 12).map((CategoryDetails, id) => (
                   <div className="img-overlay_hashtag" key={id}>

                    <img src={CategoryDetails.link_images} alt={CategoryDetails.title} className="img-overlay-image_hashtag"/>
                    <div className="overlay_hashtag">
                      <div className="text_hashtag">
                        <span>{CategoryDetails.title}</span>
                        <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}><button>Xem thêm</button></Link>
                      </div>
                    </div>

                  </div>
                  ))}
                </div>
                <div className="Hashtag_img_2_overlay_margin-b HashtagMBDANHMUC2">  
                  <span className="Hashtag_padding_btndnahmuc"><MdNavigateBefore onClick={prevSlidedanhmuc} className="Hashtag_img_2-image_p_icos HTDMMB1"/><MdNavigateNext onClick={nextSlidedanhmuc} className="Hashtag_img_2-image_p_icos HTDMMB2"/></span>  
                {Reponsivemapdanhmuc.map((image, indexdanhmuc) => {
                    return (
                   <div className="img-overlay_hashtag" key={image["id"]}>

                    <img src={image["link_images"]} alt={image["title"]} className="img-overlay-image_hashtag"/>
                    <div className="overlay_hashtag">
                      <div className="text_hashtag">
                        <span>{image["title"]}</span>
                        <Link to={`/Blogs/${image["danh_muc_link"]}/${image["link_page"]}/`}><button>Xem thêm</button></Link>
                      </div>
                    </div>
                  </div>
                      );
                    }
                  )}
                </div>

              </Content>

              <Content active={active === 1}>
                <div>
                 2
                </div>
              </Content>

              <Content active={active === 2}>
                <div>
                 3
                </div>
              </Content>

              <Content active={active === 3}>
                <div>
                 4
                </div>
              </Content>
            
            </div>
          </div>

          <div className="Hashtag_img_2_overlay_all_img_text">
                <div className="Hashtag_img_2_overlays">
                {Database.user.slice(Database.user.length - 3).map((CategoryDetails) => (
                <div className="Hashtag_img_2_overlay_div_flex_column" key={CategoryDetails.id}>
                  <div className="Hashtag_img_2_overlay_reos_oimg">
                    <div className="Hashtag_img_2_overlay_reos">
                      <span className="Hashtag_img_2_overlay_div_flex_column_span">
                          <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}>
                            <h3>{CategoryDetails.title}</h3>
                          </Link>
                          <span className="Hashtag_padding_btnMms_img_none">{parse(CategoryDetails.content)}</span>
                          <i className="Hot_topics_news_images_date HGIMPOta"><BiTimeFive/>Ngày {CategoryDetails.Date}</i>
                      </span>
                    </div>

                    <div className="Hashtag_img_2_overlay_reos_op">
                      {Data.map(({title, id}) => (
                      <button className="Tags_news_buttoni" key={id}>{title}</button>
                      ))}
                    </div>
                  </div>
                  <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`} className="Hashtag_img_2_overlay_img6">
                    <img src={CategoryDetails.link_images} alt={CategoryDetails.title} className="Hashtag_img_2-image_img"/>
                  </Link>
                </div>
                ))}
                </div>
                {/*<div className="Section_media_border"></div>*/}
                
            </div>
            
            <span className="Hashtag_padding_btndnahmucPDall">
            <div className="Hashtag_img_2_overlay_margin-b_fkkls">
                <h1>Tin vũ trụ</h1>
                <h3 className="Hashtag_padding_btndnahmucsm">Xem tất cả <BsArrowRightShort color="red" className="Hssc"/></h3>
            </div>
            <div className="Hashtag_img_2_overlay_margin-b_s">
              {Database.user.slice(Database.user.length - 3).map((CategoryDetails) => (
                  <div className="Hashtag_img_2_overlay_img6_background" key={CategoryDetails.id}>
                    <div className="sasakslaks">
                    <span>
                    <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}>
                      <img src={CategoryDetails.link_images} alt={CategoryDetails.title} className="Hashtag_img_2-image_img87"/>
                    </Link>
                    <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}>
                      <h3>{CategoryDetails.title}</h3>
                    </Link>

                    <span className="HTALLsssp">{parse(CategoryDetails.content)}</span>
                    </span>
                    <span className="Hashtag_padding_btnMms">
                      <i className="Hot_topics_news_images_date"><BiTimeFive/>Ngày {CategoryDetails.Date}</i>
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
                ))}
            </div>
          </span>

          <span className="Hashtag_padding_btndnahmucPDall">
            <div className="Hashtag_img_2_overlay_margin-b_fkkls">
                <h1>Tin công nghệ</h1>
                <h3 className="Hashtag_padding_btndnahmucsm">Xem tất cả <BsArrowRightShort color="red" className="Hssc"/></h3>
            </div>
            <div className="Hashtag_img_2_overlay_margin-b_s">
              {Database.user.slice(Database.user.length - 3).map((CategoryDetails) => (
                  <div className="Hashtag_img_2_overlay_img6_background" key={CategoryDetails.id}>
                    <div className="sasakslaks">
                    <span>
                    <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}>
                      <img src={CategoryDetails.link_images} alt={CategoryDetails.title} className="Hashtag_img_2-image_img87"/>
                    </Link>
                    <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}>
                      <h3>{CategoryDetails.title}</h3>
                    </Link>

                    <span className="HTALLsssp">{parse(CategoryDetails.content)}</span>
                    </span>
                    <span className="Hashtag_padding_btnMms">
                      <i className="Hot_topics_news_images_date"><BiTimeFive/>Ngày {CategoryDetails.Date}</i>
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
                ))}
            </div>
          </span>

          <span className="Hashtag_padding_btndnahmucPDall">
            <div className="Hashtag_img_2_overlay_margin-b_fkkls">
                <h1>Tin khoa học</h1>
                <h3 className="Hashtag_padding_btndnahmucsm">Xem tất cả <BsArrowRightShort color="red" className="Hssc"/></h3>
            </div>
            <div className="Hashtag_img_2_overlay_margin-b_s">
              {Database.user.slice(Database.user.length - 3).map((CategoryDetails) => (
                  <div className="Hashtag_img_2_overlay_img6_background" key={CategoryDetails.id}>
                    <div className="sasakslaks">
                    <span>
                    <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}>
                      <img src={CategoryDetails.link_images} alt={CategoryDetails.title} className="Hashtag_img_2-image_img87"/>
                    </Link>
                    <Link to={`/Blogs/${CategoryDetails.danh_muc_link}/${CategoryDetails.link_page}/`}>
                      <h3>{CategoryDetails.title}</h3>
                    </Link>

                    <span className="HTALLsssp">{parse(CategoryDetails.content)}</span>
                    </span>
                    <span className="Hashtag_padding_btnMms">
                      <i className="Hot_topics_news_images_date"><BiTimeFive/>Ngày {CategoryDetails.Date}</i>
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
                ))}
            </div>
          </span>

        </div>
        <Sectionsend/>
        <div className="Home_News_bgr">
          <div className="Background_news_home">
            <Footers/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hashtag;