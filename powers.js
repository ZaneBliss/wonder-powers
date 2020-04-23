document.querySelector("#activate-flight").addEventListener("click", function () {
    flightHandlerFunction("#flight")
})

document.querySelector("#activate-mindreading").addEventListener("click", function () {
    flightHandlerFunction("#mindreading")
})

document.querySelector("#activate-xray").addEventListener("click", function () {
    flightHandlerFunction("#xray")
})

document.querySelector("#activate-all").addEventListener("click", function () {
    flightHandlerFunction("enableAll")
})

document.querySelector("#deactivate-all").addEventListener("click", function () {
    flightHandlerFunction("disableAll")
})


function enableClass (selectedEl) {
    selectedEl.classList.remove("disabled")
    selectedEl.classList.add("enabled")
}
function disableClass (selectedEl) {
    selectedEl.classList.remove("enabled")
    selectedEl.classList.add("disabled")
}

function flightHandlerFunction(element) {
    selectedEl = document.querySelectorAll("section")
    if (element === "enableAll") {
        for (el of selectedEl) {
            enableClass(el)
        }
    } else if (element === "disableAll") {
        for (el of selectedEl) {
            disableClass(el)
        }
    } else {
        selectedEl = document.querySelector(element)
        enableClass(selectedEl)
    }
}