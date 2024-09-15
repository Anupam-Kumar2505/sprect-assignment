import "./App.css";
import FAQ from "./components/FAQ";
import HowIsItDone from "./components/HowIsItDone";
import Investor from "./components/Investor";
import SearchPro from "./components/SearchPro";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="bg-white">
      <WhyUs />
      <HowIsItDone />
      <FAQ />
      <SearchPro />
      <Investor />
    </div>
  );
}

export default App;
