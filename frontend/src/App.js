import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

import "./App.css";

import NewWindow from "./NewWindow";
import NewWindow1 from "./NewWindow1";
import MainWindow from "./MainWindow";
import Profilesetting from "./ProfileSetting";
import FoodRequestingForm from "./FoodRequestingForm";
import EditPost from "./EditPost";
import RequestsWindow from "./RequestsWindow";
import Share from "./share";
import Mypost from "./Myposts";
import Myposts from "./Myposts";
import Chat from "./Chat";

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

        <Route path="/myposts" element={<Myposts />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
