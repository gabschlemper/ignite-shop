import { ReactNode, createContext, useState } from "react";

interface CartContextProps {
  openModal: boolean;
  setOpenModal: any;
  cartItem: cartItemProps[];
  setCartItem: any;
}

interface cartItemProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  url: string;
  price: string;
  defaultPriceId: string;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartContextProviderProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [cartItem, setCartItem] = useState<cartItemProps[]>([]);

  return (
    <CartContext.Provider
      value={{
        openModal,
        setOpenModal,
        cartItem,
        setCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
