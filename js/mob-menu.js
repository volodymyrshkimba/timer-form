const registerButton = document.querySelector("#register-button");
const mobMenu = document.querySelector("#mob-menu-overlay");
const mobMenuCloseButton = document.querySelector("#mob-menu-close-button");

const form = document.querySelector("#timer-form");
const mobMenuContentFor = document.querySelector("#mob-menu-content-for");
const mobMenuContentWrapper = document.querySelector("#mob-menu-content");
const pageContentWrapper = document.querySelector("#for-append-node");

let isInMenu = false;

const openMobileMenu = function () {
  if (!isInMenu) {
    mobMenuContentWrapper.appendChild(mobMenuContentFor);
    form.classList.add("show-form");

    isInMenu = true;
  }
  document.body.classList.add("no-scroll");
  mobMenu.classList.add("open");
};

const closeMobMenu = function () {
  if (isInMenu) {
    pageContentWrapper.appendChild(mobMenuContentFor);
    form.classList.remove("show-form");

    isInMenu = false;
  }

  document.body.classList.remove("no-scroll");
  mobMenu.classList.remove("open");
};

registerButton.addEventListener("click", openMobileMenu);

mobMenuCloseButton.addEventListener("click", closeMobMenu);

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    closeMobMenu();
  }
});
