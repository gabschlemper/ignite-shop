import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import axios from "axios";
import { useContext, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import { CartContext } from "../../context/CartContext";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    url: string;
    price: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { setOpenModal, setCartItem, cartItem } = useContext(CartContext);

  const isElementInCart = cartItem.some((item) => item.name === product.name);

  async function handleByProduct() {
    setOpenModal(true);
    setCartItem((prevCart) => [...prevCart, product]);
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <Header />

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button disabled={isElementInCart} onClick={handleByProduct}>
            Add to cart
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_P949W3r3OAtHqK" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        url: product.url,
        price: new Intl.NumberFormat("sfb", {
          style: "currency",
          currency: "EUR",
        }).format(price.unit_amount / 100),
        defaultPriceId: price.id,
      },
    },
    revalidate: (60 * 60) / 2,
  };
};
