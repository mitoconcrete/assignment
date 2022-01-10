import { _debounce } from "../common/helper.js";

class ArticleItems {
  constructor(articles) {
    this.elArticleContainer = document.getElementById(
      "main__item-container--article-items"
    );
    this.monoArticleWidth = 0;
    this.rows = 1;
    this.columns = 1;
    this.articles = articles;
  }

  init() {
    // for detect initial screen width.
    this._calcualates();

    // for detect resize screen width.
    window.addEventListener(
      "resize",
      _debounce(this._calcualates.bind(this), 500)
    );
  }

  async _calcualates() {
    await this._calculateMonoArticleSize();
    await this._setArticleValues();
  }

  _calculateMonoArticleSize() {
    // article contant variables
    const MAX_WIDTH = 340; // 최대 너비
    const SIDE_PADDING = 20; // 화면 양옆 패딩값
    const GAP_WIDTH = 10; // 아티클 간 간격
    const SCREEN_WIDTH = this.elArticleContainer.offsetWidth; // 현재 스크린 너비

    // variables for decide article width.
    let monoArticleWidth = 0;
    let columnCnt = 1;
    let isDecidedArticleWidth = false;

    // decide article width.
    while (!isDecidedArticleWidth) {
      const calculatedTargetAreaWidth =
        SCREEN_WIDTH - SIDE_PADDING * 2 - GAP_WIDTH * (columnCnt - 1);
      /* below: debug console
      console.log(
        `${SCREEN_WIDTH} - ${SIDE_PADDING} * 2 = ${calculatedTargetAreaWidth}`
      );*/

      const calculatedArticleWidth = calculatedTargetAreaWidth / columnCnt;
      /*below: debug console
      console.log(
        `${calculatedTargetAreaWidth} / ${columnCnt} = ${calculatedArticleWidth}`
      );*/

      monoArticleWidth = calculatedArticleWidth;

      // 기준점을 지났다면, 아티클 너비를 결정 짓고 반복문을 마무리 한다.
      if (calculatedArticleWidth <= MAX_WIDTH) {
        isDecidedArticleWidth = true;
        break;
      }
      // 기준점을 아직 지나지 않았다면, 열을 하나 증가시켜 다음계산을 실시한다.
      else {
        columnCnt++;
        continue;
      }
    }
    this.columns = columnCnt;
    this.columns = parseInt(this.articles / columnCnt);
    this.monoArticleWidth = monoArticleWidth;
  }

  /*
  helper 2. article 의 값을 셋팅하는 함수입니다.
  article list가 만들어져 있지 않다면, _makeArticle을 이용해 새로운 HTML배열을 만듭니다.
  article list가 만들어져 있다면, 새로할당 된 article 너비를 기존 리스트에 적용시킵니다.
  */
  _setArticleValues() {
    if (!this.articles || !this.articles.length) {
      return;
    }

    // DIFFRENCE POINT : get column, width set into grid columns style.
    this.elArticleContainer.style.gridTemplateColumns = `repeat(${this.columns}, ${this.monoArticleWidth}px)`;

    if (this.elArticleContainer.children.length) {
      for (let articleList of this.elArticleContainer.children) {
        articleList.style.width = this.monoArticleWidth + "px";
      }
    } else {
      for (let article of this.articles) {
        const elArticle = this._makeArticle(article);
        this.elArticleContainer.appendChild(elArticle);
      }
    }
  }

  /*
  helper 3. article area 를 만드는 함수 입니다. 
  주어진 title, description, src에 맞추어 element 를 생성합니다.
  */
  _makeArticle({ title = "Title", description = "Description", src }) {
    const elList = document.createElement("li");
    const elArticle = document.createElement("article");
    const elArticleImageArea = document.createElement("div");
    const elArticleTextArea = document.createElement("div");
    const elArticleTitle = document.createElement("h3");
    const elArticleDescription = document.createElement("p");

    elArticleTitle.innerText = title;
    elArticleDescription.innerText = description;

    if (src) {
      elArticleImageArea.style.backgroundImage = `url(${src})`;
    }
    elArticleImageArea.classList.add("article-item--image-area");

    elArticleTextArea.appendChild(elArticleTitle);
    elArticleTextArea.appendChild(elArticleDescription);
    elArticleTextArea.classList.add("article-item--text-area");

    elArticle.appendChild(elArticleImageArea);
    elArticle.appendChild(elArticleTextArea);

    elList.classList.add("article-item");
    elList.style.width = this.monoArticleWidth + "px";
    elList.appendChild(elArticle);

    return elList;
  }
}

export default ArticleItems;
