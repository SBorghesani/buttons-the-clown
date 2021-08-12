import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"


export const ButtonsTheClown = () => {
    return `
    <h1>Buttons and Lollipop the Clowns</h1>
    <section class="reservationForm">
    ${ReservationForm()}
    </section>

    <section class="reservations">
    <h2>Reservations</h2>
    ${Reservations()}
    </section>
    `
}