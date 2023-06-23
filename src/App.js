import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Article from "./pages/Article.js";
import Newpost from "./pages/Newpost.js";
import PostQueue from "./pages/PostQueue.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="/postqueue" element={<PostQueue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Router>
    </div>
  );
}

export default App;
