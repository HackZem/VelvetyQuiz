import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import LoginModal from "../../components/Auth/LoginModal/LoginModal";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="mainPage">
      <Header />
      <div className="mainPage-content">
        <div className="mainPage-content__item">
          <div className="mainPage-content__item-info">
            <h2>Pass the tests</h2>
            <p>
              You can take any test created by others. Test your skills or
              knowledge with a simple test. Prepare for school or work
              assessments with a straightforward test.
            </p>
          </div>
        </div>
        <div className="mainPage-content__item">
          <div className="mainPage-content__item-info">
            <h2>Create a new test</h2>
            <p>
              You can create any test very easily and quickly. By publishing
              your test, you enable other people to take it.
            </p>
          </div>
        </div>
        <div className="mainPage-content__item">
          <div className="mainPage-content__item-info">
            <h2>Create an account</h2>
            <p>Create an account and start taking and creating tests.</p>
          </div>
          <Button className="mainPage-content__item-info-button">
            Create new account
          </Button>
        </div>
      </div>
      <LoginModal />
    </div>
  );
};

export default MainPage;
