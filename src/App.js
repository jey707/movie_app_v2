import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="rab">
      <HashRouter>
        <Navigation />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/about" element={<About />} />
          <Route exact={true} path="/movie-detail/:id" element={<Detail />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
