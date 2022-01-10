class Navigation {
  constructor(navigationItems) {
    this.navigationContainer = document.querySelectorAll(".menu-items");
    this.mobileMenuButton = document.querySelector("#hamburger-button");
    this.mobileMenu = document.querySelector("#float-mobile-menu__container");
    this.navigationItems = navigationItems;
  }

  init() {
    // 1. attach click event in mobile menu visible trigger button.
    this.mobileMenuButton.addEventListener(
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
        elAnchor.href = item.href;

        elList.appendChild(elAnchor);
        menuElementsList.push(elList);
      }

      // append li < a tags into menulists.
      for (let targetContainer of this.navigationContainer) {
        for (let element of menuElementsList) {
          // element deep clone.
          const cloneNode = element.cloneNode(true);
          targetContainer.appendChild(cloneNode);
        }
      }
      menuElementsList = [];
    }
  }

  _handleClickMobileButton() {
    this._handleToggleActions(this.mobileMenuButton);
    this._handleToggleActions(this.mobileMenu);
  }

  _handleToggleActions(target) {
    if (target.classList.contains("close")) {
      target.classList.remove("close");
      target.classList.add("open");
    } else {
      target.classList.remove("open");
      target.classList.add("close");
    }
  }
}

export default Navigation;
