import Cover from "../landing/Cover";
import Technologies from "./Technologies";
import Experience from "./Experience";
import photo from "../assets/images/work/cover.webp";
import React from "react";
import Papers from "./Papers";

function Resume() {
    return (
        <div>
            <Cover title="Get To Know Me" image={photo} />
            <Technologies />
            <Papers />
            <Experience />
        </div>
    );
}

export default Resume;
