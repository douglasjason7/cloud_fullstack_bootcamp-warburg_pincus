// importar projeto do firebase

import app from './firebase.js'

import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const db = getFirestore(app)

// função que irá definir o elemento que será o centro da explosão dos confetes

function showConfet(id) {
    const element = document.getElementById(id)
    party.confetti(element)
}

// função que atualiza o placar

function updateScore(id, br, other) {
    const element = document.getElementById(id)
    element.innerText = `${br} x ${other}`
}

// função de toca o audio do narrador a cada gol do BR

function throwGalvao() {
    const audio = new Audio('assets/audio/gol.mp3')
    audio.playbackRate = 2
    audio.play()
}

// mostra emoji no rodapé da página

function showEmoji() {
    const emoji = document.getElementById('emoji-gol')
    emoji.classList.add('show')
    setInterval(() => {
        emoji.classList.remove('show')
    }, 6000)
}

onSnapshot(doc(db, "matches", "br-01"), (doc) => {
    const { br, other } = doc.data()

    updateScore('br-01', br, other)

    if (br > 0) {
        showConfet('br-01')
        throwGalvao()
        showEmoji()
    }
});

// // função que irá definir o elemento no qual irá originar os confetes

// function showConfet(id) {
//     const element = document.getElementById(id)
//     party.confetti(element)
// }

// // definir intervalo e mostrar a explosão dos confetes

// setInterval(() => {
//     showConfet('br-01')
// }, 2000
// )