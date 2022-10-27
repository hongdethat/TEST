import './css/VideoIframe.css';
import Database from '../../database/Admin';
import { AiFillDelete, AiOutlinePlus, AiOutlineSend, AiFillEye, AiOutlineEdit } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';
import { BsPlayCircle } from 'react-icons/bs';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser ,getallUsers } from '../service/api-video';
import { addUser } from '../service/api-video';

const initialValue = {
    title_video: "",
    image_video: "",
    Date_video: "",
    Video_video: "",
}

function VideoAdminstration()  {
  const [user, setUser] = useState(initialValue)
  const {title_video, image_video, Date_video, Video_video} = user;
  const [Showhide, SetShowhide] = useState(false);

  const history = useNavigate();

  const onValueChange = (e) =>
  {
    //  console.log(e);
    // console.log(e.target.value);
      setUser({...user, [e.target.name]: e.target.value});
     console.log(user);
  }

  const addUserDetails = async () =>{
     await addUser(user);
     alert('Thêm video thành công');
     history('/Administrator/Dashboard/News/History-video-List/');
  }

// lấy thời gian mặc định
const showdate = new Date();

const Date_show = showdate.getDate() +'-'+ (showdate.getMonth() + 1)+'-'+showdate.getFullYear();


  return (
  <div className="VideoAdminstration__all Font_text">
    <title>Tin tức - Video | WORLD SINGULARITY</title>
    <button onClick={()=> history("/Administrator/Dashboard/News/History-video-List/")} className="NewsHistory__back"><TiArrowBack/></button>
    <div className="VideoAdminstration__background__all">      
      <h1><AiOutlinePlus/>Thêm video</h1>
      <form className="VideoAdminstration__all__flex__row">
        <div>
          <span className="Video_iframe_test_alla_spano">
            <p>Nhập tiêu đề</p>
            <input type="text" placeholder="Tiêu đề" onChange={(e)=> onValueChange(e)} name="title_video" value={title_video} className="Header_input" maxLength={150} minLength={10} required="required"/>
          </span>

          <span className="Video_iframe_test_alla_spano">
            <p>Ngày đăng</p>
           <input onChange={(e)=> onValueChange(e)} name="Date_video" value={Date_video + Date_show} placeholder="Ngày đăng" type="text" className="Header_input"/>
          </span>
          
          <span className="Video_iframe_test_alla_spano">
            <p>Liên kết ảnh đại diện</p>
             <input type="text" placeholder="Nhập liên kết hình ảnh hiển thị" className="Header_input" onChange={(e)=> onValueChange(e)} name="image_video" value={image_video} required="required" />
          </span>

          <span className="Video_iframe_test_alla_spano">
            <p>Liên kết nhúng</p>
            <input type="text" placeholder="Nhập liên kết hiển thị" className="Header_input" onChange={(e)=> onValueChange(e)} name="Video_video" value={Video_video} required="required" />
          </span>
          <div className="Video_iframe_test_allateksl">
            <div className="Video_iframe_test_allateksl_btn_div"><AiFillEye/>Xem trước</div>
              <div className="Video_iframe_test_alla_spano_btn" onClick={() => addUserDetails() }>< AiOutlineSend />Xuất bản</div>
          </div>
        </div>
        <div className="Video_iframe_test_alla_spano_btn__prviews">
          Xem trước
        </div>
      </form>
    </div>
  </div>
  );
}

export default VideoAdminstration;
