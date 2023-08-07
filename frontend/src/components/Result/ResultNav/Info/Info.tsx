import "./Info.scss";
import EllipsePrecision from "./EllipsePrecision/EllipsePrecision";
import Container from "../../../../UI/Container/Container";

const Info = () => {
  return (
    <div className="Result-info">
      <EllipsePrecision score={6} maxScore={12} />
      <div className="Result-info-body">
        <div className="Result-info-body_item">
          <span>Total time</span>
          <Container>123s</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Average time / question</span>
          <Container>11,2s</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Exact score</span>
          <Container>6</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Correct</span>
          <Container>6</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Wrong</span>
          <Container>6</Container>
        </div>
        <div className="Result-info-body_item">
          <span>Misses</span>
          <Container>0</Container>
        </div>
      </div>
    </div>
  );
};

export default Info;
