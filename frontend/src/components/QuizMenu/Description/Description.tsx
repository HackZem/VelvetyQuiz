import "./Description.scss";

const Description = () => {
  return (
    <ul className="QuizMenu-description">
      <li>
        Author: <span>Tyhon</span>
      </li>
      <li>
        Created: <span>08.11.2023</span>
      </li>
      <li>
        Topic: <span>Math, 10 class</span>
      </li>
      <li>
        Status: <span>Public</span>
      </li>
      <li>
        Completed: <span>10</span>
      </li>
    </ul>
  );
};

export default Description;
