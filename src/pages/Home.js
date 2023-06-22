import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BOARD_API_URL}/articles`)
        .then(response => {
            setArticles(JSON.parse(response.data.body));
            console.log(JSON.parse(response.data.body));
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

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
                            <a href="#" className="more">
                                See All Business
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            {articles.map((article) => (
                                <div
                                    className="post-entry-1 border-bottom"
                                    key={article.id}
                                >
                                    <div className="post-meta">
                                        <span className="date">
                                            {article.date}
                                        </span>
                                        <span className="mx-1">•</span>
                                        <span>{article.title}</span>
                                    </div>
                                    <h2 className="mb-2">
                                        <Link to={`/article/${article.id}`}>
                                            {article.content}
                                        </Link>
                                    </h2>
                                    <span className="author mb-3 d-block">
                                        네이버 기사
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            href
        </>
    );
}

export default Home;
