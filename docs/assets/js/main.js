window.addEventListener("DOMContentLoaded", onload);

function overideFrameStyles() {
  const new_style_element = document.createElement("style");
  new_style_element.textContent = ".controls { display: none !importance; }";
  const interval = setInterval(() => {
    const frame = document.getElementById("iframe");
    if (frame.contentDocument) {
      frame.contentDocument.head.appendChild(new_style_element);
      clearInterval(interval);
    }
  }, 1000);
}

function onload() {
  // overideFrameStyles();
}
