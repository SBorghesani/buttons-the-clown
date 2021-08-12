import { ButtonsTheClown } from "./ButtonsTheClown.js"
import { fetchRequests } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderHTML()  
    }
)

const renderHTML = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
        )
    

}

    
    renderHTML()