import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Article from "./pages/Article.js";
import Newpost from "./pages/Newpost.js";
import PostQueue from "./pages/PostQueue.js";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/article/:id" element={<Article></Article>} />
                <Route path="/newpost" element={<Newpost></Newpost>} />
                <Route path="/postqueue" element={<PostQueue></PostQueue>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </div>
    );
}

export default App;
