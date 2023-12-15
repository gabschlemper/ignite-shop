import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    marginTop: "3rem",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "5rem",
    display: "block",
    color: "$green500",
    fontSize: "$md",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  display: "flex",
  marginTop: "6rem",
  marginRight: "-45px",

  div: {
    width: "100%",
    maxWidth: 140,
    height: 145,
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 1000,
    padding: "0.25rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    img: {
      objectFit: "cover",
    },
  },

  "div:nth-child(n+2)": {
    marginLeft: "-45px",
  },
});
