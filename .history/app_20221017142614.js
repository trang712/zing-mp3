const music = new Audio('audio/12.mp3')
// music.play()

const songs = [{
        id: "1",
        songName: `Anh Đã lạc vào<br>
         <div class="subtitle">Green</div>`,
        poster: "./img/1.jpg",
    },
    {
        id: "2",
        songName: `Chạy về khóc với anh<br>
         <div class="subtitle">Erik</div>`,
        poster: "./img/2.jpg",
    },
    {
        id: "3",
        songName: `Có chơi có chịu<br>
         <div class="subtitle">Karik</div>`,
        poster: "./img/3.jpg",
    },
    {
        id: "4",
        songName: `Có hẹn với thanh xuân<br>
         <div class="subtitle">Monstar</div>`,
        poster: "./img/4.jpg",
    },
    {
        id: "5",
        songName: `Dịu dàng em đến<br>
         <div class="subtitle">Erik</div>`,
        poster: "./img/5.jpg",
    },
    {
        id: "6",
        songName: `Đồng thoại<br>
         <div class="subtitle">Đông Nhi</div>`,
        poster: "./img/6.jpg",
    },
    {
        id: "7",
        songName: `Đường tôi chở em về<br>
         <div class="subtitle">Bùi Trường Linh</div>`,
        poster: "./img/7.jpg",
    },
    {
        id: "8",
        songName: `Em khác gì hoa<br>
         <div class="subtitle">Lil Z</div>`,
        poster: "./img/8.jpg",
    },
    {
        id: "9",
        songName: `Hạt giấy<br>
         <div class="subtitle">Hải Băng</div>`,
        poster: "./img/9.jpg",
    },
    {
        id: "10",
        songName: `Là ai từ bỏ là ai vô tình<br>
         <div class="subtitle">Hương Ly</div>`,
        poster: "./img/10.jpg",
    },
    {
        id: "11",
        songName: `Mưa rơi vào phòng<br>
         <div class="subtitle">Khởi My</div>`,
        poster: "./img/11.jpg",
    },
    {
        id: "12",
        songName: `Ngày đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "./img/12.jpg",
    },
    {
        id: "13",
        songName: `Như bến đợi đò<br>
         <div class="subtitle">Hana Cẩm Tiên</div>`,
        poster: "./img/13.jpg",
    },
    {
        id: "14",
        songName: `Rung động<br>
         <div class="subtitle">Dương</div>`,
        poster: "./img/14.jpg",
    },
    {
        id: "15",
        songName: `Sự thật sau một lời hứa<br>
         <div class="subtitle">Chi Dân</div>`,
        poster: "./img/15.jpg",
    },
    {
        id: "16",
        songName: `Thế giới trong em<br>
         <div class="subtitle">Hương Ly</div>`,
        poster: "./img/16.jpg",
    },
    {
        id: "17",
        songName: `Thuận theo ý trời<br>
         <div class="subtitle">Bùi Anh Tuấn</div>`,
        poster: "./img/17.jpg",
    },
    {
        id: "18",
        songName: `Vì mẹ anh bắt chia tay<br>
         <div class="subtitle">Miu Lê</div>`,
        poster: "./img/18.jpg",
    },
    {
        id: "19",
        songName: `Xin má rước dâu<br>
         <div class="subtitle">Diệu Kiên</div>`,
        poster: "./img/19.jpg",
    },
    {
        id: "20",
        songName: `Yêu em hơn mỗi ngày<br>
         <div class="subtitle">Andiez</div>`,
        poster: "./img/20.jpg",
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

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('fa fa-play')
        el.classList.remove('fa fa-pause')
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)'
    })
}

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
        makeAllBackground()
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)"
        makeAllplays()
        el.target.classList.remove('fa fa-play')
        el.target.classList.add('fafa-pause')
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
