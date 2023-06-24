import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import qs from "qs";

function ArticleCategory() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("category"));
    const [articles, setArticles] = useState([
        {
            article_id: "3dbds",
            category: 0,
            created_at_article: "2023-06-21",
            title: '[칩톡]GPU 집중 속 "인수"로 몸집 키운 엔비디아',
            source_url:
                "https://n.news.naver.com/mnews/hotissue/article/277/0005274196?type=series&cid=1089768",
        },
        {
            article_id: "3dbds",
            category: 0,
            created_at_article: "2023-06-21",
            title: '[칩톡]GPU 집중 속 "인수"로 몸집 키운 엔비디아',
            source_url:
                "https://n.news.naver.com/mnews/hotissue/article/277/0005274196?type=series&cid=1089768",
        },
    ]);
    const article_category = useSelector((state) => {
        return state.article_category;
    });

    // useEffect(() => {
    //     axios
    //         .get(`${process.env.REACT_APP_BOARD_API_URL}/articles?$category=${searchParams.get("category")}`)
    //         .then((response) => {
    //            console.log(response);
    //             // setArticles(response.data.body);
    //         })
    //         .catch((error) => {});
    // }, []);

    return (
        <>
            <section className="category-section">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div className="section-header d-flex justify-content-between align-items-center mb-5">
                        <h2>Politics</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            {articles.map((article, index) => (
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
                                        <Link
                                            to={`/article/${article.article_id}`}
                                        >
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

export default ArticleCategory;
