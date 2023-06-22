import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
  const [articles, setArticles] = useState([]);
  console.log(`${process.env.REACT_APP_BOARD_API_URL}/articles`);
  
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

  console.log(articles);

  return (
    <>
      <section className="category-section">
        <div className="container aos-init aos-animate" data-aos="fade-up">
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
                <div className="post-entry-1 border-bottom" key={article.id}>
                  <div className="post-meta">
                    <span className="date">{article.category}</span>
                    <span className="mx-1">•</span>
                    <span>{article.created_at}</span>
					<span className="mx-5" />
					<span>{article.request_id}</span>
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
                        style={{
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            display: "inline-block",
                            padding: "4px 8px",
                        }}
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