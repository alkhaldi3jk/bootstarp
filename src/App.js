import './App.css';
import MovieList from './componants/MovieList'
import NavBarMovies from './componants/NavBarMovies'
import { Row,Container } from "react-bootstrap";
import BtnModal from "./componants/BtnModal";


function App() {
  return (
    <div>
      {/* <Modal/> */}
      <NavBarMovies/>
      <h1>Join the Show</h1>
    <BtnModal/>


      <Container >
  <Row md={3}>
    <MovieList/>
  </Row>
</Container>
    </div>
  );
}

export default App;
