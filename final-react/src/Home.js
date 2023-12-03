import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
  <>
    <h1>H4I Bootcamp Team 4</h1>
    <h1>Meet the team!</h1>
    <ul>
      <li>
        <Link to="/laksha">laksha page</Link>
      </li>
      <li>
        <Link to="/jessica">jessica</Link>
      </li>
    </ul>
  </>
);

export default Home;
