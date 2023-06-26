import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import WordBubble from "./WordBubble.js";

function Article() {
    const [article, setArticle] = useState({});
    const article_id = useParams().id;
    const article_category = useSelector((state) => {
        return state.article_category;
    });
    const [original_article, setOriginal_article] = useState({});

    const [keywordNews, setKeywordNews] = useState([]);

    const [wordData, setWord] = useState({
        value: 0,
        children: [],
    });

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BOARD_API_URL}/articles/${article_id}`
            )
            .then((response) => {
                setArticle(JSON.parse(response.data.body));
                setOriginal_article(JSON.parse(response.data.body));
                axios
                    .post(`${process.env.REACT_APP_BOARD_API_URL}/analysis`, {
                        body: {
                            article: JSON.parse(response.data.body).content,
                            show_count: 10,
                        },
                    })
                    .then((response) => {
                        setWord({
                            children: response.data.body,
                        });
                    })
                    .catch((error) => {});
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
                                    dangerouslySetInnerHTML={{
                                        __html: article.gpt_content,
                                    }}
                                ></div>
                                {/* Start news content*/}
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: article.content,
                                    }}
                                ></div>
                                {/* End news content*/}
                            </div>
                            {/* <!-- End Single Post Content --> */}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <WordBubble
                            wordData={wordData}
                            setArticle={setArticle}
                            article={article}
                            original_article={original_article}
                            keywordNews={keywordNews}
                            setKeywordNews={setKeywordNews}
                        ></WordBubble>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="footer-heading">Recent Posts</h3>

                        <ul className="footer-links footer-blog-entry list-unstyled">
                            {keywordNews.map((keyNews, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            href={keyNews.link}
                                            className="d-flex align-items-center"
                                            target="_blank"
                                        >
                                            <div>
                                                <div className="post-meta d-block">
                                                    <span className="date">
                                                        Culture
                                                    </span>{" "}
                                                    <span className="mx-1">
                                                        •
                                                    </span>{" "}
                                                    <span>
                                                        {keyNews.pubDate}
                                                    </span>
                                                </div>
                                                <span>{keyNews.title}</span>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;
