document.addEventListener("DOMContentLoaded", function () {
  //Закрытие верхнего баннера
  const closeBannerBtn = document.querySelector(".over-header__button");
  const overHeader = document.querySelector(".over-header");
  if (closeBannerBtn && overHeader) {
    closeBannerBtn.addEventListener("click", function () {
      overHeader.classList.add("over-header--hidden");
    });
  }

  // Бургер-меню
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const overlay = document.querySelector(".overlay");
  const closeNavBtn = document.querySelector(".header__nav-close");

  function openMenu() {
    nav.classList.add("header__nav--open");
    overlay.classList.add("overlay--visible");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    nav.classList.remove("header__nav--open");
    overlay.classList.remove("overlay--visible");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (burger && nav && overlay) {
    burger.addEventListener("click", openMenu);

    closeNavBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("header__nav--open")) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (
        window.innerWidth > 768 &&
        nav.classList.contains("header__nav--open")
      ) {
        closeMenu();
      }
    });

    // Свайп
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
    }

    function handleTouchMove(e) {
      touchEndX = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e) {
      if (!nav.classList.contains("header__nav--open")) return;

      const swipeDistance = touchStartX - touchEndX;
      if (swipeDistance > 50) {
        closeMenu();
      }
    }

    nav.addEventListener("touchstart", handleTouchStart);
    nav.addEventListener("touchmove", handleTouchMove);
    nav.addEventListener("touchend", handleTouchEnd);

    overlay.addEventListener("touchstart", handleTouchStart);
    overlay.addEventListener("touchmove", handleTouchMove);
    overlay.addEventListener("touchend", handleTouchEnd);
  }

  
});
