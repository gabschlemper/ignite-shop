import { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import closeIcon from "../assets/close.svg";
import { Close, DialogContent, Overlay } from "../styles/components/modal";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

export default function Modal() {
  const { openModal, setOpenModal } = useContext(CartContext);

  return (
    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
      <Dialog.Portal>
        <Overlay />

        <DialogContent>
          <Close>
            <Image src={closeIcon} alt="" width={24} height={24} />
          </Close>

          <Dialog.Title>My bag</Dialog.Title>
          <Cart />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
