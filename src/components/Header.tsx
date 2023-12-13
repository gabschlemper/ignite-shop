import Image from "next/image";
import logoImg from "../assets/logo.svg";
import cartIcon from "../assets/cart.svg";
import { HeaderContainer } from "../styles/components/header";
import Link from "next/link";
import Modal from "./Modal";

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" width={130} height={50} />
      </Link>
      <Modal />
    </HeaderContainer>
  );
}
