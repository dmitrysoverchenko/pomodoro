import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="header">Pomodoro</h1>
        <nav>
          <ul className="header-list">
            <li>
              <Link className="header-item" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="header-item" to="/history">
                History
              </Link>
            </li>
            <li>
              <Link className="header-item" to="/overview">
                Overview
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
