import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="container py-4">
      <h1>About</h1>
      <button className="btn btn-outline-secondary" onClick={goHome}>
        Go home
      </button>
    </div>
  );
};

export default About;
