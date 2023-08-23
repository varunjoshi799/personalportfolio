import React from "react";

function Papers() {
    const experienceStyle = "text-primary";

    // updated Amazon s3 link
    const pdfDownload =
        "https://resumebucketvarun.s3.us-west-1.amazonaws.com/Varun_Joshi_Resume.pdf";
    const mlBias =
        "https://resumebucketvarun.s3.us-west-1.amazonaws.com/ML+Paper.pdf";
    const sst =
        "https://resumebucketvarun.s3.us-west-1.amazonaws.com/Sea+Paper.pdf";
    const cyber =
        "https://resumebucketvarun.s3.us-west-1.amazonaws.com/Energy+PDF.pdf";

    return (
        <div className="component d-flex flex-column">
            <div className="row featurette d-flex flex-row justify-content-around p-5">
                <div className="col-md-4">
                    <h1 className="featurette-heading fw-normal lh-1 display-6 text-white pb-1 mb-5 mb-md-0">
                        Papers
                    </h1>
                </div>
                <div className="col-md-8 d-flex flex-column text-white">
                    <div className="featurette text-start mb-4">
                        <h5 className="text-primary">
                            I wrote a lot of papers at Georgetown. Here are the
                            ones I'm particularly proud of:
                        </h5>
                    </div>
                    <div>
                        <a
                            type="button"
                            href={mlBias}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline-primary btn-lg mx-auto mb-2 mt-3">
                            Intentionally Training Machine Learning Models to
                            Look for Bias
                        </a>
                        <a
                            type="button"
                            href={sst}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline-primary btn-lg mx-auto mb-2 mt-3">
                            Access to and Interpretation of Sea Surface
                            Temperature Data
                        </a>
                        <a
                            type="button"
                            href={cyber}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline-primary btn-lg mx-auto mb-2 mt-3">
                            Cybersecurity and the Grid
                        </a>
                    </div>
                </div>
            </div>
            <div className="my-2"></div>
        </div>
    );
}

export default Papers;
