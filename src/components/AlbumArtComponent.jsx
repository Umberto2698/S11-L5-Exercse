import { Button } from "react-bootstrap";

const AlbumArtComponent = ({ album }) => {
  return (
    <>
      <img src={album.cover} className="img-fluid" alt="Album" />
      <div className="mt-4 text-center">
        <p className="album-title">{album.title}</p>
      </div>
      <div className=" text-center">
        <p className="artist-name">{album.artist.name}</p>
      </div>
      <div className="mt-3 text-center">
        <Button id="btnPlay" variant="success" type="button">
          Play
        </Button>
      </div>
    </>
  );
};

export default AlbumArtComponent;
