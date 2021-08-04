

const mainContainer = document.querySelector("#container")

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