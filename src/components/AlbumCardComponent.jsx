import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AlbumCardComponent = ({ songInfo }) => {
  return (
    <Col className="text-center">
      <Link className="text-decoration-none" to={`/album/${songInfo.id}`}>
        <img className="img-fluid" src={songInfo.cover_medium} alt="1" />
      </Link>
      <p>
        <Link className="text-decoration-none" to={`/album/${songInfo.id}`}>
          Album:
          {songInfo.title.length < 16 ? `${songInfo.title}` : `${songInfo.title.substring(0, 16)}`}
          <br />
        </Link>
        <Link className="text-decoration-none" to={`/artist/${songInfo.artist.id}`}>
          Artist: {songInfo.artist.name}
        </Link>
      </p>
    </Col>
  );
};

export default AlbumCardComponent;
