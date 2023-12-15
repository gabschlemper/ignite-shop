import React, { useContext, useState } from "react";
import {
  CartFooter,
  ImageContainer,
  CartProduct,
  CartProductContainer,
  ProductDescription,
} from "../styles/components/cart";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import axios from "axios";

export default function Cart() {
  const { cartItem, setCartItem, setOpenModal } = useContext(CartContext);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const totalPrice = cartItem.reduce((sum, item) => {
    const formattedPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));

    return sum + formattedPrice;
  }, 0);

  function handleRemoveItemFromCart(item) {
    if (!cartItem.includes(item)) {
      return;
    }
    const updateCart = cartItem.filter((element) => element !== item);
    setCartItem(updateCart);
    setOpenModal(false);
  }

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        priceIds: cartItem.map((item) => item.defaultPriceId),
      });
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      //Conect to a Datadog / Sentry
      setIsCreatingCheckoutSession(false);
      alert("Fail to redirect to checkout!");
    }
  }

  return (
    <>
      <CartProductContainer>
        {cartItem.map((item) => {
          return (
            <CartProduct key={item.id}>
              <ImageContainer>
                <Image src={item.imageUrl} alt="" width={100} height={100} />
              </ImageContainer>

              <ProductDescription>
                <span>{item.name}</span>
                <strong>{item.price}</strong>
                <button onClick={() => handleRemoveItemFromCart(item)}>
                  Remove
                </button>
              </ProductDescription>
            </CartProduct>
          );
        })}
      </CartProductContainer>

      <CartFooter>
        <div>
          <span>Quantiy</span>
          <span>{cartItem.length} items</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>€{totalPrice.toFixed(2)}</strong>
        </div>

        <button
          disabled={isCreatingCheckoutSession}
          onClick={handleBuyProducts}
        >
          Buy
        </button>
      </CartFooter>
    </>
  );
}
