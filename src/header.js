import Restaurant_Icon from './Restaurant_Icon.svg';
import sgvlobster from './img-sgv-lobster.svg';


const headerComp = function (document){
const createImg = function(reference, cssClass){
    const newImg = new Image();
    newImg.className = cssClass
    newImg.src = reference
    return newImg
}
const appendToHeader = function(Element){
    let header = document.querySelector('.header')
    header.appendChild(Element)
}
const createTextElement = function (TagNameString,cssClass,Text){
    let currentElement = document.createElement(TagNameString)
    currentElement.className = cssClass
    currentElement.textContent = Text
    return currentElement
}
const createHeader = function(){
    const icon = createImg(Restaurant_Icon,"header-icon")
    const lobster = createImg(sgvlobster,"header-lobster")
    const Title = createTextElement("h1","header-title","Really Nice Place \n&\n Lobster")
    const CornerText = createTextElement("div","header-cornerText","Restaurant")
    appendToHeader(icon)
    appendToHeader(lobster)
    appendToHeader(Title)
    appendToHeader(CornerText)
    }
    return{
        createHeader
    }
}(document)

export default headerComp;