const module1 = (function(){
    const fistdiv = function (){
    let currentNode = document.createElement('div')
    currentNode.className = ('content')
    currentNode.textContent = "Testing 3"
    return currentNode
    }
    return {
        fistdiv
    }
})(document)

export default module1