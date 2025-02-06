import React from "react";
import { Snackbar } from "@mui/material";
import { useState } from "react";

function Messages() {
  const [open, setOpen] = useState(false);
  const handleclose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={() => setOpen(true)}>click</button>
      <Snackbar
        message="you are in history page"
        autoHideDuration={4000}
        open={open}
        onClose={handleclose}
      />
    </>
  );
}

export default Messages;
