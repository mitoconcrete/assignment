import Navigation from "./components/Navigation.js";

const menus = [
  { href: "introduce", label: "introduce" },
  { href: "product", label: "product" },
  { href: "contact", label: "contact" },
];

const navigation = new Navigation(menus);
navigation.init();
