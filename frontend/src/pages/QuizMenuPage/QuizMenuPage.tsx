import "./QuizMenuPage.scss";
import ExitBtn from "../../UI/ExitBtn/ExitBtn";
import Header from "../../UI/Header/Header";
import Description from "../../components/QuizMenu/Description/Description";
import Content from "../../components/QuizMenu/Content/Content";

const QuizMenuPage = () => {
  return (
    <>
      <Header />
      <div className="QuizMenu">
        <Content />
        <Description />
        <ExitBtn className="QuizMenu-exit" />
      </div>
    </>
  );
};

export default QuizMenuPage;
