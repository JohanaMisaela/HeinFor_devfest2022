import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const GET_USER_ERRORS = "GET_USER_ERRORS";

export const getUser = (uid) => {
  // disptch => ce qui est renvoyer aux REDUCER à stocker
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/getUser/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/user/uploadImage`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_USER_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_USER_ERRORS, payload: "" });

          return axios
            .get(`${process.env.REACT_APP_API_URL}api/user/getUser/${id}`)
            .then((res) => {
              dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
            });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (userId, bio) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/updateUser/` + userId,
      data: { bio },
    })
      .then((res) => {
        dispatch({ type: UPDATE_BIO, payload: bio });
      })
      .catch((err) => console.log(err));
  };
};

export const followUser = (id, idfollower) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/post/follow-event/` + id,
      data: { idfollower },
    })
      .then((res) => {
        dispatch({ type: FOLLOW_USER, payload: { idfollower } });
      })
      .catch((err) => console.log(err));
  };
};

export const unfollowUser = (id, idfollower) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/post/unfollow-event/` + id,
      data: { idfollower },
    })
      .then((res) => {
        dispatch({ type: UNFOLLOW_USER, payload: { idfollower } });
      })
      .catch((err) => console.log(err));
  };
};
