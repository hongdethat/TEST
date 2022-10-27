import './css/Adminstration.css';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import ADMenu from '../components/menu/ADMenu';

function Adminstration(){
  return(
    <div className="Adminstrationdetails__Background">
      <div className="Font_text Adminstrationcss">
        <ADMenu/>
        <div className="Adminstrationdetails">
          <Header/>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
export default Adminstration;