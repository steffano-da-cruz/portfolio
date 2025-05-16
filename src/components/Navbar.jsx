function Navbar(props) {
  return (
    <div className="navigation-bar container flex">
      <a className="mainLogo txt-md txt-heavier" href="#">
        {props.mainLogo}
      </a>
      <nav>
        <ul className="flex col-gap-bg">
          <li>
            <a href="https://github.com/steffano-da-cruz" target="_blank">
              <ion-icon className="logo txt-md" name={props.github}></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/steffano-da-cruz/"
              target="_blank"
            >
              <ion-icon
                className="logo txt-md"
                name={props.linkedin}
              ></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/steffano.cruz.2025/"
              target="_blank"
            >
              <ion-icon
                className="logo txt-md"
                name={props.facebook}
              ></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/steffano_cruz/" target="_blank">
              <ion-icon
                className="logo txt-md"
                name={props.instagram}
              ></ion-icon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
