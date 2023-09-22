import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardComponent = ({ songInfo }) => {
  return (
    <Col className="text-center sm-auto" id={songInfo.id}>
      <Link className="text-decoration-none" to={`/album/${songInfo.album.id}`}>
        <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link className="text-decoration-none" to={`/album/${songInfo.album.id}`}>
          Album:
          {songInfo.album.title.length < 16 ? `${songInfo.album.title}` : `${songInfo.album.title.substring(0, 16)}`}
          <br />
        </Link>
        <Link className="text-decoration-none" to={`/artist/${songInfo.artist.id}`}>
          Artist: {songInfo.artist.name}
        </Link>
      </p>
    </Col>
  );
};

export default CardComponent;
