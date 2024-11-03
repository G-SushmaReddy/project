import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

import "./App.css";

import NewWindow from "./NewWindow";
import NewWindow1 from "./NewWindow1";
import MainWindow from "./MainWindow";
import Profilesetting from "./ProfileSetting";
import FoodRequestingForm from "./FoodRequestingForm";
import FoodPostingForm from "./FoodPostingForm";
import EditPost from "./EditPost";
import RequestsWindow from "./RequestsWindow";
import Share from "./share";
import Myposts from "./Myposts";
import Chat from "./Chat";
import FeedbackForm from "./FeedbackForm";
//import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import HowItWorks from './HowItWorks';
import Contact from './Contact';
import HelpCenter from './HelpCenter';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/new-window" element={<NewWindow />} />
        <Route path="/new-window/new-window1" element={<NewWindow1 />} />
        <Route path="/Mainwindow" element={<MainWindow />} />
        <Route path="/MainWindow/ProfileSetting" element={<Profilesetting />} />
        <Route path="/FoodRequestingForm" element={<FoodRequestingForm />} />
        <Route path="/EditPost" element={<EditPost />} />
        <Route path="/requests/:id" element={<RequestsWindow />} />
        <Route path="/requests/" element={<RequestsWindow />} />
        <Route
          path="/FoodRequestingForm/:id"
          element={<FoodRequestingForm />}
        ></Route>
        <Route path="/share/:id" element={<Share />}></Route>
        <Route path="/FoodPostingForm" element={<FoodPostingForm/>}/>
        <Route path="/myposts" element={<Myposts />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
