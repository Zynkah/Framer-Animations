
import { CanvasContainer } from "../shared/CanvasContainer";
import { Coin } from "./styles";

export default function RainingCoins() {
  return (
    <CanvasContainer>
      {Array.from({ length: 50 }).map((_, i) => (
        <Coin
          key={i}
          src="/coin.svg"
          alt="fare icon"
          style={{
            top: 0,
            left: `${10 + Math.random() * 100}vw`,
            opacity: Math.random(),
          }}
        />
      ))}
    </CanvasContainer>
  );
}
