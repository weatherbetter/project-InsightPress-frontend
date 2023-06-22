import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostQueue() {
    const [articles, setArticles] = useState([]);

    return (
        <>
            <section className="category-section">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div className="section-header d-flex justify-content-between align-items-center mb-5">
                        <h2>Post Queue</h2>
                        <div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="post-entry-1 border-bottom">
                                <div className="post-meta">
                                    <span className="date">Business</span>{" "}
                                    <span className="mx-1">•</span>{" "}
                                    <span>2023.06.20</span>
                                </div>
                                <h2 className="mb-2">
                                    <a href="/article/1">
                                        김기현 “국내 중국인 투표권 제한…건보
                                        ‘먹튀’도 막겠다”
                                    </a>
                                </h2>
                                <span className="author mb-3 d-block">
                                    네이버 기사
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default PostQueue;
