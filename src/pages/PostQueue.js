import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatePost } from "../store.js";
import { useNavigate } from "react-router-dom";

const article_category = {
    0: "정치",
    1: "경제",
};

function PostQueue() {
    const [requestQueues, setRequestQueues] = useState([
    ]);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const handlerDelete = (id) => {
        axios
            .delete(
                `${process.env.REACT_APP_BOARD_API_URL}/articles/customer-requests/${id}`
            )
            .then((res) => {
                requestQueues.splice(
                    requestQueues.findIndex((item) => item.id === id),
                    1
                );
                setRequestQueues([...requestQueues]);
            })
            .catch((err) => {});
    };

    const handlerUpdate = (resQueue) => {
        dispatch(setUpdatePost(resQueue));
        navigate("/updatepost");
    };

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BOARD_API_URL}/articles/customer-requests`
            )
            .then((response) => {
                setRequestQueues(JSON.parse(response.data.body));
            })
            .catch((error) => {});
    }, []);

    return (
        <>
            <section className="category-section">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div className="section-header d-flex justify-content-between align-items-center mb-5">
                        <h2>Post Queue</h2>
                        <div></div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            {requestQueues.length === 0 && (
                                <div>데이터가 없습니다</div>
                            )}
                            {requestQueues.map((resQueue, index) => {
                                return (
                                    <div
                                        className="post-entry-1 border-bottom"
                                        key={index}
                                    >
                                        <div className="post-meta">
                                            <span className="date">
                                                {
                                                    article_category[
                                                        resQueue.category
                                                    ]
                                                }
                                            </span>{" "}
                                            <span className="mx-1">•</span>{" "}
                                            <span>{resQueue.created_at}</span>{" "}
                                            <span className="mx-1">•</span>{" "}
                                            <span>{resQueue.user_id}</span>
                                        </div>
                                        <h2 className="mb-2">
                                            <a
                                                href={resQueue.source_url}
                                                target="_blank"
                                            >
                                                {resQueue.source_url}
                                            </a>
                                        </h2>
                                        <span className="author mb-3 d-block">
                                            <button
                                                onClick={() =>
                                                    handlerUpdate(resQueue)
                                                }
                                                type="button"
                                                className="btn btn-outline-secondary"
                                            >
                                                수정
                                            </button>{" "}
                                            |{" "}
                                            <button
                                                onClick={() =>
                                                    handlerDelete(resQueue.id)
                                                }
                                                type="button"
                                                className="btn btn-outline-danger"
                                            >
                                                삭제
                                            </button>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PostQueue;