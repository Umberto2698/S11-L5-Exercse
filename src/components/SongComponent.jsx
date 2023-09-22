import { useDispatch, useSelector } from "react-redux";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useEffect } from "react";

const SongComponent = ({ track }) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite.content);

  useEffect(() => {}, [favourite]);
  return (
    <div
      className="py-3 d-flex align-items-center justify-content-between trackHover"
      onClick={() =>
        dispatch({
          type: "PLAYER",
          payload: track,
        })
      }
    >
      <span className="trackHover px-3 me-auto text-white">{track.title_short}</span>
      {favourite.some((el) => el === track.id) ? (
        <span>
          <HeartFill
            onClick={() => dispatch({ type: "REMOVE_FAVOURITE", payload: track.id })}
            className="text-white"
          ></HeartFill>
        </span>
      ) : (
        <span>
          <Heart onClick={() => dispatch({ type: "ADD_FAVOURITE", payload: track.id })} className="text-white"></Heart>
        </span>
      )}
      <small className="duration ms-3 text-white">
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10 ? `0${parseInt(track.duration) % 60}` : `${parseInt(track.duration) % 60}`}
      </small>
    </div>
  );
};

export default SongComponent;
