const btnShow = document.getElementById("btnShow")
const audio = new Audio("assets/greetings.mp3")

btnShow.addEventListener("click", () => {
    console.log("yhehehe")
    document.getElementById("greet").style.display = "block"
    audio.play()
})

