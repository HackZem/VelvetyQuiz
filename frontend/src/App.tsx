import { Route, Routes } from "react-router-dom";
import QuizMenuPage from "./pages/QuizMenuPage/QuizMenuPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import MainPage from "./pages/MainPage/MainPage";
import QuizStartPage from "./pages/QuizStartPage/QuizStartPage";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { fetchCheckAuth } from "./redux/slices/auth";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchCheckAuth());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/quiz/menu/:id" element={<QuizMenuPage />} />
        <Route path="/quiz/start" element={<QuizStartPage />} />
        <Route path="/quiz/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
};

export default App;
