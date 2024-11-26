import "./QuizMenuPage.scss";
import ExitBtn from "../../UI/ExitBtn/ExitBtn";
import Header from "../../UI/Header/Header";
import Description from "../../components/QuizMenu/Description/Description";
import Content from "../../components/QuizMenu/Content/Content";
import { useParams } from "react-router-dom";

const QuizMenuPage = () => {
  const id = useParams();

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
