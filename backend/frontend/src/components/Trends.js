import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import { getTrends } from "../actions/post.action";
import { NavLink } from "react-router-dom";

const Trends = () => {
  const posts = useSelector((state) => state.allPostReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const trendList = useSelector((state) => state.trendingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(posts[0])) {
      const postArray = Object.keys(posts).map((i) => posts[i]);
      let sortedArray = postArray.sort((a, b) => {
        return b.likers.length - a.likers.length;
      });
      sortedArray.length = 3;
      dispatch(getTrends(sortedArray));
    }
  }, [posts, dispatch]);

  return (
    <div className="trending-container">
      <h4>Trending</h4>
      <NavLink to="/trending">
        <ul>
          {trendList.length &&
            trendList.map((post) => {
              return (
                <li key={post._id}>
                  <div>
                    {post.picture && <img src={post.picture} alt="post-pic" />}
                    {post.video && (
                      <iframe
                        src={post.video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={post._id}
                      ></iframe>
                    )}
                    {isEmpty(post.picture) && isEmpty(post.video) && (
                      <img
                        src={
                          isEmpty(usersData[0])
                            ? usersData.users
                                .map((user) => {
                                  if (user._id === post.posterId)
                                    return user.picture;
                                  else return null;
                                })
                                .join("")
                            : null
                        }
                        alt="profil-pic"
                      />
                    )}
                  </div>
                  <div className="trend-content">
                    <p> {post.message} </p>
                    <span>Lire</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </NavLink>
    </div>
  );
};

export default Trends;
