import './css/SSale.css';
import { RBHB } from '../../images/images';
import { AiOutlinePlus } from 'react-icons/ai';

const DATA = [{
	id:1,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:2,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:3,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:4,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:5,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:6,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:7,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:8,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:9,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:10,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:11,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
},
{
	id:12,
	img: RBHB,
	name: "Robot hút bụi lau nhà Ecovacs Deebot OZMO 920",
	price: "18.490.000",
	sale: "20.000.000",
}]
function SSale(){
	return(
		<div className="S__background__SSale">
		    {DATA.map((Product) => (
		    	<div className="SSasle__bottom">
			    	<div className="Background__Sale__product">
			    	    <img src={Product.img} alt={Product.name} className="SSale__img"/>
			    	    <AiOutlinePlus className="Sale__background__icon"/>
			    	</div>
			    	<span>
			    	    <span>{Product.name}</span>
		    	        <span className="SSale__price">
			    	        <div className="SSale__price_1">
			    	            {Product.price}đ
			    	        </div>
			    	        <div className="SSale__price_2">
			    	            {Product.sale}đ
			    	        </div>
		    	        </span>
		    	    </span>
		    	</div>
		    ))}
		</div>
	)
}
export default SSale;