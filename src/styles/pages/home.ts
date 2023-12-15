import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2 ))",
  marginLeft: "auto",
  minHeight: 656,
  position: "relative",
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  minWidth: 540,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    borderRadius: 6,
    padding: "2rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    opacity: 0,
    transition: "all 0.2s ease-in-out",

    div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "0.5rem",
      strong: {
        fontSize: "$lg",
        color: "$gray100",
      },

      span: {
        fontSize: "$xl",
        fontWeight: "bold",
        color: "$green300",
      },
    },

    button: {
      padding: "0.75rem",
      cursor: "pointer",
      background: "$green500",
      border: "none",
      borderRadius: 6,
      zIndex: 100,

      "&:not(:disabled):hover": {
        opacity: 0.7,
        transition: "all 0.2s",
      },

      "&:disabled": {
        opacity: 0.7,
        cursor: "not-allowed",
      },
    },
  },

  "&:hover": {
    footer: {
      opacity: 1,
    },
  },
});
