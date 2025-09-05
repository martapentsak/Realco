import { CiSearch } from "react-icons/ci";

export const FindYourHome = () => {
  return (
    <div className="find-home">
      <div className="find-home__left">
        <section className="find-home__content">
          <span className="highlight">Find your dream place</span>
          <h1 className="find-home__title">
            Find house for your family in minutes
          </h1>
          <p className="find-home__description">
            Aenean sodales mauris quis tellus facilisis, vel mattis magna.
            Interdum curabitur eget aliquam elit in mauris purus.
          </p>
          <form className="find-home__form">
            <div className="find-home__input-wrapper">
              <CiSearch className="find-home__input-icon" />
              <input
                type="text"
                placeholder="Search"
                className="find-home__input"
              />
            </div>
            <button className="btn-primary">Search</button>
          </form>
        </section>
        <img
          src="https://cdn.prod.website-files.com/6273e45912905c85aba8dc75/627bd6cfaa72de76e8b68978_Neutral%20300%20Top%20Left.svg"
          className="find-home__top-left-img"
        />
        <img
          src="https://cdn.prod.website-files.com/6273e45912905c85aba8dc75/627bd6cfaa72de76e8b68978_Neutral%20300%20Top%20Left.svg"
          className="find-home__botton-right-img"
        />
      </div>

      <div className="find-home__main-img">
        <img src="https://assets-global.website-files.com/6273e45912905c85aba8dc75/62790f4c5b0309153c7d8e38_x3mSC1WnWhc.jpg" />
      </div>
    </div>
  );
};



