import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    clickEvent => {
        if (clickEvent.target.id === "submitReservationRequest") {
            const UserParentName = document.querySelector("input[name='parentName']").value
            const UserChildName = document.querySelector("input[name='childName']").value
            const UserChildCount = document.querySelector("input[name='childCount']").value
            const UserAddress = document.querySelector("input[name='address']").value
            const UserDuration = document.querySelector("input[name='duration']").value
            const UserRequestedDate = document.querySelector("input[name='requestedDate']").value

            const dataToSendToAPI = {
                parentName: UserParentName,
                childName: UserChildName,
                childCount: UserChildCount,
                address: UserAddress,
                duration: UserDuration,
                requestedDate: UserRequestedDate
            }
            sendRequest(dataToSendToAPI)
        }
    }
)



export const ReservationForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childCount">Number of Children</label>
            <input type="number" name="childCount" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="duration">Duration of Event</label>
            <input type="number" name="duration" class="input" />
        </div>
        <div class="field">
            <label class="label" for="requestedDate">Requested Date</label>
            <input type="date" name="requestedDate" class="input" />
        </div>

        <button class="button" id="submitReservationRequest">Submit Reservation Request</button>
    `
    return html
}