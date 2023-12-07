import "./jessica_aboutme.css";

const Jessica = () => (
  <>
    <head>
      <title>About Me</title>
    </head>

    <body>
      <h1 className="about-header">About Jessica</h1>
      <p className="about-info">
        Hi guys! I tried my best to make this as not ugly as possible. Hope you
        like it.
      </p>
      <h2 className="subject-header">Favorite Movies</h2>
      <p>
        {" "}
        I am chill with anything except for horror! I don't really have any
        favorites, but here are a few that I've liked recently:
      </p>
      <div className="image-container">
        <img
          src={`jessica-images/no-hard-feelings.png`}
          width={200}
          height={300}
          alt="No Hard Feelings Movie Poster"
        />
        <img
          src={`jessica-images/bottoms.jpg`}
          width={200}
          height={300}
          alt="Bottoms Movie Poster"
        />
      </div>

      <h2 className="subject-header">Hobbies</h2>
      <p>
        I love to buy things. I have invested so much time into my Rilakkuma
        collection. This picture is only about 1/3 of the whole collection.{" "}
      </p>
      <div className="image-container">
        <img
          src={`jessica-images/collection.jpg`}
          width={300}
          height={300}
          alt="Rilakkuma Collection"
        />
      </div>

      <p>
        I also love scrolling on Twitter and seeing what is going on with pop
        culture. I wonder what Joe Jonas did to Sophie Turner... Nick is my
        favorite, anyway (I heard he's also horrible).
      </p>

      <h2 className="subject-header">Top Music Faves Currently</h2>
      <p>
        I decided to just include my Receiptify, which compiles your current top
        ten songs on Spotify.
      </p>
      <div className="image-container">
        <img
          src={`jessica-images/top_tracks_short_term.png`}
          width={255}
          height={618}
          alt="Receiptify"
        />
      </div>
    </body>
  </>
);

export default Jessica;
