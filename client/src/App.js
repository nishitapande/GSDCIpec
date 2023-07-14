import "./App.css";
import NavBar from "./components/navigation/NavBar";
// import Footer from "./components/navigation/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";

import Login from "./components/login/Login";
import FooterNew from "./components/navigation/FooterNew";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";
import EventForm from "./pages/EventForm";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/404" exact element={<PageNotFound />} />
          <Route path="/eventpage" exact element={<EventPage />} />
          <Route path="/eventform" exact element={<EventForm />} />
        </Routes>
        {/* <Footer /> */}
        <FooterNew />
      </div>
    </Router>
  );
}

export default App;
