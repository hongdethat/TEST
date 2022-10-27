import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Logo from '../../../logo/Logo';
import "../css/Header.css";

function Header(){
	return(
		<div className="S__background__Header">
		  <HiOutlineMenuAlt2 className="S__background__icon"/>
		  <div className="S__flex__Header">
			<div className="S__Login__Header">
			    <div className="S__margin__right"><Logo/></div>
			    <span>
			     Login
			    </span>
			    <span className="S__Login__Header__container">{"|"}</span>
			    <span>
			      Create account
			    </span>
			  </div>
			  <RiSearchLine className="S__background__icon"/>
			  <AiOutlineShoppingCart className="S__background__icon"/>
		  </div>
		</div>
	)
}
export default Header;