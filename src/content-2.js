import cooking from './cooking.png';
import svgvcook from './img-sgv-cook.svg';

const content2 = (function () {
  const appendToContent = function (Element) {
    const content = document.querySelector('.content');
    content.appendChild(Element);
  };
  const appendToContentUl = function (Element, ulElement) {
    ulElement.appendChild(Element);
  };
  const createImg = function (reference, cssClass) {
    const newImg = new Image();
    newImg.className = cssClass;
    newImg.src = reference;
    return newImg;
  };
  const createTextElement = function (TagNameString, cssClass, Text) {
    const currentElement = document.createElement(TagNameString);
    currentElement.className = cssClass;
    currentElement.textContent = Text;
    return currentElement;
  };
  const createUlElement = function (cssClass) {
    const currentElement = document.createElement('ul');
    currentElement.className = cssClass;
    return currentElement;
  };
  const createLiElement = function (cssClass, Text) {
    const currentElement = document.createElement('li');
    currentElement.className = cssClass;
    currentElement.textContent = Text;
    return currentElement;
  };
  const createContentUl = function () {
    const listCont = createUlElement('content-listCont');
    const listElement1 = createLiElement('content-listItem', 'Stake');
    const listElement2 = createLiElement('content-listItem', 'Various Styles of Shrimp');
    const listElement3 = createLiElement('content-listItem', 'Coctails');
    const listElement4 = createLiElement('content-listItem', 'Shells');
    const listElement5 = createLiElement('content-listItem', 'Fish Tacos');
    const listElement6 = createLiElement('content-listItem', 'Ceviche');
    const listElement7 = createLiElement('content-listItem', 'Fish Stake');
    const listElement8 = createLiElement('content-listItem', 'and Lobster!');
    appendToContentUl(listElement1, listCont);
    appendToContentUl(listElement2, listCont);
    appendToContentUl(listElement3, listCont);
    appendToContentUl(listElement4, listCont);
    appendToContentUl(listElement5, listCont);
    appendToContentUl(listElement6, listCont);
    appendToContentUl(listElement7, listCont);
    appendToContentUl(listElement8, listCont);
    return listCont;
  };
  const createContent = function () {
    const cookingImg = createImg(cooking, 'content-cooking');
    const contentUL = createContentUl();
    const cookImg = createImg(svgvcook, 'content-cookImg');
    appendToContent(cookingImg);
    appendToContent(contentUL);
    appendToContent(cookImg);
  };
  return {
    createContent,
  };
}());

export default content2;
