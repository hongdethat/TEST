import Database from '../../database/Admin';
import { AiOutlineBarChart, AiOutlineEdit } from 'react-icons/ai';
import { BiCommentDetail, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdDelete, MdUpload } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { BsFillEyeFill, BsFillCloudCheckFill } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RiQuestionMark } from 'react-icons/ri';
import { editUser, getallUsers } from '../service/api';
import React, { Component, useState, useEffect, useRef } from "react";
import { VscCopy } from 'react-icons/vsc';
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import FullEditor from "ckeditor5-build-full";
import parse from 'html-react-parser';
import './css/EditNewsHistory.css';
import './css/NewsHistory.css';
import './css/NewsAdminstration.css';

const initialValue = {
    title: "",
    content : "",
    danh_muc: "",
    teams: "",
    De_xuat: "",
    Time: "",
    danh_muc_link: "",
    link_page: "",
    title_img: "",
    link_images: "",
}

const useToggle = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    {
      set: setValue,
      toggle: () => setValue(flag => !flag)
    }
  ];
};

//add Nhóm
const KeyNHOM = function(targetKeyNhom) {
  const [keyPressedNhom, setKeyPressedNhom] = useState(false);

  function downHandler_nhom({ keyNhom }) {
    if (keyNhom === targetKeyNhom) {
      setKeyPressedNhom(true);
    }
  }

  const upHandlerNhom = ({ keyNhom }) => {
    if (keyNhom === targetKeyNhom) {
      setKeyPressedNhom(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", downHandler_nhom);
    window.addEventListener("keyup", upHandlerNhom);

    return () => {
      window.removeEventListener("keydown", downHandler_nhom);
      window.removeEventListener("keyup", upHandlerNhom);
    };
  });

  return keyPressedNhom;
};

const nhoms = [
  { id: 1, world_teams: "Nhóm nội dung" },
  { id: 2, world_teams: "Nhóm kiểm duyệt" },
  { id: 3, world_teams: "Nhóm thông tin" },
  { id: 4, world_teams: "Nhóm ..." },
  { id: 5, world_teams: "Nhóm ..." }
];

const items = [
  { id: 1, danhmuc: "Khoa học" },
  { id: 2, danhmuc: "Vũ trụ" },
  { id: 3, danhmuc: "Công nghệ" },
  { id: 4, danhmuc: "Khám phá" },
  { id: 5, danhmuc: "Thế giới" }
];

const NHOM = ({ itemNhom, activeNhom, setSelectedNhom, setHoveredNhom }) => (
  <div>
  <input type="button"
         className={`itemNhom ${activeNhom ? "activeNhom" : ""}`}
         onClick={() => setSelectedNhom(itemNhom)}
         onMouseEnter={() => setHoveredNhom(itemNhom)}
         onMouseLeave={() => setHoveredNhom(undefined)}
         value={itemNhom.world_teams}
  />
  </div>
);
//ADD list danh_muc
const useKeyPress = function(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};
function EditNewsHistory() {
    const [user, setUser] = useState(initialValue);
    const [selectedNhom, setSelectedNhom] = useState(undefined);
    const [selected, setSelected] = useState(undefined);
    const {title, content, danh_muc, teams, De_xuat, Time, link_page, danh_muc_link, link_images, title_img} = user;

    const [isOpen, isOpenActions] = useToggle(false);
    const [isOpen1, isOpenActions1] = useToggle(false);
    const [isOpen2, isOpenActions2] = useState(true);
    const [isOpen3, isOpenActions3] = useState(false);
    const [isOpen4, isOpenActions4] = useToggle(false);
    const [isOpen5, isOpenActions5] = useToggle(false);
    const [isOpen6, isOpenActions6] = useToggle(false);
    const [isOpen7, isOpenActions7] = useState(true);
    const [isOpen8, isOpenActions8] = useState(false);
    const [isOpen9, isOpenActions9] = useToggle(false);
    const [isOpen10, isOpenActions10] = useToggle(false);

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
    }

    const history = useNavigate();

    const onValueChange = (e) =>
    {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () =>{
       await editUser(id,user);
       history('/Administrator/Dashboard/News/History-list/');
    }

    // lấy thời gian mặc định
    const showdate = new Date();
    const Time_show = new Date().toLocaleTimeString();

    const Date_show = showdate.getDate()+'-'+(showdate.getMonth()+1)+'-'+showdate.getFullYear();
    
    const DANHMUC = ({ item, active, setSelected, setHovered }) => (
        <div>
            <input type="button"
                className={`item ${active ? "active" : ""}`}
                onClick={() => setSelected(item)}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(undefined)}
                value={item.danhmuc}
            />
            </div>
        );

    //slug
    const [value, setValue] = useState("Nhập tiêu đề");
    const [msg, setMsg] = useState(false);
    const refResult = useRef();

    const parseStringDataLayer = (text) => {
        const textParsed = text
          .trim()
          .toString()
          .normalize("NFD")
          .replace(/([\u0300-\u036f]|[^a-zA-Z0-9\s])/g, "")
          .replace(/[\s]+/g, "-")
          .replace(/\-\-+/g, "-")
          .replace(/^-+|-+$/, "")
          .replace(/&/g, "-and-")
          .toLowerCase();

        return textParsed;
    };

    // add danh_muc
    const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
    const enterPress = useKeyPress("Enter");
    const [cursor, setCursor] = useState(0);
    const [hovered, setHovered] = useState(undefined);

    useEffect(() => {
    if (items.length && downPress) {
      setCursor(prevState =>
        prevState < items.length - 1 ? prevState + 1 : prevState
      );
    }
    }, [downPress]);
    useEffect(() => {
    if (items.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
    }, [upPress]);
    useEffect(() => {
    if (items.length && enterPress) {
      setSelected(items[cursor]);
    }
    }, [cursor, enterPress]);
    useEffect(() => {
    if (items.length && hovered) {
      setCursor(items.indexOf(hovered));
    }
    }, [hovered]);
    
    
    // add nhóm
    const downPressNhom = KeyNHOM("ArrowDown");
    const upPressNhom = KeyNHOM("ArrowUp");
    const enterPressNhom = KeyNHOM("Enter");
    const [cursorNhom, setCursorNhom] = useState(0);
    const [hoveredNhom, setHoveredNhom] = useState(undefined);

    useEffect(() => {
    if (nhoms.lengthNhom && downPressNhom) {
      setCursorNhom(prevStateNhom =>
        prevStateNhom < nhoms.lengthNhom - 1 ? prevStateNhom + 1 : prevStateNhom
      );
    }
    }, [downPressNhom]);
    useEffect(() => {
    if (nhoms.lengthNhom && upPressNhom) {
      setCursorNhom(prevStateNhom => (prevStateNhom > 0 ? prevStateNhom - 1 : prevStateNhom));
    }
    }, [upPressNhom]);
    useEffect(() => {
    if (nhoms.lengthNhom && enterPressNhom) {
      setSelectedNhom(nhoms[cursorNhom]);
    }
    }, [cursorNhom, enterPressNhom]);
    useEffect(() => {
    if (nhoms.lengthNhom && hoveredNhom) {
      setCursorNhom(nhoms.indexOf(hoveredNhom));
    }
    }, [hoveredNhom]);

    const handleCopyText = () => {
        refResult.current.select();
        document.execCommand("copy");
        setMsg(true);
      };


  return (

    <div className="EditNewsHistory__flex">
    <title> Tin tức - Chỉnh sửa bài đăng | WORLD SINGULARITY</title>
        <form>
            <span className="Administrator_admin_from ADP1">
                <input placeholder="Tiêu đề" type="text" onChange={(e)=> onValueChange(e)} value={title} name="title" className="Header_input" maxLength={150} minLength={30} required="required"/>
                <BsFillCloudCheckFill className="Administrator_admin_from_span_size"/>
                <div>
                    <span className="Administrator_admin_from_span">
                        <div>
                            <button onClick={()=> history("/Administrator/Dashboard/News/History-list/")} className="EditNewsHistory__flex__button__update__cancel">Hủy</button>
                        </div>

                        <div className="Administrator_admin_from_span_button" onClick={() => editUserDetails() }>
                            <MdUpload className="EditNewsHistory__flex__UPDATE"/>
                            <span className="Administrator_admin_from_span_button1_mb">Cập nhật</span>
                        </div>
                    </span>
                </div>
            </span>
            <span className="Administrator_admin_from_span_button1_Editor_a_grid">
                <CKEditor
                    editor={FullEditor}
                    required="required"
                    name="content"
                    data={content}
                    config={{
                               // extraPlugins: [MyCustomUploadAdapterPlugin],
                            },
                            {
                                placeholder: "Nhập ý tưởng của bạn...",
                                language: 'vi'
                            }
                        }
                />
                <div>
                <span className="Administrator_admin_from_fl_flex_form ADP3">
                  <div className="Administrator_admin_from_fl_flex_width">
                    <p className="AdministratorADMINNEWS__BOLD">Cài Đặt bài Đăng</p>
                    <a onClick={isOpenActions9.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen9 ? 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronUp style={{fontSize: '25px'}}/>Quản lý bài băng
                      </p> 
                      : 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronDown style={{fontSize: '25px'}}/>Quản lý bài băng
                      </p>}
                    </a>
                     {isOpen9 ? <div className="Admin_animation">
                                  <input onChange={(e)=> onValueChange(e)} name="teams" value={selectedNhom ? selectedNhom.world_teams : teams} placeholder="Nhóm quản lý bài viết" type="text" className="Header_input" required="required"/>
                                  <div className="Administrator_admin_hashtag_p">
                                    {nhoms.map((itemNhom, inhom) => (
                                      <NHOM
                                        key={itemNhom.id}
                                        activeNhom={inhom === cursorNhom}
                                        itemNhom={itemNhom}
                                        setSelectedNhom={setSelectedNhom}
                                        setHoveredNhom={setHoveredNhom}
                                      />
                                    ))}
                                  </div>
                                </div>
                      : null}

                    <a onClick={isOpenActions10.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen10 ? 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronUp style={{fontSize: '25px'}}/>Danh mục
                      </p> 
                      : 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronDown style={{fontSize: '25px'}}/>Danh mục
                      </p>}
                    </a>
                     {isOpen10 ? <div className="Admin_animation">
                                  <input onChange={(e)=> onValueChange(e)} value={selected ? selected.danhmuc : danh_muc}  name="danh_muc" placeholder="Danh mục" type="text" className="Header_input" required="required" maxLength={20} minLength={5}/>
                                  <div className="Administrator_admin_hashtag_p">
                                    {items.map((item, i) => (
                                        <DANHMUC
                                          key={item.id}
                                          active={i === cursor}
                                          item={item}
                                          setSelected={setSelected}
                                          setHovered={setHovered}
                                        />
                                      ))}
                                  </div>
                                </div>
                      : null} 

                    <a onClick={isOpenActions.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen ? 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronUp style={{fontSize: '25px'}}/>Gán nhãn (Tags)
                      </p> 
                      : 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronDown style={{fontSize: '25px'}}/>Gán nhãn (Tags)
                      </p>}
                    </a>
                     {isOpen ? <div className="Admin_animation">
                                  <input placeholder="Phân tách các nhãn bằng dấu phẩy" type="text" className="Header_input impotant__ADMIN_NEWS"/>
                                  <div className="Administrator_admin_hashtag_p">
                                    <input type="button" value="Vũ trụ" />
                                    <input type="button" value="Thiên văn học" />
                                    <input type="button" value="World Singularity" />
                                    <input type="button" value="Không gian" />
                                    <input type="button" value="Hệ mặt trời" />
                                    <input type="button" value="Trí tuệ nhân tạo" />
                                  </div>
                                </div>
                       : null}

                    <a onClick={isOpenActions1.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen1 ? 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronUp style={{fontSize: '25px'}}/>
                          <div className="Administrator_admin_hashtag_p_output">Được xuất bản vào
                            <span className="Administrator_admin_hashtag_p_flex">{Date_show} <span>{Time_show}</span></span>
                          </div>
                      </p> 
                      : 
                      <p className="Administrator_admin_hashtag">
                        <BiChevronDown style={{fontSize: '25px'}}/>
                          <div className="Administrator_admin_hashtag_p_output">Được xuất bản vào
                            <span className="Administrator_admin_hashtag_p_flex">{Date_show} <span>{Time_show}</span></span>
                          </div>
                      </p>}
                    </a>
                     {isOpen1 ? <div className="Administrator_admin_hashtag_checkbox Admin_animation">
                                  <span className="Administrator_admin_hashtag_p_flex_date">
                                    <label className="switch_admin" for="checkbox_six">
                                      <input
                                        type="checkbox"
                                        id="isOpen2"
                                        value={isOpen2}
                                        onChange={(e) => isOpenActions2(e.target.checked)}
                                        id="checkbox_six" 
                                        className="input_admin"
                                        checked="true"
                                      />
                                      <div className="slider_admin round_admins"></div>
                                    </label>
                                    <label htmlFor="isOpen2">
                                      Tự động
                                    </label>
                                  </span>

                                  <span className="Administrator_admin_hashtag_p_flex_date">
                                    <label className="switch_admin" for="checkbox_seven">
                                      <input
                                        type="checkbox"
                                        id="isOpen3"
                                        value={isOpen3}
                                        onChange={(e) => isOpenActions3(e.target.checked)}
                                        id="checkbox_seven" 
                                        className="input_admin" 
                                      />
                                      <div className="slider_admin round_admins"></div>
                                    </label>
                                    <label htmlFor="isOpen3">
                                      Đặt ngày và giờ
                                    </label>
                                  </span>

                                  {isOpen2 || isOpen3 ? (
                                    <div className="Administrator_admin_hashtag_p_output_test_div">
                                      {isOpen2 && <span className="Administrator_admin_hashtag_p_output_test">Ngày đăng</span>}
                                      {isOpen3 && 
                                        <span className="Administrator_admin_hashtag_p_flex_time">
                                          <input onChange={(e)=> onValueChange(e)} name="Date" value={Date_show} placeholder="Ngày đăng" type="text" readOnly="true"/>
                                          <input onChange={(e)=> onValueChange(e)} name="Time" value={Time} placeholder="Giờ đăng" type="time"/>
                                        </span>
                                      }
                                    </div>
                                  ) : (
                                    <div className="Administrator_admin_hashtag_p_output_test">Vui lòng chọn thời gian</div>
                                  )}
        
                                </div>
                       : null}

                        <a onClick={isOpenActions4.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen4 ? 
                          <p className="Administrator_admin_hashtag">
                            <BiChevronUp style={{fontSize: '25px'}}/>Liên kết
                          </p> 
                          : 
                          <p className="Administrator_admin_hashtag">
                            <BiChevronDown style={{fontSize: '25px'}}/>Liên kết
                          </p>}
                        </a>
                         {isOpen4 ? <div className="Administrator_admin_hashtag_checkbox_div Admin_animation">
                                      <p>Liên kết cố định <RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                      <textarea readOnly 
                                                placeholder="http://localhost:3000/Blogs/..." 
                                                type="text" 
                                                ref={refResult} 
                                                onChange={(e)=> onValueChange(e)} 
                                                value={"http://localhost:3000/Blogs/" + danh_muc_link + "/" + link_page} 
                                                id="link_page" 
                                                className="Administrator_admin_hashtag_link_active Auto_size_textarea"
                                      >
                                      </textarea>
                                      <a variant="primary" onClick={handleCopyText} className="Administrator_admin_hashtag_coppy">Sao chép liên kết<VscCopy/></a>
                                      <div className="Administrator_admin_hashtag_p_output_test_div">
                                        <span className="Administrator_admin_hashtag_p_flex_date">
                                        <label className="switch_admin" for="checkbox_for">
                                          <input
                                            type="checkbox"
                                            id="isOpen7"
                                            value={isOpen7}
                                            onChange={(e) => isOpenActions7(e.target.checked)}
                                            id="checkbox_for" 
                                            className="input_admin"
                                            checked="true" 
                                          />
                                          <div className="slider_admin round_admins"></div>
                                        </label>
                                        <label htmlFor="isOpen7">
                                            Liên kết cố định tự động
                                        </label>
                                      </span>

                                      <span className="Administrator_admin_hashtag_p_flex_date">
                                        <label className="switch_admin" for="checkbox_five">
                                          <input
                                            type="checkbox"
                                            id="isOpen8"
                                            value={isOpen8}
                                            onChange={(e) => isOpenActions8(e.target.checked)}
                                            id="checkbox_five" 
                                            className="input_admin" 
                                          />
                                          <div className="slider_admin round_admins"></div>
                                        </label>
                                        <label htmlFor="isOpen8">
                                          Liên kết cố định tùy chỉnh
                                        </label>
                                      </span>

                                      {isOpen7 || isOpen8 ? (
                                        <div className="Administrator_admin_hashtag_p_output_test_div">
                                          {isOpen7 && <span className="Administrator_admin_hashtag_p_output_test">Liên kết cố định tự động</span>}
                                          {isOpen8 && 
                                            <span>
                                              <input readOnly placeholder="http://localhost:3030/Blogs/..." type="text" ref={refResult} onChange={(e)=> onValueChange(e)} value={parseStringDataLayer()} id="link_page"/>
                                            </span>
                                          }
                                        </div>
                                      ) : (
                                        <div className="Administrator_admin_hashtag_p_output_test">Vui lòng chọn liên kết trang</div>
                                      )}
                                    </div>
                                     <p className="Administrator_admin_hashtag_LK_TD">Liên kết tiêu đề <RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                     <input placeholder="Thêm liên kết tiêu đề" type="text" className="Header_input"/>

                                     <p className="Administrator_admin_hashtag_LK_TD">Liên kết ảnh đại diện<RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                     <input  onChange={(e)=> onValueChange(e)} placeholder="Thêm liên kết hình ảnh" type="text" className="Header_input" name="link_images" value={link_images}/>

                                     <p className="Administrator_admin_hashtag_LK_TD">Tiêu đề ảnh <RiQuestionMark className="Administrator_admin_hashtag_icons"/></p>
                                     <input  onChange={(e)=> onValueChange(e)} placeholder="Nhập tiêu đề ảnh" type="text" className="Header_input" name="title_img" value={title_img}/>
                                     <p className="Administrator_admin_hashtag_LK_TD Administrator_admin_hashtag_LK_TD_2">Thêm liên kết đính kèm khác</p>
                                    </div>
                           : null}

                          <a onClick={isOpenActions5.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen5 ? 
                            <p className="Administrator_admin_hashtag">
                              <BiChevronUp style={{fontSize: '25px'}}/>Mô tả tìm kiếm
                            </p> 
                            : 
                            <p className="Administrator_admin_hashtag">
                              <BiChevronDown style={{fontSize: '25px'}}/>Mô tả tìm kiếm
                            </p>}
                          </a>
                           {isOpen5 ? <div className="Admin_animation">
                                        <input onChange={(e)=> onValueChange(e)} name="De_xuat" value={De_xuat} placeholder="Nhập mô tả tìm kiếm" type="text" className="Header_input impotant__ADMIN_NEWS"/>
                                      </div>
                            : null}

                          <a onClick={isOpenActions6.toggle} className="Administrator_admin_from_span_button1_Editor_a">{isOpen6 ? 
                            <p className="Administrator_admin_hashtag">
                              <BiChevronUp style={{fontSize: '25px'}}/>Tùy chọn
                            </p> 
                            : 
                            <p className="Administrator_admin_hashtag">
                              <BiChevronDown style={{fontSize: '25px'}}/>Tùy chọn
                            </p>}
                          </a>

                           {isOpen6 ? <div className="Administrator_admin_hashtag_checkbox_all_div Admin_animation">
                                        <p className="Administrator_admin_hashtag_lineheight_2">Bình luận, nhận xét của người đọc</p>
                                        <span>
                                          <label className="switch_admin" for="checkbox_one">
                                            <input type="checkbox" id="checkbox_one" className="input_admin" />
                                            <div className="slider_admin round_admins"></div>
                                          </label>
                                          <p className="Administrator_admin_hashtag_lineheight">Cho phép</p>
                                        </span>
                                        <span>
                                          <label className="switch_admin" for="checkbox_two">
                                            <input type="checkbox" id="checkbox_two" className="input_admin" />
                                            <div className="slider_admin round_admins"></div>
                                          </label>
                                          <p className="Administrator_admin_hashtag_lineheight">Không cho phép, hiển thị bình luận hiện có</p>
                                        </span>
                                        <span>
                                          <label className="switch_admin" for="checkbox_three">
                                            <input type="checkbox" id="checkbox_three" className="input_admin" />
                                            <div className="slider_admin round_admins"></div>
                                          </label>
                                          <p className="Administrator_admin_hashtag_lineheight">Không cho phép, ẩn bình luận hiện có</p>
                                        </span>
                                      </div>
                            : null}

                    </div>
                  </span>
                </div>
            </span>
        </form>
      </div>
    );
  }

export default EditNewsHistory;
