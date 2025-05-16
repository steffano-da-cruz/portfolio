import heroImg from "../assets/images/steffano-photo.jpg";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import { skillsInf, projectsInf } from "../index.jsx";

function Main() {
  return (
    <main className="portfolio-main">
      <section className="hero-section section-padding">
        <div className="hero-container container grid">
          <div className="hero-info-box">
            <h1 className="hero-title ln-ht-md">
              Nice to meet you!
              <br />
              I'm <span>Steffano da Cruz</span>.
            </h1>
            <p className="hero-description txt-sm ln-ht-bg fade mar-btm-bg ">
              I'm a web developer looking for an opportunity at the full-stack
              development area in order to apply my skills and knowledges in
              HTML, CSS, JavaScript, React, TypeScript, Node.js and SQL
              (PostgreSQL).
            </p>
            <a className="contact-button" href="#contact-section">
              Contact me
            </a>
          </div>
          <div className="hero-image-box">
            <img className="hero-image" src={heroImg} alt="Steffano Photo" />
          </div>
        </div>
        <hr className="container" />
      </section>

      <section className="skills-section section-padding">
        <div className="skills-container container">
          <ul className="skills-list grid grid-3-cols">
            {skillsInf.map((skillInfo) => (
              <Skills
                key={skillInfo.id}
                id={skillInfo.id}
                skillName={skillInfo.name}
                skillLevel={skillInfo.level}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className="projects-section section-padding">
        <div className="projects-container container">
          <div className="projects-title-box flex mar-btm-bg">
            <h2 className="projects-title txt-hg">Projects</h2>
            <a className="contact-button" href="#contact-section">
              Contact me
            </a>
          </div>
          <ul className="projects-list grid grid-2-cols col-gap-md row-gap-hg">
            {projectsInf.map((projectInfo) => (
              <Projects
                key={projectInfo.id}
                id={projectInfo.id}
                image={projectInfo.image}
                name={projectInfo.name}
                link={projectInfo.link}
                skills={projectInfo.skills}
              />
            ))}
          </ul>
        </div>
      </section>

      <section id="contact-section" className="contact-section bg-color">
        <div className="contact-container container grid grid-2-cols">
          <div className="contact-title-box">
            <h2 className="contact-title txt-hg mar-btm-md">Contact</h2>
            <p className="contact-description txt-sm ln-ht-bg fade">
              I would love to hear about your opinion and how I could improve.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <form
            className="contact-form-box flex flex-dir-col row-gap-bg"
            netlify
          >
            <input
              className="contact-input-name"
              type="text"
              placeholder="NAME"
              name="Name:"
              required
            ></input>
            <input
              className="contact-input-email"
              type="email"
              placeholder="EMAIL"
              name="Email:"
              required
            ></input>
            <input
              className="contact-input-message"
              type="text"
              placeholder="MESSAGE"
              name="Message:"
            ></input>
            <button className="message-button" type="submit">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Main;
