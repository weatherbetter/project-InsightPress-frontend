import axios from "axios";
import { useEffect, useState } from "react";

function Newpost() {
    return (
        <>
            <section id="contact" className="contact mb-5">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            {/* <h1 className="page-title">New Post</h1> */}
                        </div>
                    </div>
                    <div className="form mt-5">
                        <form
                            // action=""
                            method="post"
                            className="php-email-form"
                        >
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="User"
                                        aria-label="default input example"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <select
                                        className="form-select form-select-lg"
                                        aria-label="Default select example"
                                    >
                                        <option defaultValue="1">정치</option>
                                        <option defaultValue="2">경제</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
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
