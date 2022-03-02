let sounds = ['applause','boo','gasp','tada','victory','wrong']

sounds.forEach(
    sound => {
       var btn = document.createElement('button')
       btn.classList.add('btn')
       btn.innerText = sound

       btn.addEventListener('click', () => {
           stopSong()
           document.getElementById(sound).play()
       })

       document.getElementById('buttons').appendChild(btn)
    }
)

function stopSong() {
    sounds.forEach(
        sound => {
            document.getElementById(sound).pause()
        }
    )
}