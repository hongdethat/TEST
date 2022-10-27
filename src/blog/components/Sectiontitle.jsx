import { useTranslation } from 'react-i18next';
import './css/Section_title.css';
const Sectiontitle = function(props) {
const { t } = useTranslation()
  return (
      <div className="Section_title_padding">
        <div className="Section_title_color">
          <div className="Section_title_div">
            <h5>Xu hướng trên Word Singularity</h5>
            <h1>Khám phá những thủ thuật truyền tải và cài đặt trợ lý ảo</h1>
          </div>
          <button>Truy cập tại đây</button>
        </div>
      </div>
  )
}
export default Sectiontitle;