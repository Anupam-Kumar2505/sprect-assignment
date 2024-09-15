import "./App.css";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
