import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

export default function App() {
  return (
    <>
      <div>
        <button onClick={() => (window.location.href = "/")}>Home</button>
        <button onClick={() => (window.location.href = "/about")}>About</button>
        <button onClick={() => (window.location.href = "/contact")}>
          Contact
        </button>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </Router>
    </>
  );
}
