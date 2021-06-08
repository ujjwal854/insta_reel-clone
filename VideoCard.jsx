import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader"
import VideoFooter from "./VideoFooter"

const VideoCard = ({channel,avatar,song,url,likes,shares}) =>{
    const [playing, setPlaying]= useState("false")
    const videoref= useRef(null);
    const onPress = () =>{
        if (playing){
            videoref.current.pause();
            setPlaying(false);

        }else{
            videoref.current.play();
            setPlaying(true);

        };

    };
    return(
    <div className="video_card">
    <VideoHeader/>

    <video
        className="video_player"
        loop
        ref={videoref}
        onClick={onPress}
        src={url}
        alt="reels"
    
    />
    <VideoFooter
        channel={channel}
        avatar={avatar}
        song={song}
        likes={likes}
        shares={shares}
    />

    </div>);

};
export default VideoCard;