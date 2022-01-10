import Navigation from "./components/Navigation.js";
import ArticleItems from "./components/ArticleItems.js";
import { dummyArticleDataMaker } from "./common/dummy.js";

const ARTICLE_COUNT = 7;
const articles = dummyArticleDataMaker(ARTICLE_COUNT);

const menus = [
  { href: "introduce", label: "제품소개" },
  { href: "product", label: "주요기능" },
  { href: "contact", label: "고객지원" },
];

const navigation = new Navigation(menus);
navigation.init();

const articleItems = new ArticleItems(articles);
articleItems.init();

console.log("welcome! this is 'simple-grid' branch.");
console.log("This branch use 'Grid' attribute.");
console.log("Text Length effected only same line.");
