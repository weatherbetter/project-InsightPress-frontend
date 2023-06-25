import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
    const [articles, setArticles] = useState([]);
    const article_category = useSelector((state) => {
        return state.article_category;
    });
    //   const [hoveredState, setHoveredState] = useState({}); // 각 제목의 마우스 hover 상태를 저장하는 객체

    useEffect(() => {
        console.log(`${process.env.REACT_APP_BOARD_API_URL}/articles`);
        axios
            .get(`${process.env.REACT_APP_BOARD_API_URL}/articles`)
            .then((response) => {
                console.log(response.data)
                setArticles(response.data.body);
            })
            .catch((error) => {});
    }, []);

    //   const handleMouseEnter = (id) => {
    //     setHoveredState(prevState => ({ ...prevState, [id]: true })); // 해당 id의 제목의 hover 상태를 true로 설정
    //   };

    //   const handleMouseLeave = (id) => {
    //     setHoveredState(prevState => ({ ...prevState, [id]: false })); // 해당 id의 제목의 hover 상태를 false로 설정
    //   };

    //   const linkStyle = {
    //     display: "inline-block",
    //     padding: "4px 8px",
    //     color: "inherit",
    //   };

    //   const seeAllLinkStyle = {
    //     ...linkStyle,
    //     textDecoration: "none",
    //     color: "inherit",
    //     backgroundColor: hoveredState["seeAll"] ? "rgba(200, 200, 200, 0.3)" : "transparent",
    //   };

    //   const getTitleLinkStyle = (id) => ({
    //     ...linkStyle,
    //     textDecoration: hoveredState[id] ? "underline" : "none",
    //   });

    //   const getArticleLinkStyle = (id) => ({
    //     ...linkStyle,
    //     textDecoration: hoveredState[id] ? "underline" : "none",
    //   });

    return (
        <>
            <section className="category-section">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div className="section-header d-flex justify-content-between align-items-center mb-5">
                        <h2>Business</h2>
                        <div>
                            <a
                                href="#"
                                className="more"
                                // style={seeAllLinkStyle}
                                // onMouseEnter={() => handleMouseEnter("seeAll")}
                                // onMouseLeave={() => handleMouseLeave("seeAll")}
                            >
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
                                        <Link
                                            to={`/article/${article.article_id}`}
                                            //   style={getTitleLinkStyle(`${article.id}-title`)}
                                            //   onMouseEnter={() => handleMouseEnter(`${article.id}-title`)}
                                            //   onMouseLeave={() => handleMouseLeave(`${article.id}-title`)}
                                        >
                                            {article.title}
                                        </Link>
                                    </h2>
                                    <a
                                        href={article.source_url}
                                        className="author mb-3 d-block small"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        // style={getArticleLinkStyle(`${article.id}-source`)}
                                        // onMouseEnter={() => handleMouseEnter(`${article.id}-source`)}
                                        // onMouseLeave={() => handleMouseLeave(`${article.id}-source`)}
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