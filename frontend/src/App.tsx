import { Route, Routes } from "react-router-dom";
import QuizMenuPage from "./pages/QuizMenuPage/QuizMenuPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import MainPage from "./pages/MainPage/MainPage";
import QuizStartPage from "./pages/QuizStartPage/QuizStartPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/menu" element={<QuizMenuPage />} />
        <Route path="/quiz/start" element={<QuizStartPage />} />
        <Route path="/quiz/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
};

export default App;
