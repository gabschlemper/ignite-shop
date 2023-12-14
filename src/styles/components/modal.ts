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
    marginBottom: "2rem",
  },
});

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: "$green500",
});

export const Close = styled(Dialog.Close, {
  border: "none",
  background: "transparent",
  position: "absolute",
  top: 40,
  right: 40,
  cursor: "pointer",
});
