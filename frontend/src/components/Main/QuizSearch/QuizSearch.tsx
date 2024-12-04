import { Pagination, PaginationItem } from "@mui/material";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import "./QuizSearch.scss";
import Input from "../../../UI/Input/Input";
import { FiSearch } from "react-icons/fi";
import SearchQuestions from "./SearchQuestions/SearchQuestions";
import { useEffect, useState } from "react";
import ITestResponse from "../../../models/responses/TestResponse";
import TestService from "../../../services/TestService";
import useDebounce from "../../../hooks/useDebounce";

const QuizSearch = () => {
  const [tests, setTests] = useState<ITestResponse[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const debounceSearch = useDebounce(query, 500);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const { data } = await TestService.getTests(page, 5, query);

        setTests(data.tests);
        setPage(data.page);
        setMaxPages(data.maxPages);
      } catch (err) {
        setTests([]);
      }
    };
    fetchTests();
  }, [page, debounceSearch]);

  return (
    <div className="QuizSearch">
      <div className="QuizSearch-search">
        <div className="QuizSearch-search-inputWrapper">
          <FiSearch id="searchIcon" />
          <Input onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>
      <hr />
      <div className="QuizSearch-content">
        <Pagination
          count={maxPages}
          key={maxPages}
          onChange={(_, page) => setPage(page)}
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
        <SearchQuestions tests={tests} />
      </div>
    </div>
  );
};

export default QuizSearch;
