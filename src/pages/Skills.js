import useFadeIn from '../hooks/useFadeIn';

const Skills = () => {
  const fadeInStyle = useFadeIn(1000);
  const skills = [
    { src: "/images/java.svg", name: "Java" },
    { src: "/images/php.svg", name: "PHP" },
    { src: "/images/javascript.svg", name: "JavaScript" },
    { src: "/images/html.svg", name: "HTML" },
    { src: "/images/css.svg", name: "CSS" },
    { src: "/images/mysql.svg", name: "MySQL" },
    { src: "/images/spring.svg", name: "Spring" },
    { src: "/images/laravel.svg", name: "Laravel" },
    { src: "/images/react.svg", name: "React" },
    { src: "/images/wordpress.svg", name: "Wordpress" },
    { src: "/images/bootstrap.svg", name: "Bootstrap" },
    { src: "/images/git.svg", name: "Git" }
  ];

  return (
    <div className="container my-5 py-5 text-center" style={fadeInStyle}>
      <div className="mx-auto" style={{ maxWidth: "45rem" }}>
        {skills.map((skill, index) => (
          <img
            key={index}
            className="img-fluid icon"
            src={skill.src}
            alt={skill.name}
            title={skill.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;