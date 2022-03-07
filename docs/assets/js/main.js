window.addEventListener("DOMContentLoaded", onload);

function onload() {
  const urlIframeMobile = "https://sketchfab.com/models/716c82765e5e45159a291766a1453a61/embed?autostart=1";
  const urlIframeDesktop = "https://sketchfab.com/models/b28976dbef534ae2bb5c791ce47dd6fe/embed?autostart=1";
  let urlIframe = window.innerWidth < 768 ? urlIframeMobile : urlIframeDesktop;
  const iframe = document.getElementById("sketchfab-iframe");
  iframe.src = urlIframe;

  function onResize() {
    const newUrlIframe = window.innerWidth < 768 ? urlIframeMobile : urlIframeDesktop;
    if (newUrlIframe !== urlIframe) {
      urlIframe = newUrlIframe;
      iframe.src = urlIframe;
    }
  }

  window.addEventListener("resize", onResize);
}
