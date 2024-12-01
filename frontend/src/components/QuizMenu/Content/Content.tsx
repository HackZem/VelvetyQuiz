import { useNavigate } from "react-router-dom";
import "./Content.scss";
import { FC } from "react";

interface IContentProps {
  title: string;
  description: string;
  testId: string;
}

const Content: FC<IContentProps> = ({ title, description, testId }) => {
  const navigate = useNavigate();
  return (
    <div className="QuizMenu-content">
      <div className="QuizMenu-content-texts">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="QuizMenu-content-control">
        <button
          className="QuizMenu-content-control__start"
          onClick={() => navigate(`/quiz/${testId}`)}
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
