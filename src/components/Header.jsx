import Navbar from "./Navbar.jsx";
import navbarInf from "../index.jsx";

function Header() {
  return (
    <header className="portfolio-header">
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
    </header>
  );
}

export default Header;
