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

    "&:hover": {
      opacity: 0.7,
      transition: "all 0.2s",
    },
  },
});
