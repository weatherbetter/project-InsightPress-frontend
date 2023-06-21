import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
    const [article, setArticle] = useState("");
    const article_id = useParams().id;

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BOARD_API_URL}/articles/${article_id}`
            )
            .then((data) => {
                setArticle(JSON.parse(data.data.body));
            })
            .catch((error) => {});
    }, []);

    return (
        <>
            <section className="single-post-content">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 post-content aos-init aos-animate"
                            data-aos="fade-up"
                        >
                            {/* <!-- ======= Single Post Content ======= --> */}
                            <div className="single-post">
                                <div className="post-meta">
                                    <span className="date">Business</span>{" "}
                                    <span className="mx-1">•</span>{" "}
                                    <span>{article.created_at}</span>
                                </div>
                                <h1 className="mb-5">{article.title}</h1>
                                <div className="alert alert-info" role="alert">
                                    {article.gpt_content}
                                </div>
                                {/* Start news content*/}
                                {article.content}
                                {/* End news content*/}
                            </div>
                            {/* <!-- End Single Post Content --> */}

                            {/* <!-- ======= Comments ======= --> */}
                            <div className="comments">
                                <h5 className="comment-title py-4">
                                    2 Comments
                                </h5>
                                <div className="comment d-flex mb-4">
                                    <div className="flex-grow-1 ms-2 ms-sm-3">
                                        <div className="comment-meta d-flex align-items-baseline">
                                            <h6 className="me-2">
                                                Jordan Singer
                                            </h6>
                                            <span className="text-muted">
                                                2d
                                            </span>
                                        </div>
                                        <div className="comment-body">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Non
                                            minima ipsum at amet doloremque qui
                                            magni, placeat deserunt pariatur
                                            itaque laudantium impedit aliquam
                                            eligendi repellendus excepturi
                                            quibusdam nobis esse accusantium.
                                        </div>

                                        <div className="comment-replies bg-light p-3 mt-3 rounded">
                                            <h6 className="comment-replies-title mb-4 text-muted text-uppercase">
                                                2 replies
                                            </h6>

                                            <div className="reply d-flex mb-4">
                                                <div className="flex-grow-1 ms-2 ms-sm-3">
                                                    <div className="reply-meta d-flex align-items-baseline">
                                                        <h6 className="mb-0 me-2">
                                                            Brandon Smith
                                                        </h6>
                                                        <span className="text-muted">
                                                            2d
                                                        </span>
                                                    </div>
                                                    <div className="reply-body">
                                                        Lorem ipsum dolor sit,
                                                        amet consectetur
                                                        adipisicing elit.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reply d-flex">
                                                <div className="flex-grow-1 ms-2 ms-sm-3">
                                                    <div className="reply-meta d-flex align-items-baseline">
                                                        <h6 className="mb-0 me-2">
                                                            James Parsons
                                                        </h6>
                                                        <span className="text-muted">
                                                            1d
                                                        </span>
                                                    </div>
                                                    <div className="reply-body">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit.
                                                        Distinctio dolore sed
                                                        eos sapiente,
                                                        praesentium.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment d-flex">
                                    <div className="flex-shrink-1 ms-2 ms-sm-3">
                                        <div className="comment-meta d-flex">
                                            <h6 className="me-2">
                                                Santiago Roberts
                                            </h6>
                                            <span className="text-muted">
                                                4d
                                            </span>
                                        </div>
                                        <div className="comment-body">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Iusto
                                            laborum in corrupti dolorum, quas
                                            delectus nobis porro accusantium
                                            molestias sequi.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Comments --> */}

                            {/* <!-- ======= Comments Form ======= --> */}
                            <div className="row justify-content-center mt-5">
                                <div className="col-lg-12">
                                    <h5 className="comment-title">
                                        Leave a Comment
                                    </h5>
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <label htmlFor="comment-name">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="comment-name"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <label htmlFor="comment-email">
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="comment-email"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="comment-message">
                                                Message
                                            </label>

                                            <textarea
                                                className="form-control"
                                                id="comment-message"
                                                placeholder="Enter your name"
                                                cols="30"
                                                rows="10"
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                className="btn btn-primary"
                                                value="Post comment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Comments Form --> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Article;
