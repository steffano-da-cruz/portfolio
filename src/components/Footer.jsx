import Navbar from "./Navbar.jsx";
import navbarInf from "../index.jsx";

function Footer() {
  return (
    <footer className="portfolio-footer bg-color">
      <hr className="container" />
      {navbarInf.map((info) => (
        <Navbar
          key={info.id}
          mainLogo={info.mainLogo}
          github={info.github}
          linkedin={info.linkedin}
          facebook={info.facebook}
          instagram={info.instagram}
        />
      ))}
    </footer>
  );
}

export default Footer;
