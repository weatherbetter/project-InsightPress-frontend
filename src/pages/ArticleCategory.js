import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ArticleCategory() {
    const pagination = 5; // 페이지 넘버링 수
    const pagination_before_after = 2; // 페이지 넘버링 앞 뒤 수
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const article_category = useSelector((state) => {
        return state.article_category;
    });
    const [articles, setArticles] = useState(
        [
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
        {
            article_id: "3dbds",
            category: 0,
            created_at_article: "2023-06-21",
            title: '[칩톡]GPU 집중 속 "인수"로 몸집 키운 엔비디아',
            source_url:
                "https://n.news.naver.com/mnews/hotissue/article/277/0005274196?type=series&cid=1089768",
        },
    ]
    );

    useEffect(() => {
        //     axios
        //         .get(`${process.env.REACT_APP_BOARD_API_URL}/articles?category=${searchParams.get("category")}`)
        //         .then((response) => {
        //             setArticles(JSON.parse(response.data.body.articles));
        //              setTotalPageCount(
        //                  response.data.body.total_page_count
        //              );
        //         })
        //         .catch((error) => {});
    }, []);

    const move_page = (sidePage) => {
        setCurrentPage(sidePage);
        //     axios
        //         .get(`${process.env.REACT_APP_BOARD_API_URL}/articles?category=${searchParams.get("category")}&page=${sidePage}`)
        //         .then((response) => {
        //             setArticles(JSON.parse(response.data.body.articles));
        // setTotalPageCount(response.data.body.total_page_count);
        //         })
        //         .catch((error) => {});
    };
    return (
        <>
            <section className="category-section">
                <div className="container">
                    <div className="section-header d-flex justify-content-between align-items-center mb-5">
                        <h2>
                            {article_category[searchParams.get("category")]}
                        </h2>
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

                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            {currentPage === 1 ? (
                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>
                            ) : (
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        onClick={() =>
                                            move_page(currentPage - 1)
                                        }
                                    >
                                        Previous
                                    </a>
                                </li>
                            )}

                            {[...Array(parseInt(pagination))].map(
                                (n, index) => {
                                    if (
                                        currentPage +
                                            index -
                                            pagination_before_after ==
                                        currentPage
                                    ) {
                                        return (
                                            <li
                                                className="page-item active"
                                                key={index}
                                            >
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    {currentPage}
                                                </a>
                                            </li>
                                        );
                                    } else {
                                        let sidePage =
                                            currentPage +
                                            index -
                                            pagination_before_after;
                                        if (
                                            sidePage > 0 &&
                                            sidePage < totalPageCount + 1
                                        ) {
                                            return (
                                                <li
                                                    className="page-item"
                                                    key={index}
                                                >
                                                    <a
                                                        className="page-link"
                                                        onClick={() =>
                                                            move_page(sidePage)
                                                        }
                                                    >
                                                        {sidePage}
                                                    </a>
                                                </li>
                                            );
                                        }
                                    }
                                }
                            )}
                            {currentPage === totalPageCount ? (
                                <li className="page-item disabled">
                                    <a className="page-link">Next</a>
                                </li>
                            ) : (
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        onClick={() =>
                                            move_page(currentPage + 1)
                                        }
                                    >
                                        Next
                                    </a>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default ArticleCategory;
