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
        songName: `Thế Giới trong em<br>
         <div class="subtitle">Hương Ly</div>`,
        poster: "./img/Hương Ly.jpg",
    },
    {
        id: "8",
        songName: `Có chơi có chịu<br>
         <div class="subtitle">Karik</div>`,
        poster: "./img/Karik.jpeg",
    },
    {
        id: "9",
        songName: `Như bến đợi đò<br>
         <div class="subtitle">Hana Cẩm tiên</div>`,
        poster: "./img/Hana.jpg",
    },
    {
        id: "10",
        songName: `Đồng Thoại<br>
         <div class="subtitle">Đông Nhi</div>`,
        poster: "./img/Đông Nhi.jpg",
    },
    {
        id: "11",
        songName: `Xin má rước dâu<br>
         <div class="subtitle">Diệu Kiên</div>`,
        poster: "./img/Diệu Kiên.jpg",
    },
    {
        id: "12",
        songName: `Rung động<br>
         <div class="subtitle">Dương</div>`,
        poster: "./img/Dương.jpg",
    },
    {
        id: "13",
        songName: `Sự thật sau một lời hứa<br>
         <div class="subtitle">Chi Dân</div>`,
        poster: "./img/Chi Dân.jpg",
    },
    {
        id: "14",
        songName: `Dịu dàng em đến<br>
         <div class="subtitle">Erik</div>`,
        poster: "./img/ERik1.jpg",
    },
    {
        id: "15",
        songName: `Yêu em hơn mỗi ngày<br>
         <div class="subtitle">Andiez</div>`,
        poster: "./img/Andiez.jpg",
    },
    {
        id: "16",
        songName: `Mưa rơi vào phòng<br>
         <div class="subtitle">Khởi My</div>`,
        poster: "./img/Khởi My.jpg",
    },
    {
        id: "17",
        songName: `Là ai từ bỏ là ai vô tình<br>
         <div class="subtitle">Hương Ly</div>`,
        poster: "./img/Hưo.jpg",
    },
    {
        id: "18",
        songName: `Xin má rước dâu<br>
         <div class="subtitle">Diệu Kiên</div>`,
        poster: "./img/Diệu Kiên.jpg",
    },
    {
        id: "19",
        songName: `Xin má rước dâu<br>
         <div class="subtitle">Diệu Kiên</div>`,
        poster: "./img/Diệu Kiên.jpg",
    },
    {
        id: "20",
        songName: `Xin má rước dâu<br>
         <div class="subtitle">Diệu Kiên</div>`,
        poster: "./img/Diệu Kiên.jpg",
    }
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
let poster_master_play = document.getElementById('poster_master_play')
let title = document.getElementById('title')
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el) => {
        index = el.target.id
        music.src = `./audio/${index}.mp3`
        poster_master_play.src = `./img/${index}.jpg`
        music.play()
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')

        let songTitles = songs.filter((els) =>{
            return els.id == index
        })
        songTitles.forEach(elss =>{
            let { songName } = elss
            title.innerHTML = songName
        })
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
