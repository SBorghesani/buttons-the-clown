import { getRequests, deleteRequest, } from "./dataAccess.js"
import { Clowns } from "./Clowns.js"
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
     click => {
        if (click.target.id.startsWith("request--")) {
            const [,requestId] = click.target.id.split("--")
            deleteRequest(parseInt(requestId))
        }
    }
)

// const ClownOptions = () => {
    //      `
    //     <select class="clowns" id="clowns">
    //     <option value="">Choose</option>
    //     ${
        //         clowns.map(
            //             clown => {
                //                 return `<option value="${clown.id}--${request.id}">${clown.name}</option>`
                //             }
                //         ).join("")
                //     }
                // </select>`
                // }
                
                const listedRequests = (request) => {
                    return `
                    
                    
                    <li>
        ${request.parentName} has reserved ${request.requestedDate} for ${request.childName} and 
        ${parseInt(request.childCount) -1} friends.
        
        <button class="request--delete" 
            id="request--${request.id}">
        Deny
        </button>
        </li>
        ${Clowns()}
        `
        
}

export const Reservations = () => {
    const requests = getRequests()

    let html = `
    <ul>
    ${requests.map(listedRequests).join("")}
    </ul>
    `
    return html
}