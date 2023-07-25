import "./App.css";
// import Footer from "./components/navigation/Footer";
import Home from "./pages/Home";
import Login from "./components/login/Login";

import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";
import EventForm from "./pages/EventForm";
import Members from "./components/teamMember/page/Members";
import MainHeader from "./components/shared/navigation/header/MainHeader";
function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/team" exact element={<Members />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/404" exact element={<PageNotFound />} />
          <Route path="/eventpage" exact element={<EventPage />} />
          <Route path="/eventform" exact element={<EventForm />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
