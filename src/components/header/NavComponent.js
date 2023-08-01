import { Link } from "react-router-dom";

function NavComponent(props) {
    // const navStyles = {
    //     width: "fit-content",
    //     color: "#FFF",
    //     fontSize: "16px",
    //     fontWeight: "400",
    //     background: "transparent",
    //     border: "none",
    //     cursor: "pointer",
    // };
    return (
        <Link
            to={props.href}
            className="nav-link text-light"
            aria-current="page">
            {props.name}
        </Link>
    );
}

export default NavComponent;
