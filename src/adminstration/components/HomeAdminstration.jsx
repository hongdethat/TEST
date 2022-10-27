import './css/HomeAdminstration.css';
import Database from '../../database/Admin';
import { BsFillCaretRightFill, BsNewspaper, BsPencilSquare, BsArrowDown, BsArrowUp, BsChatLeftText, BsArrowReturnRight } from 'react-icons/bs';
import { AiFillHome, AiOutlineSwapRight, AiOutlinePlus, AiOutlineMail, AiFillCaretDown } from 'react-icons/ai';
import { FiUsers, FiAlertCircle } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineAdminPanelSettings, MdEmojiEvents } from 'react-icons/md';
import{ VscSaveAll } from 'react-icons/vsc';
import { useState } from 'react';
// import Function from "../Function/Function";
// import useModal from '../../../..//Modal/useModal';
import Chart from './chart/Chart';
import { FiMoreVertical } from 'react-icons/fi';
import { newspaper, home, user, None } from '../../images/images';
import {
  CRow,
  CCol,
  CWidgetStatsA,
} from '@coreui/react';
import { CChartBar, CChartLine } from '@coreui/react-chartjs';
import { Link } from 'react-router-dom';

function HomeAdminstration({ NguoiDung }) {

const Dem = JSON.parse(JSON.stringify(Database.user)).length;
const Dem2 = JSON.parse(JSON.stringify(Database.Video_iframe)).length;

// const {isShowing, toggle} = useModal();

const DATA = [{
  id:1,
  links: "#/",
  name: "Trang chủ",
  icon: home,
  link: "/",
  plus: <b>0</b>,           
  button: <button className="HomeDashboard_color_div_btnu"><span className="HomeDashboard_color_opps_spank_psp">Xem tất cả <AiOutlineSwapRight/></span> <FiAlertCircle className="HomeDashboard_color_icon_icon_alert"/></button>,
  modal:  "",
  math: <span className="HomeDashboard_color_div_btnuspan_wl_span_char">
          <b>26K{' '}</b>(-12.4% <BsArrowDown/>)
        </span>,
  css: "HomeDashboard_color_div",
  Char: <CCol sm={6} lg={3}>
        <CWidgetStatsA
          width="300"
          height="150"
          className="HomeDashboard_color_icon_icon_char"
          color="primary"
          chart={
            <CChartLine
              className=""
              style={{ height: '100%', width: '100%' }}
              data={{
                labels: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
                datasets: [
                  {
                    label: 'Lượt xem',
                    backgroundColor: '#fff',
                    borderColor: 'rgba(151, 227, 255, 1)',
                    pointBorderColor: 'transparent',
                    pointHoverBackgroundColor: 'rgb(255, 87, 34)',
                    pointBackgroundColor: 'transparent',
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 3,
                    hitRadius: 6,
                    hoverRadius: 3,
                  },
                },
              }}
            />
          }
        />
      </CCol>,
      Grid: "LDBone "
},
{
  id:2,
  links: "News/News-List/",
  name: "Tin tức",
  icon: newspaper,
  link: "/Blogs/",
  plus: <b>{Dem + Dem2}</b>,
  button: <button className="HomeDashboard_color_div_btnu"><span className="HomeDashboard_color_opps_spank_psp">Xem tất cả <AiOutlineSwapRight/></span> <FiAlertCircle className="HomeDashboard_color_icon_icon_alert"/></button>,
  modal: "",
  math:   <span className="HomeDashboard_color_div_btnuspan_wl_span_char">
            <b>2.49K{' '}</b>(84.7% <BsArrowUp />)
          </span>,
  css: "HomeDashboard_color_div1",
  Char:  <CCol sm={6} lg={3}>
          <CWidgetStatsA
            color="warning"
            chart={
              <CChartLine
                style={{ height: '100%', width: '100%' }}
                data={{
                  labels: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
                  datasets: [
                    {
                      label: 'Lượt xem',
                      backgroundColor: 'rgb(220, 53, 69, 0.2)',
                      borderColor: 'rgb(220, 53, 69, 0.9)',
                      pointBorderColor: 'transparent',
                      pointHoverBackgroundColor: 'rgb(255, 87, 34)',
                      pointBackgroundColor: 'transparent',
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      display: false,
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 2,
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>,
        Grid: "LDBtwo "
},
,
{
  id:3,
  links: "#/",
  name: "Người dùng",
  icon: user,
  link: "#/",
  plus: <b>0</b>,
  button:  <button className="HomeDashboard_color_div_btnu"><span className="HomeDashboard_color_opps_spank_psp">Xem tất cả <AiOutlineSwapRight/></span> <FiAlertCircle className="HomeDashboard_color_icon_icon_alert"/></button>,
  modal: "",
  math: <span className="HomeDashboard_color_div_btnuspan_wl_span_char">
          <b>44K{' '}</b>(-23.6% <BsArrowDown />)
        </span>,
  css: "HomeDashboard_color_div2",
  Char:  <CCol sm={6} lg={3}>
          <CWidgetStatsA
            color="danger"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: '100%', width: '100%' }}
                data={{
                  labels:  ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
                  datasets: [
                    {
                      backgroundColor: 'hsl(214, 89%, 52%)',
                      borderColor: 'rgb(17, 236, 229, 0.2)',
                      label: 'Lượt xem',
                      pointBorderColor: 'transparent',
                      pointHoverBackgroundColor: 'rgb(255, 87, 34)',
                      pointBackgroundColor: 'transparent',
                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            }
          />
        </CCol>,
        Grid: "LDBthree "
}]

const Button = [{
  id:1,
  name: "Thông báo",
  icon: <IoMdNotificationsOutline className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:2,
  name: "Bài đăng trong ngày",
  icon: <BsPencilSquare className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:3,
  name: "Quản lý người dùng",
  icon: <FiUsers className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:4,
  name: "Quản lý bình luận",
  icon: <BsChatLeftText className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:5,
  name: "Hộp thư đến",
  icon: <AiOutlineMail className="HomeDashboard_color_icon_icon" />,
  link: ""
},
{
  id:6,
  name: "Cài đặt quản trị",
  icon: <MdOutlineAdminPanelSettings className="HomeDashboard_color_icon_icon" />,
  link: ""
}]
  const random = () => Math.round(Math.random() * 100)

  return (
    <div className="Font_text">
      <title> Bảng điều khiển - Dashboard | WORLD SINGULARITY</title>
      <div className="HomeAdminstration__flex__all">
        <div className="HomeAdminstration__box__background1">
          <span className="HomeAdminstration__box__Flex">
            <p className="HomeAdminstration__Tong">Thống kê bài đăng</p>
            <div className="HomeAdminstration__box__select">Show: <b>Today</b> <AiFillCaretDown/></div>
          </span>
          <span className="HomeDashboard__span__flex_boxxS">
          {DATA.map(({id, name, icon, link, plus, button, modal, css, Char, math, Grid, links}) => (
            <div className="HomeAdminstration__skill__bar__container__box" key={id}>
              <span className="HomeAdminstration__flexo">
                <Link to={link} target="_blank"><img src={icon} alt="dashboard" className="HomeAdminstration__img_DASHBOARD"/></Link>
                <span>
                  <h2 className="HDBH2">{name}</h2>
                  <p className="HDBH3">Tổng số bài đăng {plus}</p>
                </span>
              </span>
              <span className="HomeAdminstration__flexo__chart">Update...</span>
              <p className="HDBH5">{math}</p>
              <Link to={links}>
                <button className="HDBH5_details">Chi tiết</button>
              </Link>
            </div>
          ))}
          </span>
          <span>
           <p className="HomeAdminstration__Tong">Lịch sử bài đăng</p>
           <div className="HomeAdminstration__box__history">
            <table className="HomeAdminstration__table">
              <tbody>
                <tr className="HomeAdminstration__table__background">
                  <th className="chitiet_1">Chi tiết</th>
                  <th>Trang</th>
                  <th className="chitiet_2">Trạng thái</th>
                </tr>
                <tr>
                  <td className="HomeAdminstration__flex__td"><img src={home} alt="Dashboard" className="img_ADmin__dasboard"/><span><b>Tiêu đề bài viết</b><p className="HomeAdminstration__Tong_p">Hôm nay, lúc 10:25</p></span></td>
                  <td className="HomeAdminstration__b">Tin tức</td>
                  <td><span className="HomeAdminstration__b__succ">Thành công</span></td>
                </tr>
                <tr>
                  <td className="HomeAdminstration__flex__td"><img src={newspaper} alt="Dashboard" className="img_ADmin__dasboard"/><span><b>Tiêu đề bài viết</b><p className="HomeAdminstration__Tong_p">Hôm nay, lúc 10:25</p></span></td>
                  <td className="HomeAdminstration__b">Trang chủ</td>
                  <td><span className="HomeAdminstration__b__succ">Thành công</span></td>
                </tr>
                <tr>
                  <td className="HomeAdminstration__flex__td"><img src={user} alt="Dashboard" className="img_ADmin__dasboard"/><span><b>Tiêu đề bài viết</b><p className="HomeAdminstration__Tong_p">Hôm nay, lúc 10:25</p></span></td>
                  <td className="HomeAdminstration__b">Người dùng</td>
                  <td><span className="HomeAdminstration__b__err">Thất bại</span></td>
                </tr>
              </tbody>
            </table>
            <button className="HomeDashboard_color_div_btnu_button_all__views">Xem tất cả lịch sử</button>
           </div>
          </span>
        </div>
        <div className="HomeAdminstration__box__background2">
          <b className="HomeDashboard__b">Thống kê</b>
          <span className="HomeDashboard__span">
            <div className="HomeAdminstration__box">
              <h1>505</h1>
              <p>Tổng lượt xem</p>
            </div>
            <div className="HomeAdminstration__box">
              <h1>100$</h1>
              <p>Tổng doanh thu</p>
            </div>
          </span>
          <span className="Skill_bar__all_admin">
              <span className="HomeAdminstration__box__phanhoi"><p>Phản hồi</p>24/50</span>
              <div className="HomeAdminstration__skill__bar__container">
                <div className="Phan__hoi__admin"></div>
              </div>
              <span className="HomeAdminstration__box__phanhoi"><p>Đặt hàng</p>49/50</span>
              <div className="HomeAdminstration__skill__bar__container">
                <div className="Phat__hang__admin"></div>
              </div>
              <span className="HomeAdminstration__box__phanhoi"><p>Mục tiêu trong tháng</p>5.400$/10.000$</span>
              <div className="HomeAdminstration__skill__bar__container">
                <div className="Phan__hoi__admin"></div>
              </div>
          </span>
          <div className="HomeAdminstration__skill__bar__container__x">
            <b className="HomeDashboard__b">Hộp thoại nhanh</b>
            <span className="HomeAdminstration__box__phanhoi_phanhoi">
              <img src={None} alt="user"/>
              <span className="HomeAdminstration__box__fex">
                <b>Tên người dùng</b>
                <span>Nội dung tin nhắn phản hồi</span>
              </span>
            </span>
            <span className="HomeAdminstration__box__phanhoi_phanhoi">
              <img src={None} alt="user"/>
              <span className="HomeAdminstration__box__fex">
                <b>Tên người dùng</b>
                <span>Nội dung tin nhắn phản hồi</span>
              </span>
            </span>
            <span className="HomeAdminstration__box__phanhoi_phanhoi">
              <img src={None} alt="user"/>
              <span className="HomeAdminstration__box__fex">
                <b>Tên người dùng</b>
                <span>Nội dung tin nhắn phản hồi</span>
              </span>
            </span>
          </div>
          <div className="HomeAdminstration__box__file">
            <b className="HomeDashboard__b">Tiện ích</b>
            <span className="HomeAdminstration__box__fex__span DT__HOMEAD"><MdEmojiEvents className="EVENT__ADMIN__icon"/><span className="HomeDashboard_color_opps_spank_psp_FLEX">Sự kiện đã tạo<span className="HomeAdminstration_kkk">200+</span></span></span>
            <span className="HomeAdminstration__box__fex__span"><VscSaveAll className="EVENT__ADMIN__icon"/><span className="HomeDashboard_color_opps_spank_psp_FLEX">Bài viết đã lưu<span className="HomeAdminstration_kkk">200+</span></span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdminstration;
