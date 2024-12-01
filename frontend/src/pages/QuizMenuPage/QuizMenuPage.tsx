import "./QuizMenuPage.scss";
import ExitBtn from "../../UI/ExitBtn/ExitBtn";
import Header from "../../UI/Header/Header";
import Description from "../../components/QuizMenu/Description/Description";
import Content from "../../components/QuizMenu/Content/Content";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TestService from "../../services/TestService";
import ITestResponse from "../../models/responses/TestResponse";

const QuizMenuPage = () => {
  const { id } = useParams();
  const [
    { name, description, author, topic, status, completed, date },
    setTest,
  ] = useState<ITestResponse | any>({});

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const { data } = await TestService.getTest(id!);
        console.log(data);
        setTest(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTests();
  }, []);

  return (
    <>
      <Header />
      <div className="QuizMenu">
        <Content title={name} description={description} testId={id!} />
        <Description
          author={author?.username}
          createdAt={date}
          topic={topic}
          status={status}
          complated={completed}
        />
        <ExitBtn className="QuizMenu-exit" />
      </div>
    </>
  );
};

export default QuizMenuPage;
