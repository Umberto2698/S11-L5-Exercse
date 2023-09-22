import { Col, Row } from "react-bootstrap";
import TopBarComponent from "./TopBarComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumArtComponent from "./AlbumArtComponent";
import SongComponent from "./SongComponent";

const AlbumComponent = () => {
  const params = useParams();
  const [albumObj, setAlbumObj] = useState(null);

  const headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "efb3c9e7c5msh6491478069abc12p1be504jsnac9d9b8c354d",
  });

  const getAlbum = async () => {
    try {
      const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + params.albumId, {
        method: "GET",
        headers,
      });

      if (response.ok) {
        const album = await response.json();
        setAlbumObj(album); // transforms the response into a JSON
      } else {
        // something went wrong with the request --> i.e. headers missing, wrong HTTP Method
        console.log("error");
      }
    } catch (exception) {
      // ex.: Url is not correct, Internal Server Error
      console.log(exception);
    }
  };

  useEffect(() => {
    getAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
      <TopBarComponent></TopBarComponent>
      <Row className="d-flex align-items-start justify-content-start mt-5">
        <Col md={3} className=" text-center" id="img-container">
          {albumObj && <AlbumArtComponent album={albumObj}></AlbumArtComponent>}
        </Col>
        <Col md={7} className="px-5 align-items-start">
          <Row>
            <Col md={10} className="pb-5 w-100" id="trackList">
              {albumObj && albumObj.tracks.data.map((el, i) => <SongComponent track={el} key={i}></SongComponent>)}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
export default AlbumComponent;
