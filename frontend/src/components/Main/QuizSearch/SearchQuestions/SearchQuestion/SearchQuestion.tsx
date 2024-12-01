import { FC } from "react";
import Container from "../../../../../UI/Container/Container";
import "./SearchQuestion.scss";
import Button from "../../../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

interface ISearchQuestionProps {
  title: string;
  topic: string;
  author: string;
  createdAt: string;
  questionCount: number;
  testId: string;
}

const SearchQuestion: FC<ISearchQuestionProps> = ({
  author,
  createdAt,
  title,
  questionCount,
  topic,
  testId,
}) => {
  const navigate = useNavigate();

  return (
    <Container className="SearchQuestion">
      <div className="SearchQuestion-head">
        <h3>{title}</h3>
        <div className="SearchQuestion-head-total">
          Total questions:
          <span>{questionCount}</span>
        </div>
      </div>
      <hr />
      <div className="SearchQuestion-body">
        <div className="SearchQuestion-body-info">
          <ul>
            <li className="SearchQuestion-body-info-topic">{topic}</li>
            <li className="SearchQuestion-body-info-author">
              <a href="">{author}</a>
            </li>
          </ul>
          <Button
            onClick={() => {
              navigate(`/quiz/menu/${testId}`);
            }}
          >
            Open
          </Button>
        </div>
        <span className="SearchQuestion-body-date">
          {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
    </Container>
  );
};

export default SearchQuestion;
