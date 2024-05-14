import { AiOutlineCaretDown } from "react-icons/ai";
import "./Header.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(false);

  return (
    <header>
      <div className="header-menu">
        <Link className="header-menu-logo" to="/">
          <img src="/logo.png" alt="logo"></img>
        </Link>
        <nav>
          <a className="header-nav__item">All tests</a>
          <a className="header-nav__item">My tests</a>
          <Button className="header-nav__item">New test</Button>
        </nav>
      </div>
      {isLogin ? (
        <div className="header-avatar">
          <a>
            <img src="/person-svgrepo-com.svg" alt="avatar"></img>
          </a>
        </div>
      ) : (
        <div className="header-auth">
          <Button className="header-auth-login">Login</Button>
          <Button className="header-auth-registration">Registration</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
