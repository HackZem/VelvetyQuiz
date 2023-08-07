import { AiOutlineCaretDown } from "react-icons/ai";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-menu">
        <a className="header-menu-logo">
          <img src="/logo.png" alt="logo"></img>
        </a>
        <nav>
          <div className="header-nav__test">
            <a className="header-nav__test">Test</a>
            <AiOutlineCaretDown size={18} />
          </div>
          <a className="header-nav__profile">Profile</a>
          <a className="header-nav__aboutProject">AboutProject</a>
        </nav>
      </div>
      <div className="header-avatar">
        <a>
          <img src="/avatar.png" alt="avatar"></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
