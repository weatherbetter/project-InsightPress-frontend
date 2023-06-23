import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Article() {
    const [article, setArticle] = useState({
        // created_at_article: "2023-06-21",
        // title: '[칩톡]GPU 집중 속 "인수"로 몸집 키운 엔비디아',
        // request_id: null,
        // category: "0",
    });
    const article_id = useParams().id;
    const article_category = useSelector((state) => {
        return state.article_category;
    });

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BOARD_API_URL}/articles/${article_id}`
            )
            .then((response) => {
                setArticle(response.data.body);
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
                                    <span className="date">
                                        {article_category[article.category]}
                                    </span>
                                    <span className="mx-1">•</span>
                                    <span>
                                        {article.created_at_article}
                                    </span>{" "}
                                    {article.request_id ? (
                                        <span className="badge text-bg-warning">
                                            User
                                        </span>
                                    ) : (
                                        <span className="badge text-bg-primary">
                                            InsightPress
                                        </span>
                                    )}
                                </div>
                                <h1 className="">{article.title}</h1>
                                <div
                                    className="alert alert-primary"
                                    role="alert"
                                >
                                    {article.gpt_content}
                                </div>
                                {/* Start news content*/}
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: article.content_html,
                                    }}
                                ></div>
                                {/* {article.content} */}
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
