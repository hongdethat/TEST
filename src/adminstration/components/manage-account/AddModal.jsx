import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AiFillCamera } from 'react-icons/ai';
import { BiHide, BiShow } from 'react-icons/bi';
import { MdClose, MdFileUpload } from 'react-icons/md';
import Axios from 'axios';
import { None } from '../../../images/images';

const AddModal = ({ isShowing, hides, user }) => {

const url = "http://localhost:3001/Dashboards"

const [data, SetData] = useState({
  email: "",
  password: "",
  name: "",
  birthday: "",
  office: "",
  time: "",
  input: "",
  phone: "",
  token: "",
  sex: ""
})

function submit(e){
  e.preventDefault();
  Axios.post(url,{
    email: data.email,
    password: data.password + makeid(8),
    name: data.name,
    birthday: data.birthday,
    office: data.office,
    time: data.time + Time_show,
    input: data.input + Date_show,
    phone: data.phone,
    token: data.token + makeid(100),
    sex: data.sex
  })
  .then(res=>{
    console.log(res.data)
  })
}

function handle(e){
  const newdata={...data}
  newdata[e.target.id] = e.target.value
  SetData(newdata)
  console.log(newdata)
}

//time
const showdate = new Date();
const Time_show = new Date().toLocaleTimeString();
const Date_show = showdate.getDate()+'-'+(showdate.getMonth()+1)+'-'+showdate.getFullYear();

//Token ID
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

//show hide password
const [passView, setPassView] = useState(true);
function ShowPassword(){
  if(passView) {
    setPassView(false);
  }
  else{
    setPassView(true);
  }
}

return(
  isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="Modals-overlay_function_Account"/>
      <div className="Modals-wrapper_function_Account" aria-Modals aria-hidden tabIndex={-1} role="dialog">
        <div>
          <div className="Modals_function_Account">
            <div className="Modals-header_function_Account">
              <span className="Modals-header_function_Account2">
                <h2>Th??m t??i kho???n</h2>
                <i>Th??m m???i m???t t??i kho???n qu???n tr???</i>
              </span>
              <button type="button" className="Modals-close-button_function_Account" data-dismiss="Modals" aria-label="Close" onClick={hides}>
                <span aria-hidden="true"><MdClose/></span>
              </button>
            </div>
            <div className="AdminAccount_css_sk_all_flexdds_brandfle_flo">
              <form onSubmit={(e)=> submit(e)} className="AddModal_padding">
                  <span className="AddModal_span">
                    <b>H??? v?? t??n</b>
                    <input onChange={(e)=> handle(e)} id="name" value={data.name} placeholder="H??? v?? t??n" type="text" className="Header_input_ADD_modal" required="required"/>
                  </span>
                  <div className="AddModal_span_flex_famale">
                    <span className="AddModal_span">
                      <b>Ng??y th??ng n??m sinh</b>
                      <input onChange={(e)=> handle(e)} id="birthday" value={data.birthday} placeholder="Sinh nh???t" type="date" className="Header_input_ADD_modal" required="required" />
                    </span>
                    <span className="AddModal_span">
                      <b>Gi???i t??nh</b>
                      <select className="Header_input_ADD_modal" onChange={(e)=> handle(e)} id="sex" value={data.sex}>
                        <option>
                          Nam
                        </option>
                        <option>
                          N???
                        </option>
                        <option>
                          kh??c
                        </option>
                      </select>
                    </span>
                  </div>
                  <span className="AddModal_span">
                    <b>S??? ??i???n tho???i</b>
                    <input onChange={(e)=> handle(e)} id="phone" value={data.phone} placeholder="S??? ??i???n tho???i" type="number" className="Header_input_ADD_modal" required="required" maxLength={11} minLength={10}/>
                  </span>
                  <span className="AddModal_span">
                    <b>?????a ch??? email</b>
                    <input onChange={(e)=> handle(e)} id="email" value={data.email} placeholder="?????a ch??? email" type="email" className="Header_input_ADD_modal" required="required" />
                  </span>
                  <span className="AddModal_span">
                    <b>Ch???c danh</b>
                    <select onChange={(e)=> handle(e)} id="office" value={data.office} placeholder="Ch???c danh" className="Header_input_ADD_modal" required="required">
                      <option>
                        Qu???n tr??? vi??n
                      </option>
                      <option>
                        Bi??n t???p vi??n
                      </option>
                      <option>
                        Ph??ng d???ch vi??n
                      </option>
                      <option>
                        Ki???m duy???t vi??n
                      </option>
                    </select>
                  </span>
                  <span className="AddModal_span">
                    <b>M???t kh???u <i>(???????c t???o ng???u nhi??n 8 k?? t???)</i></b>
                    <input onChange={(e)=> handle(e)} id="password" value={data.password + makeid(8)} readonly placeholder="M???t kh???u" type={passView?"Password":"Text"} className="Header_input_ADD_modal" required="required" disabled="disabled" />
                    <a onClick={ShowPassword} className="Adminshowhide">{passView?  <BiShow/> : <BiHide/>} </a>
                  </span>
                <div className="AddModal_img_btn">
                  <button>L??u</button>
                  <div data-dismiss="Modals" aria-label="Close" onClick={hides}>Close</div>
                </div>
              </form>
              <div className="AddModal_img">
                <b>AVATAR</b>
                <i>T???i l??n h??? s?? c?? nh??n</i>
                <div class="container_Addmodal">
                  <img src={None} alt='Avatar'/>
                    <p class="title_Addmodal"><AiFillCamera className="AddModal_span_icon"/></p>
                    <div class="overlay_Addmodal"></div>
                    <div class="button_Addmodal"><a href="#/" className="button_Addmodala"><MdFileUpload className="AddModal_span_icon_oo"/></a></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
    ) : null
    );
  };

export default AddModal;