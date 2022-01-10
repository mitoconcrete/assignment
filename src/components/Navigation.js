class Navigation {
  constructor(navigationItems) {
    this.elNavigationContainer = document.querySelectorAll(".menu-items");
    this.elMobileMenuOpenButton = document.querySelector("#hamburger-button");
    this.elMobileMenuContainer = document.querySelector(
      "#float-mobile-menu__container"
    );
    this.navigationItems = navigationItems;
  }

  init() {
    // 1. attach click event in mobile menu visible trigger button.
    this.elMobileMenuOpenButton.addEventListener(
      "click",
      this._handleClickMobileButton.bind(this)
    );

    // 2. anchor tags add by items count.
    if (this.navigationItems && this.navigationItems.length) {
      const menuElementsList = [];
      // make anchor-tag wrapped into list-tag.
      for (let item of this.navigationItems) {
        const elList = document.createElement("li");
        elList.classList.add("menu-item");

        const elAnchor = document.createElement("a");
        elAnchor.innerText = item.label;
        elAnchor.href = "#/" + item.href;

        elList.appendChild(elAnchor);
        menuElementsList.push(elList);
      }

      // append li < a tags into menulists.
      for (let targetContainer of this.elNavigationContainer) {
        for (let element of menuElementsList) {
          // element deep clone.
          const cloneNode = element.cloneNode(true);
          targetContainer.appendChild(cloneNode);
        }
      }
    }
  }

  _handleClickMobileButton() {
    this._handleToggleActions(this.elMobileMenuOpenButton);
    this._handleToggleActions(this.elMobileMenuContainer);
  }

  _handleToggleActions(target) {
<<<<<<< HEAD
=======
    const elHtml = document.querySelector("html");
>>>>>>> c474cabc0c44aae95ef168a374292588f66187be
    if (target.classList.contains("close") || !target.classList.length) {
      target.classList.remove("close");
      target.classList.add("open");
      elHtml.style.overflow = "hidden";
      elHtml.scrollTop = 0;
    } else {
      target.classList.remove("open");
      target.classList.add("close");
      elHtml.style.overflow = "auto";
    }
  }
}

export default Navigation;
