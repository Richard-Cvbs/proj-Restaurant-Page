import cooking from "./cooking.png"
import svgvcook from "./img-sgv-cook.svg"
const content3 = function (){
    const appendToContent = function(Element){
        const content = document.querySelector(".content")
        content.appendChild(Element)
    }
    const appendToContainer = function(Element,container){
        container.appendChild(Element)
    }
    const appendToContentUl = function (Element, ulElement){
        ulElement.appendChild(Element)
    }
    const createImg = function(reference, cssClass){
        const newImg = new Image();
        newImg.className = cssClass
        newImg.src = reference
        return newImg
    }
    const createTextElement = function (TagNameString,cssClass,Text){
    let currentElement = document.createElement(TagNameString)
    currentElement.className = cssClass
    currentElement.textContent = Text
    return currentElement
    }  
    const createUlElement = function (cssClass){
        let currentElement = document.createElement("ul")
        currentElement.className = cssClass
        return currentElement
    }
    const createLiElement = function (cssClass,Text){
        let currentElement = document.createElement('li')
        currentElement.className = cssClass
        currentElement.textContent = Text
        return currentElement
    }
    const createContentUl = function (){
        const listCont = createUlElement('content-listCont')
        const listElement1 = createLiElement('content-listItem','Town Square 2546')
        const listElement2 = createLiElement('content-listItem','reallyniceplaceandlobster.com')
        const listElement3 = createLiElement('content-listItem','reallyniceplaceandlobster@email.com')
        const listElement4 = createLiElement('content-listItem','555-555-5555')
        appendToContentUl(listElement1,listCont)
        appendToContentUl(listElement2,listCont)
        appendToContentUl(listElement3,listCont)
        appendToContentUl(listElement4,listCont)
        return listCont
    }
    const createContainerElement = function (){
        let newContainer = document.createElement('div')
        newContainer.className = "content-textContainer"
        return newContainer
    }
    const createContent = function(){
        const cookingImg = createImg(cooking, "content-cooking")
        const container = createContainerElement()
        const contentTitle = createTextElement('h2','content-title','You can find us at :')
        const contentUL = createContentUl()
        const contentFooter = createTextElement('div','content-footer','Call Us for a Home Order!')
        const cookImg = createImg(svgvcook, 'content-cookImg')
        appendToContainer(contentTitle,container)
        appendToContainer(contentUL,container)
        appendToContainer(contentFooter,container)
        appendToContent(cookingImg)
        appendToContent(container)
        appendToContent(cookImg)
        return
    }
    return {
        createContent
    }
}()

export default content3
/*
Town Square 2546
reallyniceplaceandlobster.com
reallyniceplaceandlobster@email.com
555-555-5555
*/