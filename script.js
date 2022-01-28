const playButton = document.querySelector("#play-button")
const text = document.querySelector("#text")
const speed = document.querySelector("#speed")

text.innerHTML = "Krasy, sanuvai priyatni sanishta srida prez noshtha, neka zadachata baide priyatna e leka"
text.style.display = "none"

playButton.addEventListener("click", () =>{
    playText(text.value)
})

function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speed.value || 1
    speechSynthesis.speak(utterance)
}
