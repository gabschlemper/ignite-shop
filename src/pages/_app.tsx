import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { CartProvider } from "../context/CartContext";
import Modal from "../components/Modal";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Modal />

        <Component {...pageProps} />
      </CartProvider>
    </Container>
  );
}
