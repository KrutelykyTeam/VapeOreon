// Хэдер старт

document.querySelector("#settingsbutton").addEventListener("click", () => {
    console.log(true)
    document.querySelector(".settings").classList.add("settings-active")
})
document.querySelector("#mobilesettingsbutton").addEventListener("click", () => {
    document.querySelector(".settings").classList.add("settings-active")
})

document.querySelector(".close-settings").addEventListener("click", () => {
    document.querySelector(".settings").classList.remove("settings-active")
})

document.querySelector("#catalog").addEventListener("click", () => {
    document.querySelector(".catalog").classList.add("catalog-active")
})

document.querySelector("#catalog-mobile").addEventListener("click", () => {
    document.querySelector(".catalog").classList.add("catalog-active")
})

document.querySelector(".close-catalog").addEventListener("click", () => {
    document.querySelector(".catalog").classList.remove("catalog-active")
})

document.querySelector(".lang").addEventListener("click", () => {
    document.querySelector(".lang-select").classList.remove("none")
})

document.querySelector(".close-lang").addEventListener("click", () => {
    document.querySelector(".lang-select").classList.add("none")
})

// Хэдер конец