function Projects(props) {
  return (
    <li>
      <img className="project-image" src={props.image} alt="teste" />
      <a href={props.link} target="_blank">
        <h4 className="project-name to-uppercase">{props.name}</h4>
      </a>
      <p className="project-skills to-uppercase fade">{props.skills}</p>
    </li>
  );
}

export default Projects;
