const navComp = (function (document) {
  const appendToNav = function (Element) {
    const nav = document.querySelector('.nav');
    nav.appendChild(Element);
  };
  const createBttnElement = function (TagName, cssClass, Text) {
    const currentElement = document.createElement(TagName);
    currentElement.className = cssClass;
    currentElement.textContent = Text;
    currentElement.setAttribute('type', 'button');
    currentElement.setAttribute('value', Text);
    return currentElement;
  };
  const createNav = function () {
    const aboutUs = createBttnElement('button', 'nav-button', 'About Us');
    const menu = createBttnElement('button', 'nav-button', 'Menu');
    const Contact = createBttnElement('button', 'nav-button', 'Contact');
    appendToNav(aboutUs);
    appendToNav(menu);
    appendToNav(Contact);
  };
  return {
    createNav,
  };
}(document));
export default navComp;
