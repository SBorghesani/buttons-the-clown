const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchRequests = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservationRequests) => {
                applicationState.reservations = reservationRequests
            }
        )
}

const applicationState = {
    clowns: [],
    reservations: []
}

//this should say getReservations
export const getRequests = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
    .sort( (firstObject, secondObject) => (firstObject.requestedDate > secondObject.requestedDate) ? 1 : -1 )
}
export const getClowns = () => {
    return applicationState.clowns
}

export const sendRequest = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }

    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}