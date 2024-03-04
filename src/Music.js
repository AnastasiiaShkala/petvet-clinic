import { useState, useRef } from "react";
import './App.css';
import music from './assets/music.mp3';
import imgPlay from './assets/play.png'

function Music() {
    const [musicPlay, setMusicPlay] = useState(true);
    const refAudio = useRef()
    const handlePlay = () => {
        setMusicPlay(!musicPlay)
        musicPlay ? refAudio.current.play() : refAudio.current.pause()
    }
return (
<div className='call-us-btn'>
    <audio
        src={music}
        loop="loop"
        ref={refAudio}
    />
    <button className="music-btn" onClick={handlePlay}>
        <img src={imgPlay} alt='Play Icon' className='icon-img' />
        {musicPlay ? "Pause" : "Play"}
    </button>
</div>
);
}
export default Music;