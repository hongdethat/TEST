import React from 'react';
import ReactDOM from "react-dom";
import { Home, Loading, Header, Partner, Introduce, Review, Experience, Join, Features, Post, Planet, Description, Footer } from '../';
import BackToTop from '../../back-to-top/BackToTop';
import { Footers } from '../../footer'
import { useTranslation } from 'react-i18next';
import Mobileheader from'../../header/Mobile/Mobileheader';
import './Landing.css';
import Tooltip from '../../tooltip/Tooltip';

class Landing extends React.Component {

  LoadingPageHome(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.LoadingPageHome().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 1000)
      }
    })
  }

render() {
  function PageHome(props) {
  const { t } = useTranslation();

  return (
    <div className="App">
      <title>{t('AI Singularity')}</title>
      <Tooltip/>
      <Mobileheader/>

      <Header/>
      <div className="Landingbackground">
        <Home/>
      </div>
      <Partner/>
      <Features/>
      <Review/>
      <Introduce/>
      <Experience/>
      <Join/>
      {/*<Post/>*/}
      <div className="Landingbackground_bakgrounFT">
        {/*<Planet/>*/}
        {/*<Description/>*/}
        <Footer/>
      </div>
      <div className="Footers_main">
        <Footers/>
      </div>
      <BackToTop/>
    </div>
  );
}

return (
    <div>
      <Loading/>
      <PageHome/>
    </div>
    );
  }
}

export default Landing;
