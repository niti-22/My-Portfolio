// When button or image is clicked, open your LinkedIn (or any origin link)
document.addEventListener("DOMContentLoaded", () => {
  const originBtn = document.getElementById("viewOrigin");
  const aboutSection = document.getElementById("about");
  const profileImg = document.getElementById("profileImage");
  const originLink = aboutSection.getAttribute("data-origin");

  function openOrigin() {
    if (originLink) window.open(originLink, "_blank");
  }

  originBtn.addEventListener("click", openOrigin);
  profileImg.addEventListener("click", openOrigin);
});
