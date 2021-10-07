import { getClowns } from "./dataAccess.js"


export const Clowns = () => {
    const clowns = getClowns()
    return `
    <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${
        clowns.map(
            clown => {
                return `<option value="${clown.id}--${request.id}">${clown.name}</option>`
            }
            ).join("")
        }
        </select>
        `
        
}