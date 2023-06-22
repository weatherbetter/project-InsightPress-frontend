import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
    const [article, setArticle] = useState({});
    const article_id = useParams().id;

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BOARD_API_URL}/articles/${article_id}`
            )
            .then((data) => {
                setArticle(JSON.parse(data.data.body));
                console.log(JSON.parse(data.data.body));
            })
            .catch((error) => {});
    }, []);

    return (
        <>
            <section className="single-post-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 post-content">
                            {/* <!-- ======= Single Post Content ======= --> */}
                            <div className="single-post">
                                <div className="post-meta">
                                    <span className="date">Business</span>{" "}
                                    <span className="mx-1">•</span>{" "}
                                    <span>{article.created_at}</span>{" "}
                                    <span className="badge text-bg-primary">
                                        InsightPress
                                    </span>
                                </div>
                                <h1 className="">{article.title}</h1>
                                <span className="mb-3 d-block">
                                    <button
                                        type="button"
                                        className="btn btn-outline-success"
                                    >
                                        수정
                                    </button>{" "}
                                    |{" "}
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                    >
                                        삭제
                                    </button>
                                </span>
                                <div
                                    className="alert alert-primary"
                                    role="alert"
                                >
                                    {article.gpt_content}
                                </div>
                                {/* Start news content*/}
                                {article.content}
                                {/* End news content*/}
                            </div>
                            {/* <!-- End Single Post Content --> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Article;
