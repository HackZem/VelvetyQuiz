import "./Content.scss";

const Content = () => {
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
        <button className="QuizMenu-content-control__start">Start Test</button>
        <button className="QuizMenu-content-control__starthome" disabled={true}>
          Start Homework cooming soon...
        </button>
      </div>
    </div>
  );
};

export default Content;
