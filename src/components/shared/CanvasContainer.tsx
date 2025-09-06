import { AnimatePresence } from "framer-motion";
import {
  SModalContent,
  SModalWrapper,
  SGradientWalletModalContent,
} from "../../styles/Styles";
import { modalContentVariants } from "../../styles/variants";

export const CanvasContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <SModalWrapper>
        <SGradientWalletModalContent
          variants={modalContentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <SModalContent>{children}</SModalContent>
        </SGradientWalletModalContent>
      </SModalWrapper>
    </AnimatePresence>
  );
};
