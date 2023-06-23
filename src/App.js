import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Article from "./pages/Article.js";
import Newpost from "./pages/Newpost.js";
import PostQueue from "./pages/PostQueue.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import MyPage from "./pages/MyPage.js";
import EditPage from "./pages/EditPage.js";
import Withdraw from "./pages/Withdraw.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="/updatepost" element={<Newpost />} />
        <Route path="/postqueue" element={<PostQueue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage/*" element={<MyPage />} />
        <Route path="/EditPage" element={<EditPage />} />
        <Route path="/Withdraw" element={<Withdraw />} />
      </Routes>
    </div>
  );
}

export default App;
