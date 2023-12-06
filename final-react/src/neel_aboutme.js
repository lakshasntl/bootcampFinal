import "./neel_aboutme.css";

function Neel() {
  return (
    <div class="container">
      <div class="profile-picture"></div>
      <div class="content">
        <h1 class="name">Neel Jay</h1>
        <p>
          Computer Science and Math student at{" "}
          <strong>University of Maryland</strong>
        </p>
        <h2 class="subheading">Favorite Movies</h2>
        <ul>
          <li>Arrival</li>
          <li>Pulp Fiction</li>
          <li>Princess Mononoke</li>
          <li>Hereditary</li>
        </ul>
        <h2 class="subheading">Hobbies</h2>
        <ul>
          <li>Chess</li>
          <li>Bouldering</li>
          <li>Origami (recently)</li>
          <li>reading about public transportation lmao</li>
          <li>sleeping</li>
        </ul>
      </div>
    </div>
  );
}

export default Neel;
