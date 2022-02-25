
const mainComponent = function (document) {
    const bodyElement = document.body
    const createMainElement = function(TagNameString,cssClass){
        let currentElement = document.createElement(TagNameString)
        currentElement.className = cssClass
        return currentElement
    }
    const appendToBody = function(Element){
        const body = document.body
        body.appendChild(Element)
    }
   
    const createElementTree = function(){
        const header = createMainElement("header","header")
        const nav = createMainElement("nav","nav")
        const content = createMainElement("div","content")
        appendToBody(header)
        appendToBody(nav)
        appendToBody(content)
    }
    return {
        createElementTree
    }
}(document)


export default mainComponent;