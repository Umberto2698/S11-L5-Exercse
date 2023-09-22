import { Link } from "react-router-dom";

const SongComponent = ({ track }) => {
  return (
    <div className="py-3 trackHover">
      <Link to="/" className="trackHover px-3" style={{ color: "white" }}>
        {track.title_short}
      </Link>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10 ? `0${parseInt(track.duration) % 60}` : `${parseInt(track.duration) % 60}`}
      </small>
    </div>
  );
};

export default SongComponent;
