const music = new Audio('audio/Ngày đầu tiên.mp3')
// music.play()

const songs = [
    {
        id: 1,
        songName: `Ngày Đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "img/Đức Phúc.jpg"
    },
    {
        id: 2,
        songName: `Chạy về khóc với anh<br>
         <div class="subtitle">Erik</div>`,
        poster: "img/Erik.jpg"
    },
    {
        id: 1,
        songName: `Ngày Đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "img/Đức Phúc.jpg"
    },
    {
        id: 1,
        songName: `Ngày Đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "img/Đức Phúc.jpg"
    },
    {
        id: 1,
        songName: `Ngày Đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "img/Đức Phúc.jpg"
    },
    {
        id: 1,
        songName: `Ngày Đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "img/Đức Phúc.jpg"
    },
]



// scroll popular
let pop_song_left = document.getElementById('pop_song_left')
let pop_song_right = document.getElementById('pop_song_right')
let pop_song = document.getElementsByClassName('pop_song')[0]


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330
})
// scroll artists
let pop_art_left = document.getElementById('pop_art_left')
let pop_art_right = document.getElementById('pop_art_right')
let Artists_bx = document.getElementsByClassName('Artists_bx')[0]


pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft += 330
})
pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -= 330
})
