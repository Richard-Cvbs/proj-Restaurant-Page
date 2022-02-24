const component1 = function (document) {
    const bodyElement = document.body
    const createElementTree = function(){
        const header = document.createElement('header')
        header.className = "main-header"
        header.textContent = "This is a fine restaurant"
        bodyElement.appendChild(header)
    }
    return {
        createElementTree
    }
}(document)


export default component1;