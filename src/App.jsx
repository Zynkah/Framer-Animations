import { FadeInText } from "./components/FadeInText";
import "./App.css";
import DiceSVGText from "./components/DiceSVGText";
import CoinSVGText from "./components/CoinSVGText";
import RPSSVGText from "./components/RPSSVGText";

function App() {
  return (
    <div>
      <FadeInText text="ANIMATIONS" />
      <DiceSVGText />
      <CoinSVGText />
      <RPSSVGText />
    </div>
  );
}

export default App;
