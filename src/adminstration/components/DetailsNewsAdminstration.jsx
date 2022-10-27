import { Link, useNavigate } from 'react-router-dom';
import { newspaper, videoAdmin, PictureAdmin } from '../../images/images';
import Database from '../../database/Admin';
import { TiArrowBack } from 'react-icons/ti';
import "./css/DetailsNewsAdminstration.css";

function DetailsNewsAdminstration() {
	const News_math = JSON.parse(JSON.stringify(Database.user)).length;
	const Video_math = JSON.parse(JSON.stringify(Database.Video_iframe)).length;
	const Data = [{
		id: 1,
		link: "/Administrator/Dashboard/News/History-list/",
		name: "Quản lý tin tức",
		images: newspaper,
		math: News_math
	},
	{
		id: 2,
		link: "/Administrator/Dashboard/News/History-video-List/",
		name: "Quản lý Video",
		images: videoAdmin,
		math: Video_math
	},
	{
		id: 3,
		link: "#/",
		name: "Quản lý Ảnh",
		images: PictureAdmin,
		math: "0"
	}]
	const history = useNavigate();
	return(
		<div className="DetailsNewsAdminstration__ALL">
		    <title>Tin tức - Tùy chọn | WORLD SINGULARITY</title>
		        <span>
			      <button onClick={()=> history("/Administrator/Dashboard/")} className="NewsHistory__back DetailsNewsAdminstration__ALL__button"><TiArrowBack/></button>
			    </span>
			    <div className="DetailsNewsAdminstration__background__all">
				<div className="DetailsNewsAdminstration___flex__card">
				{Data.map((Details) => (
					<span className="DetailsNewsAdminstration__background" key={Details.id}>
					  <Link to={Details.link} className="DetailsNewsAdminstration__img__link">
					    <img src={Details.images} alt={Details.name} className="DetailsNewsAdminstration__img"/>
					    <h1>{Details.name}</h1>
					    <p>Tổng số nội dung: {Details.math}</p>
					  </Link>
					</span>
				))}
				</div>
			</div>
		</div>
	)
}
export default DetailsNewsAdminstration;