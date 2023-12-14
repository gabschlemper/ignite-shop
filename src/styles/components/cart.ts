import { styled } from "..";

export const CartProductContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const CartProduct = styled("div", {
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
  borderRadius: 8,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  img: {
    objectFit: "cover",
  },
});

export const CartFooter = styled("footer", {
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
    marginTop: "2rem",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.7,
      transition: "opacity 0.2s",
    },
  },
});
