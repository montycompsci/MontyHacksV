import './assets/css/App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import FAQ from './components/FAQ';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Container>
        <About></About>
        <div style={{height: '70px'}}></div>
        <FAQ></FAQ>
        <div style={{height: '70px'}}></div>
        <Schedule></Schedule>
        <div style={{height: '70px'}}></div>
        <Sponsors></Sponsors>
        <div style={{height: '70px'}}></div>
      </Container>
    </>
  );
}

export default App;
