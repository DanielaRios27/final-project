import { Link } from "react-router-dom";
import image from "../../assets/404.png";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found">
      <img src={image} alt="404 - not found" />
      <div className="btn--back">
        <Link to="/">⬅ Regresar</Link>
      </div>
    </div>
  );
};
