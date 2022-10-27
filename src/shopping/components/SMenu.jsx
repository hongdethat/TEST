import "./css/SMenu.css";
import { FiChevronDown } from 'react-icons/fi';

function SMenu(){
	return(
		<div className="blocks-menus">
	        <ul className="primary-menus">
	          <li className="menus-dropdown__SMENU">
	            <a href="#/">Robot Honda<FiChevronDown/></a>
	            <ul className="dropdown__SMENU">
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	            </ul>
	          </li>
	          <li className="menus-dropdown__SMENU">
	            <a href="#/">Robot Hút bụi<FiChevronDown/></a>
	            <ul className="dropdown__SMENU">
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	            </ul>
	          </li>
	           <li className="menus-dropdown__SMENU">
	            <a href="#/">Xe tự lái<FiChevronDown/></a>
	            <ul className="dropdown__SMENU">
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	            </ul>
	          </li>
	          <li className="menus-dropdown__SMENU">
	            <a href="#/">Robot Alpha Go<FiChevronDown/></a>
	            <ul className="dropdown__SMENU">
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	            </ul>
	          </li>
	           <li className="menus-dropdown__SMENU">
	            <a href="#/">Robot Nấu ăn<FiChevronDown/></a>
	            <ul className="dropdown__SMENU">
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	              <li><a href="#/">Submenu 1</a></li>
	              <li><a href="#/">Submenu 2</a></li>
	              <li><a href="#/">Submenu 3</a></li>
	            </ul>
	          </li>
	          <li className="menus-megamenus">
	            <a href="#/">Tất cả sản phẩm<FiChevronDown/></a>
	            <ul className="mega-menus">
	              <div className="section">
	                <h3>Pages 1</h3>
	                <li><a href="#/">Submenu 1</a></li>
	                <li><a href="#/">Submenu 2</a></li>
	                <li><a href="#/">Submenu 3</a></li>
	              </div>
	              <div className="section">
	                <h3>Pages 2</h3>
	                <li><a href="#/">Submenu 1</a></li>
	                <li><a href="#/">Submenu 2</a></li>
	                <li><a href="#/">Submenu 3</a></li>
	              </div>
	            </ul>
	          </li>
	        </ul>
        </div>
	)
}
export default SMenu;