function Home() {
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

                            <div className="post-entry-1 border-bottom">
                                <div className="post-meta">
                                    <span className="date">Business</span>{" "}
                                    <span className="mx-1">•</span>{" "}
                                    <span>2023.06.20</span>
                                </div>
                                <h2 className="mb-2">
                                    <a href="/article/1">
                                        콜라·참치캔도 가격 올리고 버티기... 기업
                                        이익은 급증
                                    </a>
                                </h2>
                                <span className="author mb-3 d-block">
                                    네이버 기사
                                </span>
                            </div>

                            <div className="post-entry-1 border-bottom">
                                <div className="post-meta">
                                    <span className="date">Business</span>{" "}
                                    <span className="mx-1">•</span>{" "}
                                    <span>2023.06.20</span>
                                </div>
                                <h2 className="mb-2">
                                    <a href="/article/1">
                                        음악 듣는 사람 뇌 신호 공부한 AI, 히트곡
                                        97% 맞췄다
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

export default Home;
