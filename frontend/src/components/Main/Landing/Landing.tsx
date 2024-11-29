import { showModal } from "../../../redux/slices/modals";
import { useAppDispatch } from "../../../hooks";
import "./Landing.scss";
import Button from "../../../UI/Button/Button";

const Landing = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="mainPage-landing">
      <div className="mainPage-landing__item">
        <div className="mainPage-landing__item-info">
          <h2>Pass the tests</h2>
          <p>
            You can take any test created by others. Test your skills or
            knowledge with a simple test. Prepare for school or work assessments
            with a straightforward test.
          </p>
        </div>
      </div>
      <div className="mainPage-landing__item">
        <div className="mainPage-landing__item-info">
          <h2>Create a new test</h2>
          <p>
            You can create any test very easily and quickly. By publishing your
            test, you enable other people to take it.
          </p>
        </div>
      </div>

      <div className="mainPage-landing__item">
        <div className="mainPage-landing__item-info">
          <h2>Create an account</h2>
          <p>Create an account and start taking and creating tests.</p>
        </div>
        <Button
          className="mainPage-landing__item-info-button"
          onClick={() => dispatch(showModal("registrationModal"))}
        >
          Create new account
        </Button>
      </div>
    </div>
  );
};

export default Landing;
