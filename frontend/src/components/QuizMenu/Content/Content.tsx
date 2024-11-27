import { useNavigate } from "react-router-dom";
import "./Content.scss";

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className="QuizMenu-content">
      <div className="QuizMenu-content-texts">
        <h1>КР Фізика 9 класу Електроенергія</h1>
        <p>
          У характеристиці тесту визначено структуру тесту, час, відведений на
          його виконання, подано типи завдань, уміщених до тесту, наведено схему
          нарахування тестових балів та зазначено орієнтовний розподіл завдань
          відповідно до розділів / підрозділів Програми незалежного тестування.
        </p>
      </div>
      <div className="QuizMenu-content-control">
        <button
          className="QuizMenu-content-control__start"
          onClick={() => navigate("/quiz/6746ea774f6a2659b497c065")}
        >
          Start Test
        </button>
        <button className="QuizMenu-content-control__starthome" disabled={true}>
          Start Homework cooming soon...
        </button>
      </div>
    </div>
  );
};

export default Content;
