import React from "react";

export const DownloadApp = (props) => {
    return (
        <div id="app" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Download the App</h2>
                    <p>Available on Play Store and App Store</p>
                </div>
                <div id="row">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div
                                key={`${d.name}-${i}`}
                                className="col-md-3 col-sm-6 col-md-offset-2 team"
                            >
                                <div className="thumbnail">
                                    {" "}
                                    <img src={d.img} alt="..." className="team-img" />
                                    <div className="caption">
                                        {/* <h4>{d.name}</h4>
                                            <p>{d.job}</p> */}
                                        <a
                                            href="#features"
                                            className="btn btn-custom btn-lg page-scroll"
                                        >
                                            Download App
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};
