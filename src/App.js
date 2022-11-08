import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Post from './components/post-view';
import LandingPage from './components/home-page/langing-page';
import NewPost from './components/new-post/new-post';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= "/" element= { <LandingPage />} />
          <Route path= "/insta" element= { <Post />} />
          <Route path= "/createpost" element= { <NewPost />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
