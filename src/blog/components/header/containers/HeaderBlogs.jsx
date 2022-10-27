import { Headernews, Headerextra } from '../../../';
import Mobileheader from '../../../../header/Mobile/Mobileheader';
import { Outlet } from 'react-router-dom';

function HeaderBlogs() {

  return (
    <div className="Font_text">
      <Mobileheader/>

      <div className="Read_news_background">
        <Headernews/>
      </div>
      <Headerextra/>

      <Outlet />
    </div>
  );
}

export default HeaderBlogs;
