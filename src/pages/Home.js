import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
  const [articles, setArticles] = useState([]);
  const [hoveredState, setHoveredState] = useState({
    title: false,
    article: false,
    seeAll: false,
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BOARD_API_URL}/articles`)
      .then(response => {
        setArticles(JSON.parse(response.data.body));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleMouseEnter = (key) => {
    setHoveredState(prevState => ({ ...prevState, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHoveredState(prevState => ({ ...prevState, [key]: false }));
  };

  const linkStyle = {
    display: "inline-block",
    padding: "4px 8px",
    color: "inherit",
  };

  const titleLinkStyle = {
    ...linkStyle,
    textDecoration: hoveredState.title ? "underline" : "none",
  };

  const articleLinkStyle = {
    ...linkStyle,
    textDecoration: hoveredState.article ? "underline" : "none",
  };

  const seeAllLinkStyle = {
    ...linkStyle,
    textDecoration: "none",
    color: "inherit",
    backgroundColor: hoveredState.seeAll ? "rgba(200, 200, 200, 0.3)" : "transparent",
  };

  return (
    <>
      <section className="category-section">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header d-flex justify-content-between align-items-center mb-5">
            <h2>Business</h2>
            <div>
              <a
                href="#"
                className="more"
                style={seeAllLinkStyle}
                onMouseEnter={() => handleMouseEnter("seeAll")}
                onMouseLeave={() => handleMouseLeave("seeAll")}
              >
                See All Business
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              {articles.map((article) => (
                <div className="post-entry-1 border-bottom" key={article.id}>
                  <div className="post-meta">
                    <span className="date">{article.category}</span>
                    <span className="mx-1">•</span>
                    <span>{article.created_at}</span>
                    <span className="mx-5" />
                    <span>{article.request_id}</span>
                  </div>
                  <h2 className="mb-2">
                    <Link
                      to={`/article/${article.id}`}
                      style={titleLinkStyle}
                      onMouseEnter={() => handleMouseEnter("title")}
                      onMouseLeave={() => handleMouseLeave("title")}
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <a
                    href={article.source_url}
                    className="author mb-3 d-block small"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={articleLinkStyle}
                    onMouseEnter={() => handleMouseEnter("article")}
                    onMouseLeave={() => handleMouseLeave("article")}
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