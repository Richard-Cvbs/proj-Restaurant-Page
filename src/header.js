import Restaurant_Icon from './Restaurant_Icon.svg';

const headerComp = function (document){
const createImg = function(){
    const newImg = new Image();
    newImg.className = Restaurant_Icon
    newImg.src = Restaurant_Icon
    return newImg
}
const appendToHeader = function(Element){
    let header = document.querySelector('.header')
    header.appendChild(Element)
}
const createTextElement = function (TagNameString,Text){
    let currentElement = document.createElement(TagNameString)
    currentElement.className = TagNameString
    currentElement.textContent = Text
    return currentElement
}
const createHeader = function(){
    const icon = createImg()
    const Title = createTextElement("h1","Really Nice Place & Lobster")
    const CornerText = createTextElement("div","Restaurant")
    appendToHeader(icon)
    appendToHeader(Title)
    appendToHeader(CornerText)


    }
    return{
        createHeader
    }
}(document)

export default headerComp;