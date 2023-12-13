import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "..";

export const DialogContent = styled(Dialog.DialogContent, {
  background: "$gray800",
  padding: "5rem",

  position: "absolute",
  zIndex: 10,
  right: 0,
  bottom: 0,
  height: "100%",

  display: "flex",
  flexDirection: "column",

  h2: {
    fontSize: "$lg",
    color: "$gray100",
    marginBottom: "3rem",
  },
});

export const Close = styled(Dialog.Close, {
  border: "none",
  background: "transparent",
  position: "absolute",
  top: 24,
  right: 24,
  cursor: "pointer",
});

export const ProductContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const Product = styled("div", {
  display: "flex",
  gap: "2rem",
});

export const ProductDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,

  span: {
    fontSize: "$md",
    marginBottom: "0.25rem",
  },

  strong: {
    fontSize: "$md",
  },

  button: {
    border: "none",
    background: "transparent",
    color: "$green500",
    fontWeight: "bold",
    display: "flex",
    marginTop: "auto",
    cursor: "pointer",
    fontSize: "$sm",
    "&:hover": {
      opacity: 0.6,
      transition: "opacity 0.2s",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100px",
  height: "90px",
  borderRadius: 8,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  img: {
    objectFit: "cover",
  },
});

export const Footer = styled("footer", {
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",
  gap: "0.5rem",

  div: {
    display: "flex",
    justifyContent: "space-between",
  },

  strong: {
    fontSize: "$md",
  },

  "strong:last-child": {
    fontSize: "$xl",
  },

  button: {
    backgroundColor: "$green500",
    color: "$white",
    padding: "1.25rem",
    fontSize: "$md",
    fontWeight: "bold",
    border: "none",
    borderRadius: 8,
    marginTop: "3.5rem",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.7,
      transition: "opacity 0.2s",
    },
  },
});
