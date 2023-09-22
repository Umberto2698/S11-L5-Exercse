import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SongComponent = ({ track }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="py-3 trackHover"
      onClick={() =>
        dispatch({
          type: "PLAYER",
          payload: track,
        })
      }
    >
      <Link className="trackHover px-3" style={{ color: "white" }}>
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
