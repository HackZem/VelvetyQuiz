import { useState } from "react";
import Button from "../../UI/Button/Button";
import Container from "../../UI/Container/Container";
import AnswersResult from "../../components/Result/ResultNav/AnswersResult/AnswersResult";
import Info from "../../components/Result/ResultNav/Info/Info";
import "./ResultPage.scss";

const ResultPage = () => {
  const [actionSelected, setActionSelected] = useState(0);

  return (
    <div className="Result">
      <div className="Result-head">
        <h1>Тест</h1>
        <div className="Result-head-info">
          <div className="Result-head-info_questionsNumber">
            <Container>
              <div className="Result-head-info_questionsNumber-text">
                <span>3</span>questions
              </div>
            </Container>
          </div>
          <div className="Result-head-info_rating">
            <span>Rating</span>
            <Container>
              <div className="Result-head-info_rating-text">
                <span>6/12</span>score
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="Result-transition">
        <div className="Result-transition-actions">
          <Button className="Result-transition-actions-try">Try Again</Button>
          <nav>
            <Button
              className={`Result-transition-actions_answers ${
                actionSelected ? "" : "selected"
              }`}
              onClick={() => {
                setActionSelected(0);
              }}
            >
              Answers
            </Button>
            <Button
              className={`Result-transition-actions_info  ${
                actionSelected ? "selected" : ""
              }`}
              onClick={() => {
                setActionSelected(1);
              }}
            >
              Info
            </Button>
          </nav>
        </div>
        <hr />
      </div>
      {actionSelected ? <Info /> : <AnswersResult />}
    </div>
  );
};

export default ResultPage;
