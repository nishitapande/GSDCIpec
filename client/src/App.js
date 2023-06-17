import "./App.css";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/navigation/Footer";
import Home from "./components/pages/Home";
import Team from "./components/pages/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import FooterNew from "./components/navigation/FooterNew";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
        {/* <Footer /> */}
        <FooterNew />
      </div>
    </Router>
  );
}

export default App;
