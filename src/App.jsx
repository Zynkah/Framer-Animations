import { FadeInText } from "./components/FadeInText";
import "./App.css";
import DiceSVGText from "./components/DiceSVGText";
import CoinSVGText from "./components/CoinSVGText";
import RPSSVGText from "./components/RPSSVGText";
import HeartToCheck from "./components/HeartToCheckmark";
import { SHomePageWrapper, SSideNav } from "./styles/SVGText";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <SHomePageWrapper>
        <SSideNav>
          <h3>ANIMATIONS LIST</h3>
          <ul>
            <li>
              <Link to="/heart-to-check">Heart to checkmark</Link>
            </li>
            <li>
              <Link to="/text-fade-in">Text Fade in</Link>
            </li>
            <li>
              <Link to="/dice-roll">Dice roll</Link>
            </li>
            <li>
              <Link to="/coin-flip">Coin flip</Link>
            </li>
            <li>
              <Link to="/rps">rock paper scissors</Link>
            </li>
          </ul>
        </SSideNav>
        <div>
          <Routes>
            <Route path="/" element={<FadeInText text="ANIMATIONS" />} />
            <Route path="/heart-to-check" element={<HeartToCheck />} />
            <Route
              path="/text-fade-in"
              element={<FadeInText text="DRAWING" />}
            />
            <Route path="/dice-roll" element={<DiceSVGText />} />
            <Route path="/coin-flip" element={<CoinSVGText />} />
            <Route path="/rps" element={<RPSSVGText />} />
          </Routes>
        </div>
      </SHomePageWrapper>
    </Router>
  );
}

export default App;
