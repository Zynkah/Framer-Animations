import { FadeInText } from "./components/FadeInText";
import "./App.css";
import DiceSVGText from "./components/DiceSVGText";
import CoinSVGText from "./components/CoinSVGText";
import RPSSVGText from "./components/RPSSVGText";
import HeartToCheck from "./components/HeartToCheckmark";
import { SHomePageWrapper, SSideNav } from "./styles/SVGText";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RainingCoins from "./components/RainingCoins";
import { LoadingChip } from "./components/LoadingChip";
import { DrawnText } from "./components/DrawText";

function App() {
  return (
    <Router>
      <SHomePageWrapper>
        <SSideNav>
          <h3>ANIMATIONS LIST</h3>
          <ul>
            <li>
              <Link to="/heart-to-check">Heart to Checkmark</Link>
            </li>
            <li>
              <Link to="/text-fade-in">Text Fade in</Link>
            </li>
            <li>
              <Link to="/dice-roll">Dice Roll</Link>
            </li>
            <li>
              <Link to="/coin-flip">Coin Flip</Link>
            </li>
            <li>
              <Link to="/rps">Rock Paper Scissors</Link>
            </li>
            <li>
              <Link to="/raining-coins">Raining Coins</Link>
            </li>
            <li>
              <Link to="/loading-chip">Loading Chip</Link>
            </li>
            <li>
              <Link to="/drawn-text">Drawn Text</Link>
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
            <Route path="/raining-coins" element={<RainingCoins />} />
            <Route path="/loading-chip" element={<LoadingChip />} />
            <Route path="/drawn-text" element={<DrawnText />} />
          </Routes>
        </div>
      </SHomePageWrapper>
    </Router>
  );
}

export default App;
