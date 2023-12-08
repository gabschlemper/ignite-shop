import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>€ 79.99</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          quibusdam perspiciatis doloribus facilis distinctio porro tenetur
          optio ea! Ad rerum magnam modi quos eaque exercitationem? Officia
          totam repellat doloremque architecto.
        </p>

        <button>Buy</button>
      </ProductDetails>
    </ProductContainer>
  );
}
