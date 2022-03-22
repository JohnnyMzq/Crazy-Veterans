import React from "react";

import { useNavigate, Link } from "react-router-dom";

import { images } from "../../constants";
import "./Home.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h2">Welcome to Crazy Veterans FH2!</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          We are a community of enthusiasts dedicated to the Battlefield 2
          modification "Forgotten Hope 2". Considering its age, the mod still
          looks beautiful and is still being actively developed, even almost 15
          years after its release. One can truly say the game is made with
          passion. Try it now and enjoy... <br/>-plenty of beautifully designed maps
          with lots of lovely details and an amount of vehicles that even modern
          bf titles don't offer <br/>-a well defined balance between casulity and
          realism that gives this mod a unique flavour among the whole
          battlefield genre <br/>-a very rewarding gameplay experience due to the
          emphasis on teamplay Not to forget that it's completely free and runs
          on almost any PC. So join us now, we gladly meet you on the
          battlefield and on our discord server
        </p>
        <a href="http://forgottenhope.warumdarum.de/" target="_blank">
          <button type="button" className="button__fh2">
            Explore The Mod
          </button>
        </a>
      </div>
      <div className="app__wrapper_img">
        <img src={images.bg} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
