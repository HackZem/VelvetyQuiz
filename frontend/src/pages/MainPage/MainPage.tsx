import { Pagination, PaginationItem } from "@mui/material";
import Header from "../../UI/Header/Header";
import LoginModal from "../../components/Auth/LoginModal/LoginModal";
import RegistrationModal from "../../components/Auth/RegistrationModal/RegistrationModal";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "./MainPage.scss";
import Landing from "../../components/Main/Landing/Landing";
import QuizSearch from "../../components/Main/QuizSearch/QuizSearch";

const MainPage = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <div className="mainPage">
      <Header />
      {isAuth ? <QuizSearch /> : <Landing />}
      <RegistrationModal />
      <LoginModal />
    </div>
  );
};

export default MainPage;
