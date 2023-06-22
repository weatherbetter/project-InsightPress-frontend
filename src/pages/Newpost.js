import axios from "axios";
import { useNavigate} from "react-router-dom";

function Newpost() {
    let navigate = useNavigate();

    function addPost(event) {
        event.preventDefault();
        return axios
            .post(`${process.env.REACT_APP_BOARD_API_URL}/articles`, {
                user_id: event.target.user.value,
                source_url: event.target.url.value,
                category: event.target.category.value,
            })
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
            });
    }

    return (
        <>
            <section id="contact" className="contact mb-5">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h3 className="page-title">New Post</h3>
                        </div>
                    </div>
                    <div className="form mt-5">
                        <form
                            onSubmit={addPost}
                            className="php-email-form"
                        >
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="unauthorized"
                                        defaultValue="unauthorized"
                                        aria-label="default input example"
                                        name="user"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <select
                                        className="form-select form-select-lg"
                                        aria-label="Default select example"
                                        name="category"
                                    >
                                        <option value="0">정치</option>
                                        <option value="1">경제</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="url"
                                    id="url"
                                    required
                                    placeholder="https://n.news.naver.com/article/648/0000017271"
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit">New Post</button>
                            </div>
                        </form>
                    </div>
                    {/* <!-- End Contact Form --> */}
                </div>
            </section>
        </>
    );
}

export default Newpost;
