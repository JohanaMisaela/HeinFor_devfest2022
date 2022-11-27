import React, { useContext } from "react";
import { UidContext } from "../components/appContext";
import LeftNav from "../components/leftNav";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";
import Log from "../components/Log";
import Trends from "../components/Trends";
import FriendsHint from "../components/Profil/FriendsHint";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
<<<<<<< HEAD
          <div className="wrapper">
            {/* <Trends /> */}
=======
          {/* <div className="wrapper">
            <Trends />
>>>>>>> 5d39f0fcf2f73fe60122aad921f8a7d203ab6291
            {uid && <FriendsHint />}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
