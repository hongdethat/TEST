import './Tags_news.css';
import { Link, useLocation } from "react-router-dom";

function Tags_news() {
  const Data = [{
  id: 1,
  title:'Vũ trụ',
},
{
  id: 2,
  title:'Thiên văn học',
},
{
  id: 3,
  title:'World Singularity',
},
{
  id: 4,
  title:'Công nghệ',
},
{
  id: 5,
  title:'Thế giới',
}]
  return (
  	<div className="Tags_news_h2_flex_all">
      <h2 className="Tags_news_h2_h2">Tags</h2>

      <div className="Tags_news_h2_flex_all_flex">
        {Data.map(({title, id}) => (
        <button className="Tags_news_button" key={id}>{title}</button>
        ))}
      </div>
  	</div>
  );
}

export default Tags_news;
