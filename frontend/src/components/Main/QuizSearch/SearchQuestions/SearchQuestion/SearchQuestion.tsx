import { FC } from "react";
import Container from "../../../../../UI/Container/Container";
import "./SearchQuestion.scss";
import Button from "../../../../../UI/Button/Button";

interface ISearchQuestionProps {
  label: string;
  topic: string;
  author: string;
  date: Date;
  questionCount: number;
}

const SearchQuestion: FC<ISearchQuestionProps> = ({
  author,
  date,
  label,
  questionCount,
  topic,
}) => {
  return (
    <Container className="SearchQuestion">
      <div className="SearchQuestion-head">
        <h3>{label}</h3>
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
            <li className="SearchQuestion-body-info-author">{author}</li>
          </ul>
          <Button>Learn more</Button>
        </div>
        <span className="SearchQuestion-body-date">{date.toDateString()}</span>
      </div>
    </Container>
  );
};

export default SearchQuestion;
