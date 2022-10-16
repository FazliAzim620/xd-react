import "./App.css";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Invest from "./components/Invest";
import Stake from "./components/Stake";
import WorkSection from "./components/WorkSection";
import AboutStaking from "./components/AboutStaking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Herosection />
      <WorkSection />
      <Stake />
      <Invest />
      <AboutStaking />
      <Footer />
    </div>
  );
}

export default App;
