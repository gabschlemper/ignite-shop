import Image from "next/image";
import logoImg from "../assets/logo.svg";
import Link from "next/link";
import { HeaderContainer, ItemsInCart } from "../styles/components/header";
import cartIcon from "../assets/cart.svg";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Header() {
  const { setOpenModal, cartItem } = useContext(CartContext);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" width={130} height={50} />
      </Link>
      <button onClick={handleOpenModal} disabled={!cartItem.length}>
        <Image src={cartIcon} alt="" width={24} height={24} />
        {cartItem.length ? <ItemsInCart>{cartItem.length}</ItemsInCart> : null}
      </button>
    </HeaderContainer>
  );
}
