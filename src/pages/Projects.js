import useFadeIn from '../hooks/useFadeIn';

const Projects = () => {
  const fadeInStyle = useFadeIn(1000);

  return (
    <div className="container my-5 py-5" style={fadeInStyle}>
      <div className="mx-auto" style={{ maxWidth: "40rem" }}>
        <h2>Jfinance | yahoo-finance-api</h2>
        <p className="fs-4 d-none d-md-block">
          A Java library that provides a simple interface to interact with the Yahoo Finance API and retrieve stock data.
        </p>
        <a
          href="https://github.com/hitzseb/yahoo-finance-api"
          target="_blank"
          rel="noreferrer"
        >
          Check it out
        </a>
      </div>
    </div>
  );
};

export default Projects;
