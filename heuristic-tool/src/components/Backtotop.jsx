import React, { useState } from "react";
 // import the CSS file

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={handleClick}
    >
      <span className="material-symbols-outlined">
arrow_drop_up
</span>
    </button>
  );
}

export default BackToTopButton;
