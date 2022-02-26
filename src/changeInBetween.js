import content1 from './content-1';
import content2 from './content-2';
import content3 from './content-3';

const changeContent = function(){
    const removeAllNodes = function(){
        let currentContent= document.querySelector('.content')
        while (currentContent.firstChild) {
            currentContent.removeChild(currentContent.lastChild);
    }
}
    const createNewContent = function (value){
        console.log(value)
        if (value === "About Us"){
            content1.createContent()
        }
        if (value === "Menu"){
            content2.createContent()
        }
        if (value === "Contact"){
            content3.createContent()
        }
    }
    const bttnListen = function (){
        const buttons = document.querySelectorAll('.nav-button')
        buttons.forEach(button =>{
            button.addEventListener('click',e=>{
                removeAllNodes()
                createNewContent(e.target.value)
            })
        })
    }
    return{
        bttnListen
    }
}()
export default changeContent