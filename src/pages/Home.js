import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://303c43lyua.execute-api.eu-west-1.amazonaws.com/production")
        .then(response => {
            setData(response.data);
            // console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

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

                            {data.map((d) => (
                                <div className="post-entry-1 border-bottom" key={d.id}>
                                    <div className="post-meta">
                                        <span className="date">{d.field}</span>
                                        <span className="mx-1">•</span>
                                        <span>{d.date}</span>
                                    </div>
                                    <h2 className="mb-2">
                                        <Link to={`/article/${d.id}`}>{d.title}</Link>
                                    </h2>
                                    <span className="author mb-3 d-block">네이버 기사</span>
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
