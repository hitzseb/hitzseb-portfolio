import useFadeIn from '../hooks/useFadeIn';

const Home = () => {
  const fadeInStyle = useFadeIn(1000);

  return (
    <div className="container my-5 py-5" style={fadeInStyle}>
      <div className="mx-auto" style={{ maxWidth: "40rem" }}>
        <p className="fs-2">Hi there, 👋</p>
        <p className="fs-2">I'm Sebastian Hitz, a Fullstack Web Developer.</p>
      </div>
    </div>
  );
};

export default Home;
