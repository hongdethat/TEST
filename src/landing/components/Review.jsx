import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/review.css';
import { GiClockwork, GiFireworkRocket, GiSkills } from 'react-icons/gi';
import { None } from '../../images/images';
import { SiMusicbrainz } from 'react-icons/si';
import { BsCheck2 } from 'react-icons/bs';

const Review = function(props) {
const { t } = useTranslation()

const Data = [
  {
    id:1,
    title: 'Quá trình hoạt động',
    text: 'Hoạt động trên nền tảng Deep learning',
    grid: 'RV__grid1',
    // icon: <GiFireworkRocket className="Reviewicon1"/>
  },
  {
    id:2,
    title: 'Cách thức tiếp cận',
    text: 'Tiếp cận sâu đến trạng thái hiểu người dùng',
    grid: 'RV__grid2',
    // icon: <GiClockwork className="Reviewicon2"/>
  },
  {
    id:3,
    title: 'Kỹ thuật ứng dụng',
    text: 'Dạng hình thái crybog phù hợp với người sử dụng',
    grid: 'RV__grid3',
    // icon: <GiSkills className="Reviewicon3"/>
  },
  {
    id:4,
    title: 'Giao tiếp với AI',
    text: 'Giao tiếp với bạn bằng nhận diện cảm xúc người dùng',
    grid: 'RV__grid4',
    // icon: <SiMusicbrainz className="Reviewicon4"/>
  },
];

const Database = [
  {
    id:1,
    title: 'Khám phá vũ trụ ảo',
    css: 'RV_CCS1',
    css2: 'RV_ALL_GRIDH',
    box:  <div>New</div>
  },
  {
    id:2,
    title: 'Chuyển hóa dữ liệu',
    css: 'RV_CCS2',
    css2: 'RV_ALL_GRIDH2',
    box: ''
  },
  {
    id:3,
    title: 'Huấn luyện AI',
    css: 'RV_CCS3',
    css2: 'RV_ALL_GRIDH3',
    box: ''
  }
];
  return (
    <div className="sndsnjsncb" id="Section_review">
      <div className="gpt3__features section__padding" id="features">

        <div className="gpt3__features-heading">
          <div className='s100RV'>
            {Database.map(({ title, id, css, css2, box }) => (
            <div key={id} className={css2}>
              <button className={"RV__BTN " + css}>
                <img src={None} alt="Hình ảnh avatar"/>
                <p>{title}</p>
              </button>
              {/*{box}*/}
            </div>
            ))}
          </div>
          {/*<h1 className="gradient__text">
            <font className="sandkcnncvv">
              <font className="sandkcnncvv">{t('truy cập ngay')}, </font>
              <font className="sandkcnncvv">{t('solarst')}.</font>
            </font>
          </h1>

          <p>
            <font className="sandkcnncvv">
              <font className="sandkcnncvv dskdksc">{t('truycapsom')}</font>
            </font>
          </p>*/}
        </div>
        
        {/* <div className="gpt3__features-container__feature" key={id}>
            <div className="gpt3__features-container__feature-title">
              <div></div>

              <h1 className="dsndnncnnmxsp">
                <font className="sandkcnncvv">
                  <font className="sandkcnncvv Reviewflexs">{t(title)}</font>
                </font>
              </h1>
            </div>

            <div className="gpt3__features-container_feature-text">
              <p>
                <font className="sandkcnncvv">
                  <font className="sandkcnncvv">{t(text)}.</font>
                </font>
              </p>
            </div>
          </div>*/}
        <div className="gpt3__features-container">
        <h1 className="RV_feature_text">Các tính năng hỗ trợ người dùng</h1>
        <p className="RV_text">Các lĩnh vực phụ khác nhau của nghiên cứu AI đều tập trung vào các mục tiêu cụ thể và việc sử dụng các công cụ cụ thể. Các mục tiêu truyền thống của nghiên cứu AI bao gồm lý luận ,biểu diễn tri thức ,lập kế hoạch ,học tập ,xử lý ngôn ngữ tự nhiên, nhận thức và khả năng di chuyển và thao tác các đối tượng.</p>
          <div className="RV__grid__All">
            {Data.map(({ title, text, id, icon, grid }) => (
            <div className={grid} key={id}>
              <span className="RV__FL">
                <BsCheck2 className="Review__check"/>
                <span className="FL__RV">
                  <b className="RV__B">{t(title)}</b>
                  <p className="RV__texta">{t(text)}</p>
                </span>
              </span>
            </div>
            ))}
          </div>
      </div>
    </div>
  </div>
  )
}
export default Review;