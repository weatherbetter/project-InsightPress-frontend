import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<div>메인페이지</div>} />
                <Route path="/article/:id" element={<div>상세페이지</div>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </div>
    );
}

export default App;
