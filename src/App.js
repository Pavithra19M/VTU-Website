import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";


function App() {
  return (
   <>
    <Header/>
    <Container>
    <main>
      <Outlet/>
    </main>
    </Container>
    <Footer/>
   
   </>
  );
}

export default App;
