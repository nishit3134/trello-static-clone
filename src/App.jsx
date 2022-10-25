import AboutTrello from "./components/AboutTrello.jsx";
import Board from "./components/Board.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Cards from "./components/Cards.jsx";
import SignUp from "./components/SignUp.jsx";
import Download from "./components/Download.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutTrello />
      <Board />
      <Cards />
      <SignUp />
      <Download />
      <Footer />
    </div>
  );
}
export default App;
