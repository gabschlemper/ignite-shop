import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import cartIcon from "../assets/cart.svg";
import closeIcon from "../assets/close.svg";
import { styled } from "@stitches/react";
import {
  Close,
  DialogContent,
  Footer,
  ImageContainer,
  Product,
  ProductContainer,
  ProductDescription,
} from "../styles/components/modal";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button>
          <Image src={cartIcon} alt="" width={24} height={24} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />

        <DialogContent>
          <Close>
            <Image src={closeIcon} alt="" width={24} height={24} />
          </Close>

          <Dialog.Title>Sacola de compras</Dialog.Title>

          <ProductContainer>
            <Product>
              <ImageContainer>{/* <img src="" alt="" /> */}</ImageContainer>

              <ProductDescription>
                <span>Camiseta beyong the limits</span>
                <strong>R$ 79.90</strong>
                <button>Remover</button>
              </ProductDescription>
            </Product>

            <Product>
              <ImageContainer>{/* <img src="" alt="" /> */}</ImageContainer>

              <ProductDescription>
                <span>Camiseta beyong the limits</span>
                <strong>R$ 79.90</strong>
                <button>Remover</button>
              </ProductDescription>
            </Product>

            <Product>
              <ImageContainer>{/* <img src="" alt="" /> */}</ImageContainer>

              <ProductDescription>
                <span>Camiseta beyong the limits</span>
                <strong>R$ 79.90</strong>
                <button>Remover</button>
              </ProductDescription>
            </Product>
          </ProductContainer>

          <Footer>
            <div>
              <span>Quantidade</span>
              <span>3 items</span>
            </div>
            <div>
              <strong>Valor total</strong>
              <strong>R$ 270</strong>
            </div>

            <button>Finalizar compra</button>
          </Footer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
