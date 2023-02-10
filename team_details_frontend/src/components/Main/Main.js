import React from "react";
import {combineReducer} from "../../redux/reducers/rootReducer";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home/Home.js";
import Team from "../Team/Team.js";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import Member from "../Member/Member.js";
import AddMember from "../AddMember/AddMember.js";
import EditMember from "../EditMember/EditMember.js";
import {createStore} from "redux";


const Main = () => {
  const reducerStore = createStore(combineReducer);
  return (
    <Router>
      <Provider store={reducerStore}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/member/:id" element={<Member />} />
          <Route path="/add_member" element={<AddMember />} />
          <Route path="/member/:id/edit" element={<EditMember />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  );
};

export default Main;
