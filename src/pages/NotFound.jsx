import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="not-found-container">
      <img
        className="not-found"
        src="/src/assets/221072-P1AYMF-377.jpg"
        alt="Not found 404"
      />
      <Button>
        <Link className="notFoundButton whiteText" to="/">Volver al Home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
