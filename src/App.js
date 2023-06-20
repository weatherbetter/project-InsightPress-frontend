import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Article from "./pages/Article.js";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/article/:id" element={<Article></Article>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </div>
    );
}

export default App;
