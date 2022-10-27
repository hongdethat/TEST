import { useState, useEffect } from 'react';
import Database from '../../database/Admin';
import { TiArrowBack } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete, AiOutlinePlus, AiOutlineSend, AiFillEye, AiOutlineEdit, AiFillStar } from 'react-icons/ai';
import { deleteUser ,getallUsers } from '../service/api-video';
import { BsPlayCircle, BsPlusCircle, BsCalendarEventFill } from 'react-icons/bs';
import { MdManageAccounts, MdInsertComment, MdEdit, MdVisibility } from 'react-icons/md';
import './css/VideoHistory.css';

function VideoHistory() {
    const [Showhide, SetShowhide] = useState(false);
    const history = useNavigate();

    //api
	  const [user, setUser] = useState([]);
	    useEffect(() => {
	        getUsers();
	    }, [])

	    const getUsers = async () =>{
	        const response = await getallUsers();
	        console.log(response);
	        setUser(response.data);
	    }

	    const deleteData = async (id) => {
	        await deleteUser(id);
	        getUsers();
	    }
	const Dem = JSON.parse(JSON.stringify(Database.Video_iframe)).length;

	return(
		<div className="VideoHistory__margin__all">
		   <title>Video - Quản lý bài đăng | WORLD SINGULARITY</title>
		    <div className="Video_iframe_test_alla_pp BaiDang_max_w_o2">
              <div className="VideoHistory__flex">
                  <div className="VideoHistory__flex2">
                    <button onClick={()=> history("/Administrator/Dashboard/News/News-List/")} className="NewsHistory__back"><TiArrowBack/></button>
                    <Link to="/Administrator/Dashboard/News/Update-Video/">
                      <button className="Video__history__add__video"><BsPlusCircle className="VideoHistory_flex_button__quanly__icon Font_text"/>Thêm video</button>
                    </Link>
                  </div>
                  <span className="VideoHistory__flex2">
                    <select className="Button__ADMIN">
                      <option>Tất cả video ({Dem})</option>
                    </select>
                    {Showhide &&  
                      <div className="BaiDang_max_w_abc_sl">
                        <label className="switch_admin">
                          <input type="checkbox" className="input_admin" />
                          <div className="slider_admin round_admins"></div>
                        </label>
                          <AiFillDelete/>
                          <p>Xóa tất cả</p>
                      </div>}
                    {Showhide ? 
                    <button onClick={() => SetShowhide(!Showhide)} className="Button__ADMIN">Hủy</button>
                    :
                    <button onClick={() => SetShowhide(!Showhide)} className="Button__ADMIN"><MdManageAccounts className="News__history__ADD__POST__IO"/>Quản lý tùy chọn</button>}
                </span>
              </div>
              <div className="VideoHistory__grid">
                {Database.Video_iframe.map((List_video) => (
                      <div className="VideoHistory__background__box" key={List_video.id}>
                        <div className="video_video_posistion">
                          <img src={List_video.image_video} alt={List_video.title_video} className="img__video_admin"/>
                          <BsPlayCircle className="icon__videohistory__icon"/>
                          <button className="VideoHistory__timeout__video">{List_video.Time_out_video}</button>
                          <div className="overlay_Video_AD"></div>
                        </div>
                        <div className="VideoHistory__background__top_margin">
                          <b>{List_video.title_video}</b>
                          <span className="VideoHistory__timeout__video_flex__icon">
                            <span className="icon3__video__admin">
                              <MdInsertComment className="utilities1"/>
                              <AiFillStar className="utilities2"/>
                              <BsCalendarEventFill className="utilities3"/>
                            </span>
                            <p className="VideoHistory__timeout__video_p">Ngày đăng: {List_video.Date_video}</p>
                          </span>
                          <span className="VideoHistory__timeout__video_flex__ico_flex">
                            <Link to={`/Administrator/Dashboard/News/Editor-video/${List_video.id}`} className="VideoIframe_div_a_span8_opo__button">
                              <MdEdit className="NewsHistory__Eddit"/>
                              Edit
                            </Link>
                            <button onClick={() => deleteData(List_video.id)} className="VideoIframe_div_a_span8_opo__button">
                              <AiFillDelete className="NewsHistory__DElete"/>
                              Delete
                            </button>
                          </span>
                  
                        </div>
                        
                       {/* <div className="VideoIframe_div_a_span8_o">
                          <div className="VideoIframe_div_a_span8">
                            <h3>{title_video}</h3>
                            <p>Ngày đăng: {Date_video}</p>
                          </div>
                          
                          <div className="VideoIframe_div_a_span8_oposm">
                            <div className="VideoIframe_div_a_span8_opo">
                               <AiFillEye/>
                               Xem
                            </div>

                            <Link to={`/Administrator/Dashboard/News/Editor-video/${id}`} className="VideoIframe_div_a_span8_opo">
                               <AiOutlineEdit/>
                               Chỉnh sửa
                            </Link>
                            <button onClick={() => deleteData(id)} className="VideoIframe_div_a_span8_opo">
                                <AiFillDelete/>
                                Xóa bài đăng
                            </button>
                             </div>
                        </div>*/}
                     </div>
                    ))}
              </div>
            </div>
		</div>
	)
}
export default VideoHistory;