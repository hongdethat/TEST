import { Homepagenews, Sectionnewstopic, Sectiontitle, Sectionslider, Sectionmedia, Sectioncolumnist, Sectionsend } from '../'
import { Footers } from '../../footer';

import './Blog.css';

function Blog() {

  return (
    <div className="Font__Blogs">
      <title>Tin tức cập nhật | WORLD SINGULARITY</title>

      <Homepagenews/>
      <Sectionnewstopic/>
      <Sectiontitle/>
      <Sectionslider/>
      <Sectionmedia/>
      <Sectioncolumnist/>
      <Sectionsend/>
      
      <div className="Home_News_bgr">
        <div className="Background_news_home">
          <Footers />
        </div>
      </div>
    </div>
  );
}

export default Blog;
