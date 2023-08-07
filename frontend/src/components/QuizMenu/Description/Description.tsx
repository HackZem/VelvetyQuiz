import "./Description.scss";

const Description = () => {
  return (
    <ul className="QuizMenu-description">
      <ol>
        Author: <span>Tyhon</span>
      </ol>
      <ol>
        Created: <span>08.11.2023</span>
      </ol>
      <ol>
        Subject: <span>Math, 10 class</span>
      </ol>
      <ol>
        Status: <span>Public</span>
      </ol>
      <ol>
        Completed: <span>10</span>
      </ol>
    </ul>
  );
};

export default Description;
