const music = new Audio('audio/Ngày đầu tiên.mp3')
// music.play()

const songs = [{
        id: "1",
        songName: `Ngày Đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "./img/Đức Phúc.jpg",
    },
    {
        id: "2",
        songName: `Chạy về khóc với anh<br>
         <div class="subtitle">Erik</div>`,
        poster: "./img/Erik.jpg",
    },
    {
        id: "3",
        songName: `Có hẹn với thanh xuân<br>
         <div class="subtitle">Monstar</div>`,
        poster: "./img/Monstar.jpg",
    },
    {
        id: "4",
        songName: `Đường tôi chở em về<br>
         <div class="subtitle">Bùi Trường Linh</div>`,
        poster: "./img/Bùi Trường Linh.jpg",
    },
    {
        id: "5",
        songName: `Thuận theo ý trời<br>
         <div class="subtitle">Bùi Anh Tuấn</div>`,
        poster: "./img/Bùi Anh Tuấn.jpg",
    },
    {
        id: "6",
        songName: `Vì mẹ anh bắt chia tay<br>
         <div class="subtitle">Miu Lê</div>`,
        poster: "./img/Miu Lê.jpg",
    },
    {
        id: "7",
        songName: `Ngày Đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "./img/Đức Phúc.jpg",
    },
    {
        id: "8",
        songName: `Chạy về khóc với anh<br>
         <div class="subtitle">Erik</div>`,
        poster: "./img/Erik.jpg",
    },
    {
        id: "9",
        songName: `Có hẹn với thanh xuân<br>
         <div class="subtitle">Monstar</div>`,
        poster: "./img/Monstar.jpg",
    },
    {
        id: "10",
        songName: `Đường tôi chở em về<br>
         <div class="subtitle">Bùi Trường Linh</div>`,
        poster: "./img/Bùi Trường Linh.jpg",
    },
    {
        id: "11",
        songName: `Thuận theo ý trời<br>
         <div class="subtitle">Bùi Anh Tuấn</div>`,
        poster: "./img/Bùi Anh Tuấn.jpg",
    },
    {
        id: "12",
        songName: `Vì mẹ anh bắt chia tay<br>
         <div class="subtitle">Miu Lê</div>`,
        poster: "./img/Miu Lê.jpg",
    },
    {
        id: "13",
        songName: `Ngày Đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "./img/Đức Phúc.jpg",
    },
    {
        id: "14",
        songName: `Thuận theo ý trời<br>
         <div class="subtitle">Bùi Anh Tuấn</div>`,
        poster: "./img/Bùi Anh Tuấn.jpg",
    },
    {
        id: "15",
        songName: `Có hẹn với thanh xuân<br>
         <div class="subtitle">Monstar</div>`,
        poster: "./img/Monstar.jpg",
    },
    {
        id: "16",
        songName: `Đường tôi chở em về<br>
         <div class="subtitle">Bùi Trường Linh</div>`,
        poster: "./img/Bùi Trường Linh.jpg",
    },
    {
        id: "17",
        songName: `Vì mẹ anh bắt chia tay<br>
         <div class="subtitle">Miu Lê</div>`,
        poster: "./img/Miu Lê.jpg",
    },
]
// popular song
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

// playing music
let masterPlay = document.getElementById('masterPlay')
let wave = document.getElementById('wave')

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play()
        wave.classList.add('active1')
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    }else{
        music.pause()
        wave.classList.remove('active1')
        masterPlay.classList.add('fa-play')
        masterPlay.classList.remove('fa-pause')
    }
})


let index = 0

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        let abc = 
    })
})




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
