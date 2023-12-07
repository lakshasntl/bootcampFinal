import React from "react";
// import "./sara_aboutme.css";

const AboutMe = () => {
  return (
    <div>
      <h1>About Me!</h1>
      <Name />
      <Movies />
      <Hobbies />
    </div>
  );
};

const Name = () => {
  return (
    <div>
      <h2>Sara Karnik</h2>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div className="container">
      <h2 style={{ color: "#ac3f98" }}>Hobbies:</h2>
      <ul>
        <li style={{ color: "#146d28" }}>
          I do a lot of things in my free time. Throughout high school, I was a
          coxswain on a crew team. I also love to watch sports(specifically the
          eagles). I also love to listen to music.
        </li>
      </ul>
      <div>
        <h3>My Hobby Pictures!</h3>
        <img
          src="pnra.png"
          alt="Rowing"
          style={{
            width: "300px",
            height: "200px",
            border: "2px solid #8D8585",
          }}
        />
        <img
          src="eagles.jpeg"
          alt="Eagles!"
          style={{
            width: "300px",
            height: "200px",
            border: "2px solid #8D8585",
          }}
        />
      </div>
    </div>
  );
};

const Movies = () => {
  return (
    <div className="container">
      <h2 style={{ color: "#ac3f98" }}>Favorite Movies:</h2>
      <ul>
        <li style={{ color: "#146d28" }}>
          I don't really watch movies, but I do watch TV shows a lot. If I were
          to choose movies, I would choose the divergent movies. But as of right
          now, I'm on season 14 of Grey's Anatomy!
        </li>
      </ul>
      <div>
        <h3>Movie/TV Shows!</h3>
        <img
          src="divergent .jpeg"
          alt="Divergent"
          style={{
            width: "300px",
            height: "200px",
            border: "2px solid #8D8585",
          }}
        />
        <img
          src="allegiant.jpeg"
          alt="Allegiant"
          style={{
            width: "300px",
            height: "200px",
            border: "2px solid #8D8585",
          }}
        />
        <img
          src="insurgent.jpeg"
          alt="Insurgent"
          style={{
            width: "300px",
            height: "200px",
            border: "2px solid #8D8585",
          }}
        />
        <img
          src="greys anatomy.jpeg"
          alt="Grey's Anatomy!"
          style={{
            width: "200px",
            height: "100px",
            border: "2px solid #8D8585",
          }}
        />
      </div>
    </div>
  );
};

export default AboutMe;
