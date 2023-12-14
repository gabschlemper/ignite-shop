import { relative } from "path";
import { styled } from "..";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    padding: "0.75rem",
    cursor: "pointer",
    background: "$gray800",
    border: "none",
    borderRadius: 6,
    position: "relative",

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
    },
    "&:not(:disabled):hover": {
      opacity: 0.7,
      transition: "all 0.2s",
    },
  },
});

export const ItemsInCart = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$white",
  fontWeight: "bold",
  width: "1rem",
  height: "1rem",
  backgroundColor: "$green500",
  border: "3px solid $gray900",

  position: "absolute",
  top: "-35%",
  right: "-35%",
  borderRadius: 1000,
  padding: "1rem",
});
