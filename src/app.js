import Navigation from "./components/Navigation.js";
import ArticleItems from "./components/ArticleItems.js";

const menus = [
  { href: "introduce", label: "제품소개" },
  { href: "product", label: "주요기능" },
  { href: "contact", label: "고객지원" },
];

const navigation = new Navigation(menus);
navigation.init();

const articleItems = new ArticleItems();
articleItems.init();
