import useFadeIn from '../hooks/useFadeIn';

const Skills = () => {
  const fadeInStyle = useFadeIn(1000);

  return (
    <div className="container my-5 py-5 text-center" style={fadeInStyle}>
      <div className="mx-auto" style={{ maxWidth: "45rem" }}>
        <img
          className="img-fluid icon"
          src="/images/java-original.svg"
          alt="Java"
          title="Java"
        />
        <img
          className="img-fluid icon"
          src="/images/spring.svg"
          alt="Spring"
          title="Spring Boot"
        />
        <img
          className="img-fluid icon"
          src="/images/javascript-js.svg"
          alt="JavaScript"
          title="JavaScript"
        />
        <img
          className="img-fluid icon"
          src="/images/react.svg"
          alt="React"
          title="React"
        />
        <img
          className="img-fluid icon"
          src="/images/file-type-css.svg"
          alt="CSS"
          title="CSS"
        />
        <img
          className="img-fluid icon"
          src="/images/file-type-html.svg"
          alt="HTML"
          title="HTML"
        />
        <img
          className="img-fluid icon"
          src="/images/bootstrap.svg"
          alt="Bootstrap"
          title="Bootstrap"
        />
        <img
          className="img-fluid icon"
          src="/images/file-type-mysql.svg"
          alt="MySQL"
          title="MySQL"
        />
      </div>
    </div>
  );
};

export default Skills;
