const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeSlider = document.getElementById('volume'); 


const songs = [ 
    'https://pagalnew.com/download128/3539',//Musafir
    'https://www.pagalvvorld.com/wp-content/uploads/2023/08/Some-Of-Us.mp3',
    'https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/07/J_Cole_-_Love_Yourz.mp3?_=2',
    'https://pwdown.info/113206/03.%20Aaj%20Kal%20Zindagi.mp3',
    'https://cdnsongs.com/music/data/Single_Track/202308/One_Love/128/One_Love_1.mp3',
    'https://paglasongs.com/files/download/id/14041',//iraaday
    'https://cdnsongs.com/music/data/Punjabi/202305/Never_Before_EP/128/Rank_1_1.mp3',
    'https://cdnsongs.com/music/data/Single_Track/202306/Check_It_Out/128/Check_It_Out_1.mp3', 
    'https://cdnsongs.com/music/data/Single_Track/202302/Mathi_Mathi/128/Mathi_Mathi_1.mp3',
    'https://cdnsongs.com/music/data/Single_Track/201901/She_Dont_Know_Blessed/128/She_Dont_Know_Blessed_1.mp3',
]

let currentSongIndex = 0;
let isPlaying = false;

function playSong() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    playPauseButton.innerHTML = '<img src="https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/pause.png" width="38.5px" alt="">';
    isPlaying = true;
}

function playMe(index) {
    audioPlayer.src = songs[index];
    audioPlayer.play();
    playPauseButton.innerHTML = '<img src="https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/pause.png" width="38.5px" alt="">';
    isPlaying = true;
}


playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<img src="https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/play.png" width="40px" alt="">';
    } else {
        audioPlayer.play();
        playPauseButton.innerHTML = '<img src="https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/pause.png" width="38.5px" alt="">';
    }
    isPlaying = !isPlaying;
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong();
});

const song = document.getElementsByClassName("song")
// console.log(song[1])
// song[0].onclick = () =>{
//     currentSongIndex = 0
//     playSong();
// }
// song[1].onclick = () =>{
//     currentSongIndex = 1
//     playSong();
// }
// song[2].onclick = () =>{
//     currentSongIndex = 2
//     playSong();
// }
// song[4].onclick = () =>{
//     currentSongIndex = 4
//     playSong();
// }
// song[5].onclick = () =>{
//     currentSongIndex = 5
//     playSong();
// }
// song[6].onclick = () =>{
//     currentSongIndex = 6
//     playSong();
// }
// song[7].onclick = () =>{
//     currentSongIndex = 7
//     playSong();
// }
// song[8].onclick = () =>{
//     currentSongIndex = 8
//     playSong();
// }
// song[9].onclick = () =>{
//     currentSongIndex = 9
//     playSong();
// }
// song[10].onclick = () =>{
//     currentSongIndex = 
//     playSong();
// }
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
});

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});

playSong();

nextButton.onclick = () =>{
    audioPlayer.src.textContent = songs[6];
}