import { useNavigate } from "react-router-dom";
import "./Content.scss";
import { FC } from "react";
import SessionService from "../../../services/SessionService";

interface IContentProps {
  title: string;
  description: string;
  testId: string;
}

const Content: FC<IContentProps> = ({ title, description, testId }) => {
  const navigate = useNavigate();

  const fetchFindSession = async (testId: string) => {
    try {
      const info = await SessionService.findSessionByTest(testId);
      console.log(info, "info");
    } catch (err: any) {
      if (err.response.status === 404) {
        navigate(`/quiz/${testId}`);
      }
    }
  };

  return (
    <div className="QuizMenu-content">
      <div className="QuizMenu-content-texts">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="QuizMenu-content-control">
        <button
          className="QuizMenu-content-control__start"
          onClick={() => fetchFindSession(testId)}
        >
          Start Test
        </button>
        <button className="QuizMenu-content-control__starthome" disabled={true}>
          Start Homework cooming soon...
        </button>
      </div>
    </div>
  );
};

export default Content;
