import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import "./post.css";

function AddPost() {
  const [file, setFile] = useState();
  const [postPicture, setPostPisture] = useState(null);
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [video, setVideo] = useState(null);
  const handlePicture = (e) => {
    // prevision d'img
    setPostPisture(URL.createObjectURL(e.target.files[0]));
    // envoyer du file vers bd
    setFile(e.target.files[0]);
    console.log(file);
  };
  const cancelPicture = () => {
    setPostPisture("");
    setFile("");
  };

  const cancelPost = () => {
    setText("");
    setPostPisture("");
    setFile("");
  };

  const handleSubmit = async () => {
    if (text || postPicture || video) {
      const data = new FormData();
      //   data.append("posterId", userData._id);
      data.append("type", type);
      data.append("text", text);
      if (file) data.append("file", file);
      data.append("video", video);

      const res = await axios({
        method: "POST",
        url: `http://localhost:5000/api/post`,
        data: data,
      });
      cancelPost();
      console.log(res.status);
      console.log(res.data);
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Posted",
          showConfirmButton: true,
        });
      }
      if (res.status === 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Veuillez réessayer",
        });
      }
    } else {
      alert("Veuillez entrer un text !");
    }
  };

  return (
    <div className="card my-4 mycard mx-auto mt-5" data-aos="fade-up">
      <div className="card-header">
        <div className="row">
          <div className="col-md-1 col-xs-5 mx-2">
            <a>
              <img src="" alt="photo" />
            </a>
          </div>
          <div className="col-sm-10">
            <div className="name">
              <a className="text-dark">RANDRIAMANANTENA Lovamanitra Mario</a>
              <br />
              <a
                href="mailto: lovamanitramario@gmail.com"
                className="text-secondary text-decoration-none"
              >
                lovamanitramario@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card-body p-4">
          <h4>Créer une publication</h4>
          <div>
            <select
              name="type"
              type="string"
              id="form2Example17"
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Type de publication</option>
              <option value="Information">Information</option>
              <option value="Sensibilisation">Sensibilisation</option>
              <option value="Normal">Partage</option>
            </select>
          </div>
        </div>
        <div className="card-body p-4">
          <textarea
            cols="60"
            rows="3"
            className="form-control"
            placeholder="Qu'en pensez vous..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="card-body p-4">
          {postPicture && (
            <iframe
              src={postPicture}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              width={100 + "%"}
              height={260 + "px"}
              //   allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="card-body p-4">
          <input
            type="file"
            id="file-upload"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handlePicture(e)}
          />
          {file && (
            <button className="btn btn-danger" onClick={cancelPicture}>
              cancel photo
            </button>
          )}
        </div>
        <div className="text-center">
          <hr />
        </div>
        {(type || text) && (
          <>
            <div className="row comment px-4 text-center">
              <p className="btn btn-danger" onClick={cancelPost}>
                Cancel{" "}
              </p>
            </div>

            <div className="row comment px-4 text-center">
              <button className="btn btn-primary" type="submit">
                {" "}
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default AddPost;
