
const mainComponent = function (document) {
    const bodyElement = document.body
    const createMainElement = function(TagNameString){
        let currentElement = document.createElement(TagNameString)
        currentElement.className = TagNameString
        return currentElement
    }
    const appendToBody = function(Element){
        const body = document.body
        body.appendChild(Element)
    }
    const createElementTree = function(){
        const header = createMainElement("header")
        const nav = createMainElement("nav")
        const content = createMainElement("content")
        appendToBody(header)
        appendToBody(nav)
        appendToBody(content)
    }
    return {
        createElementTree
    }
}(document)


export default mainComponent;