import { FC } from "react";
import ITestResponse from "../../../../models/responses/TestResponse";
import SearchQuestion from "./SearchQuestion/SearchQuestion";
import "./SearchQuestions.scss";

interface ISearchQuestionsProps {
  tests: ITestResponse[];
}

const SearchQuestions: FC<ISearchQuestionsProps> = ({ tests }) => {
  return tests.map((item) => {
    return (
      <div className="SearchQuestions" key={item._id}>
        <SearchQuestion
          title={item.name}
          topic={item.topic}
          author={item.author.username}
          date={item.date}
          questionCount={item.questions.length}
          testId={item._id}
        />
      </div>
    );
  });
};

export default SearchQuestions;
