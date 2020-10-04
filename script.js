const songs = [
    "15. Wilson Pickett - Hey Jude.mp3",
    "19. Rod Stewart - The First Cut Is the Deepest.mp3",
    "28. Otis Redding - Stand by Me.mp3",
    "32. Aretha Franklin - Respect.mp3",
    "48. The Pogues - Dirty Old Town.mp3"
]

const createSonglist = () => {
    const list = document.createElement('ol')

    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)

    }
    return list
}

document.getElementById('songList').appendChild(createSonglist())

songList.onclick = (e) => {
    const clickedItem = e.target
    const source = document.getElementById('source')
    source.src= 'songs/' + clickedItem.innerText
    document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
    document.getElementById('currentSong').innerText = clickedItem.innerText
    
    player.load()
    player.play()
}

const playAudio = () => {
    if(player.readyState) {
        player.play()
    }
}

const pauseAudio = () => {
    player.pause()
}

const slider = document.getElementById("volumeSlider")
slider.oninput = (e) => {
    const volume = e.target.value
    player.volume = volume
}

const updateProgress = () => {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById('progress')

        progressBar.value = (player.currentTime / player.duration) * 100
    }
    
}