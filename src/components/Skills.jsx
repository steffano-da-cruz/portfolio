function Skills(props) {
  return (
    <li>
      <h3 className="skill-name">{props.skillName}</h3>
      <p className="skill-level fade">{props.skillLevel}</p>
    </li>
  );
}

export default Skills;
