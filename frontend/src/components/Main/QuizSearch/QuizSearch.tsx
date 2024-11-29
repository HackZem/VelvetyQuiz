import { Pagination, PaginationItem } from "@mui/material";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import "./QuizSearch.scss";
import Input from "../../../UI/Input/Input";
import { FiSearch } from "react-icons/fi";
import SearchQuestion from "./SearchQuestions/SearchQuestion/SearchQuestion";

const QuizSearch = () => {
  return (
    <div className="QuizSearch">
      <div className="QuizSearch-search">
        <div className="QuizSearch-search-inputWrapper">
          <FiSearch id="searchIcon" />
          <Input />
        </div>
      </div>
      <hr />
      <div className="QuizSearch-content">
        <Pagination
          count={20}
          className="QuizSearch_pagination"
          showLastButton
          showFirstButton
          renderItem={(item) => (
            <PaginationItem
              slots={{
                last: MdKeyboardDoubleArrowRight,
                first: MdKeyboardDoubleArrowLeft,
              }}
              {...item}
            />
          )}
        />
        <div className="QuizSearch-content-tests">
          <SearchQuestion
            label={"ChanChinChanTest"}
            topic={"Chinesis"}
            author={"Author Chan"}
            date={new Date("2024-01-01")}
            questionCount={0}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizSearch;
