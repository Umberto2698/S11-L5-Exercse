import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import ArtistComponent from "./components/ArtistComponent";
import AlbumComponent from "./components/AlbumComponent";
import SideBarComponent from "./components/SideBarComponent";
import { Container, Row } from "react-bootstrap";
import PlayerComponent from "./components/PlayerComponent";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <BrowserRouter>
            <SideBarComponent></SideBarComponent>
            <Routes>
              <Route path="/" element={<MainComponent></MainComponent>}></Route>
              <Route path="/artist/:artistId" element={<ArtistComponent></ArtistComponent>}></Route>
              <Route path="/album/:albumId" element={<AlbumComponent></AlbumComponent>}></Route>
            </Routes>
            <PlayerComponent></PlayerComponent>
          </BrowserRouter>
        </Row>
      </Container>
    </div>
  );
}

export default App;
