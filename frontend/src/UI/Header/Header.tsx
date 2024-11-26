import "./Header.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { showModal } from "../../redux/slices/modals";

const Header = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

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
      {isAuth ? (
        <div className="header-avatar">
          <a>
            <img src="/person-svgrepo-com.svg" alt="avatar"></img>
          </a>
        </div>
      ) : (
        <div className="header-auth">
          <Button
            className="header-auth-login"
            onClick={() => dispatch(showModal("loginModal"))}
          >
            Login
          </Button>
          <Button
            className="header-auth-registration"
            onClick={() => dispatch(showModal("registrationModal"))}
          >
            Registration
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
