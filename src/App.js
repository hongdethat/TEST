import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { Landing } from './landing/';
import { Support } from './support/';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import { Signin } from './login';
import { Blog, HeaderBlogs } from './blog';
import { Shop } from './shopping';
import { Adminstration, HomeAdminstration } from './adminstration';
import { Error404notfound } from './not-found';
// import { signIn } from './adminstration/components/auth/auth';
// import AuthRoute from './adminstration/components/auth/AuthRoute';

const Read = React.lazy(() => import("./blog/components/read/components/Read"));
const Hashtag = React.lazy(() => import("./blog/components/read/components/Hashtag"));
const VideoAdminstration = React.lazy(() => import("./adminstration/components/VideoAdminstration"));
const NewsAdminstration = React.lazy(() => import("./adminstration/components/NewsAdminstration"));
const NewsHistory = React.lazy(() => import("./adminstration/components/NewsHistory"));
const EditNewsHistory = React.lazy(() => import("./adminstration/components/EditNewsHistory"));
const EditVideoAdminstration = React.lazy(() => import("./adminstration/components/EditVideoAdminstration"));
const AdminAccount = React.lazy(() => import("./adminstration/components/AdminAccount"));
const DetailsNewsAdminstration = React.lazy(() => import("./adminstration/components/DetailsNewsAdminstration"));
const VideoHistory = React.lazy(() => import("./adminstration/components/VideoHistory"));
const Profile = React.lazy(() => import("./adminstration/components/profile/Profile"));


function App(props) {
  useEffect(() => console.log("Refresh"));
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login/" element={<Signin />} />
          <Route exact path="/Support/" element={<Support />} />
          <Route exact path="*" element={<Error404notfound />} />

          {/*Điều hướng Adminstration Page*/}
          <Route exact path="Administrator/Dashboard" element={<Adminstration />} >
            <Route index element={<HomeAdminstration />} />
            <Route exact path="News/Update-Video/" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                                <VideoAdminstration />
                                                              </React.Suspense>}/>
            <Route exact path="News/Update-News/" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                                <NewsAdminstration />
                                                              </React.Suspense>}/>
            <Route exact path="News/History-list/" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                                <NewsHistory />
                                                              </React.Suspense>}/>
            <Route exact path="News/Editor-posts/:id" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                                <EditNewsHistory />
                                                              </React.Suspense>}/>
            <Route exact path="News/Editor-video/:id" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                                <EditVideoAdminstration />
                                                            </React.Suspense>}/>
            <Route exact path="Account/Management-account-admin/" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                                <AdminAccount />
                                                            </React.Suspense>}/>
            <Route exact path="News/News-List/" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                              <DetailsNewsAdminstration />
                                                            </React.Suspense>}/>
            <Route exact path="News/History-video-List/" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                              <VideoHistory />
                                                            </React.Suspense>}/>
            <Route exact path="Account/Profile/" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                              <Profile />
                                                            </React.Suspense>}/>
            <Route exact path="*" element={<h1>Trang không tồn tại</h1>} />
          </Route>
          {/*Kết thúc điều hướng Adminstration Page*/}
          
          {/*Điều hướng Blog Page*/}
          <Route exact path="Blogs" element={<HeaderBlogs />} >
            <Route index element={<Blog />} />
            <Route exact path=":Category/" element={  <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                                <Hashtag />
                                                      </React.Suspense>}/>
            <Route exact path="/Blogs/:Category/:HomepageNewsBogs/" element={ <React.Suspense fallback={<div>
                                                                                <div className="lightgreen"></div>
                                                                                <div className="darkgreen"></div>
                                                                              </div>}>
                                                                                <Read />
                                                                              </React.Suspense>}/>
            <Route exact path="*" element={<h1>Trang không tồn tại</h1>} />
          </Route>
          {/*Kết thúc điều hướng Blog Page*/}
          <Route exact path="Shop" element={<Shop/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
