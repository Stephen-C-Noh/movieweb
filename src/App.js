import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./routes/Search";

function App() {
    return (
        <Router>
            <Routes basename="/movieweb">
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/search/:keyword" element={<Search />} />
            </Routes>
        </Router>
    );
}

export default App;
