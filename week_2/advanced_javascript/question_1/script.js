function changeAppearance() {
    var button = document.getElementById("Button")
    button.innerHTML = "Saved"
    button.classList.add('newState')


setTimeout(function() {
    button.innerHTML = "Save"
    button.classList.remove('newState')
}, 4000)
}
