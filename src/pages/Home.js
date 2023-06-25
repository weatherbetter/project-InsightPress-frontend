import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
    const [articles, setArticles] = useState([]);
    const article_category = useSelector((state) => {
        return state.article_category;
    });

    useEffect(() => {
        // axios
        //     .get(`${process.env.REACT_APP_BOARD_API_URL}/articles`)
        //     .then((response) => {
        //         console.log(JSON.parse(response.data.body));
        //         setArticles(JSON.parse(response.data.body));
        //     })
        //     .catch((error) => {});
    }, []);

    return (
        <>
            <section className="category-section">
                <div className="container">
                    <div className="section-header d-flex justify-content-between align-items-center mb-5">
                        <h2>Headline</h2>
                        <div>
                            <a href="#" className="more">
                                See All Business
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            {Array.isArray(articles) && articles.map((article, index) => (
                                <div
                                    className="post-entry-1 border-bottom"
                                    key={index}
                                >
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
                                    <h2 className="mb-2">
                                        <Link to={`/article/${article.id}`}>
                                            {article.title}
                                        </Link>
                                    </h2>
                                    <a
                                        href={article.source_url}
                                        className="author mb-3 d-block small"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        original article
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;