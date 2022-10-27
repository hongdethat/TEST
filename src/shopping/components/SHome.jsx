import './css/SHome.css';
import { S1, S2, S3 } from '../../images/images';

const DATA = [{
	id: 1,
	img: S1,
	title: "Search",
	content: "Hơn 1500+ tìm kiếm sản phẩm"
},
{
	id: 2,
	img: S2,
	title: "Tap",
	content: "Sử dụng nhiều ứng dụng đặc biệt"
},
{
	id: 3,
	title: "Giao hàng",
	img: S3,
	content: "Giao hàng nhanh chóng trong vòng 30 phút"
}]
function SHome(){
	return(
		<>
			<div className="S__Home__Demo">
			    <div className="S__Home__img__all">
			        <img src="https://wallpapershome.com/images/pages/pic_h/7756.jpg" alt="ABckground" className="S__Home_img"/>
			        <div className="S__Home__text">
			           <h1>Vận chuyển Nhanh như chớp</h1>
			           <h4>From our haus to yours</h4>
			        </div>
			    </div>

			    <div className="S__Home_box">
				    {DATA.map((SHOMEBOX) => (
				    <div key={SHOMEBOX.id} className="S__Home__box__SHOP">
				        <div className="S__flex__tex__box">
					        <span className="S__Home__box__SHOP_1">{SHOMEBOX.title}</span>
					        <span className="S__Home__box__SHOP_2">{SHOMEBOX.content}</span>
				        </div>
				        <div>
				            <img src={SHOMEBOX.img} alt="box" className="S__box__img"/>
				        </div>
				    </div>
				    ))}
			    </div>

			    <div className="S__pass__2__container">
			        <h1 className="S__Text__sale__Flash">Flash Sale</h1>
			        <span className="S__Text__sale">
			            <h1 className="S__Text__border">Giảm 50%</h1>
			            <span><button className="S__btn__show">Show all</button></span>
			        </span>
			    </div>
			</div>
		</>
	)
}
export default SHome;