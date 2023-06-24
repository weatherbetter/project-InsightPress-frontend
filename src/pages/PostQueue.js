import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatePost } from "../store.js";

const article_category = {
  0: "정치",
  1: "경제",
};

function PostQueue() {
  const [requestQueues, setRequestQueues] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BOARD_API_URL}/articles/customer-requests`, {
        headers: { Authorization: sessionStorage.getItem("JWT_TOKEN") },
      })
      .then((response) => {
        setRequestQueues(response.data.body);
        setIsLoggedIn(true); // Set isLoggedIn to true if request is successful
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 403) {
          // If the user is not logged in, redirect them to the login page.
          navigate("/login");
        } else {
          alert(error.response.message);
          navigate("/login");
        }
      });
  }, []);

  const handleUpdate = (resQueue) => {
    // Define handleUpdate logic
    console.log("Update action triggered");
    // Additional logic for handling the update action
  };

  const handleDelete = (requestId) => {
    // Define handleDelete logic
    console.log("Delete action triggered");
    // Additional logic for handling the delete action
  };

  if (!isLoggedIn) {
    // If the user is not logged in, show a message prompting them to log in.
    return <div>Please Login to See This Page.</div>;
  }

  return (
    <>
      <section className="category-section">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header d-flex justify-content-between align-items-center mb-5">
            <h2>Post Queue</h2>
            <div></div>
          </div>

          <div className="row">
            <div className="col-md-12">
              {requestQueues.length === 0 && <div>데이터가 없습니다</div>}
              {requestQueues.map((resQueue, index) => (
                <div className="post-entry-1 border-bottom" key={index}>
                  <div className="post-meta">
                    <span className="date">{article_category[resQueue.category]}</span>{" "}
                    <span className="mx-1">•</span>{" "}
                    <span>{resQueue.created_at}</span>{" "}
                    <span className="mx-1">•</span>{" "}
                    <span>{resQueue.user_id}</span>
                  </div>
                  <h2 className="mb-2">
                    <a href={resQueue.source_url} target="_blank">
                      {resQueue.source_url}
                    </a>
                  </h2>
                  <span className="author mb-3 d-block">
                    <button
                      onClick={() => handleUpdate(resQueue)}
                      type="button"
                      className="btn btn-outline-secondary"
                    >
                      수정
                    </button>{" "}
                    |{" "}
                    <button
                      onClick={() => handleDelete(resQueue.request_id)}
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      삭제
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostQueue;
