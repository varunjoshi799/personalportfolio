import Cover from "../landing/Cover";
// import Carousel from "./Carousel";
import Favorites from "./Favorites";
import Booking from "./Booking";

import photo from "../assets/images/portfolio/coverstyles/danceCover.webp"



function Portfolio() {
    return (
        <div>
            <Cover title="Through My Lens" image={photo} />
            {/* <Carousel /> */}
            <Favorites />
            <Booking />
        </div>
    );
}

export default Portfolio;
