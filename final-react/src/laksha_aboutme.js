import React from "react";
//import { BrowserRouter } from "react-router-dom";
import "./laksha_aboutme.css";

const Laksha = () => {
  const favoriteMovies = [
    { name: "The Lion King" },
    { name: "Crazy Stupid Love" },
    { name: "Hunger Games Series" },
    { name: "Shrek" },
    // Add more movies as needed
  ];

  const favoriteShows = [
    { name: "Community" },
    { name: "Peaky Blinders" },
    { name: "NEW GIRL" },
    { name: "Gilmore Girls" },
    { name: "The Crown" },

    // Add more shows as needed
  ];

  const stuff = [
    { name: "Pumpkin Pie" },
    { name: "Mac n Cheese" },
    { name: "Black Friday Shopping" },
    { name: "Holiday themed drinks & food" },

    // Add more shows as needed
  ];

  return (
    <div>
      <h1 id="pageTitle">About Me - Laksha</h1>
      <section movies>
        <ul className="movie-list">
          <h1 id="movieTitle">Favorite Movies</h1>
          {favoriteMovies.map((movies) => (
            <p>{movies.name}</p>
          ))}
        </ul>
      </section>

      <section shows>
        <ul className="shows-list">
          <h1 id="showTitle">Favorite Shows at the Moment</h1>
          {favoriteShows.map((shows) => (
            <p>{shows.name}</p>
          ))}
        </ul>
      </section>

      <section thanksgiving>
        <ul className="thanksgiving-list">
          <h1 id="stuffTitle">Best Thanksgiving Stuff</h1>
          {stuff.map((items) => (
            <p>{items.name}</p>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Laksha;
