function centerAnElement(display, gap) {
  if (display === "flex") {
    if (!gap) {
      return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
    } else {
      return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: `${gap}px`,
      };
    }
  } else if (display === "grid") {
    if (!gap) {
      return {
        display: "grid",
        placeContent: "center",
      };
    } else {
      return {
        display: "grid",
        placeContent: "center",
        gap: `${gap}px`,
      };
    }
  }
}

export default centerAnElement;
