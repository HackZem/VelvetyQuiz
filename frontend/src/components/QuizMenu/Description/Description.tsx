import { FC } from "react";
import "./Description.scss";

interface IDescriptionProps {
  author: string;
  createdAt: string;
  topic: string;
  status: string;
  complated: number;
}

const Description: FC<IDescriptionProps> = ({
  author,
  complated,
  createdAt,
  status,
  topic,
}) => {
  return (
    <ul className="QuizMenu-description">
      <li>
        Author: <span>{author}</span>
      </li>
      <li>
        Created: <span>{new Date(createdAt).toLocaleDateString()}</span>
      </li>
      <li>
        Topic: <span>{topic}</span>
      </li>
      <li>
        Status: <span>{status}</span>
      </li>
      <li>
        Completed: <span>{complated}</span>
      </li>
    </ul>
  );
};

export default Description;
