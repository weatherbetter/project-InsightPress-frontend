import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function Newpost() {
    let navigate = useNavigate();
    const token = sessionStorage.getItem("JWT_TOKEN");
        useEffect(() => {
            if (!token) {
                navigate("/login");
            }
        }, []);
    let updatePost = useSelector((state) => {
        return state.updatePost;
    });
    const guide = updatePost.id ? "Update" : "New Post";
    let user_id = useSelector((state) => {
        return state.user_id;
    });
    console.log(user_id);

    function addPost(event) {
        event.preventDefault();
        return axios
            .post(
                `${process.env.REACT_APP_BOARD_API_URL}/articles/customer-requests`,
                {
                    user_id: user_id,
                    source_url: event.target.url.value,
                    category: event.target.category.value,
                }
            )
            .then((res) => {
                navigate("/postqueue");
            })
            .catch((err) => {});
    }

    function handlerUpdate(event) {
        event.preventDefault();
        return axios
            .put(
                `${process.env.REACT_APP_BOARD_API_URL}/articles/customer-requests/${updatePost.id}`,
                {
                    source_url: event.target.url.value,
                    category: event.target.category.value,
                }
            )
            .then((res) => {
                navigate("/postqueue");
            })
            .catch((err) => {});
    }

    return (
        <>
            <section id="contact" className="contact mb-5">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h3 className="page-title">{guide}</h3>
                        </div>
                    </div>
                    <div className="form mt-5">
                        <form></form>

                        <form
                            onSubmit={updatePost.id ? handlerUpdate : addPost}
                            className="php-email-form"
                        >
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <fieldset
                                        // disabled={updatePost.id ? true : false}
                                        disabled
                                    >
                                        <input
                                            className="form-control"
                                            id="disabledTextInput"
                                            type="text"
                                            // placeholder="unauthorized"
                                            defaultValue={user_id}
                                            aria-label="default input example"
                                            name="user"
                                            // value={user_id}
                                            required
                                        />
                                    </fieldset>
                                </div>
                                <div className="form-group col-md-6">
                                    <select
                                        className="form-select form-select-lg"
                                        aria-label="Default select example"
                                        name="category"
                                        defaultValue={updatePost.category}
                                    >
                                        <option value="0">정치</option>
                                        <option value="1">경제</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="url"
                                    id="url"
                                    required
                                    placeholder="https://n.news.naver.com/article/648/0000017271"
                                    defaultValue={updatePost.source_url}
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit">{guide}</button>
                            </div>
                        </form>
                    </div>
                    {/* <!-- End Contact Form --> */}
                </div>
            </section>
        </>
    );
}

export default Newpost;
