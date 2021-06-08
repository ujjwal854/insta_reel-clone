import React from "react";
import "./VideoHeader.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

const VideoHeader = () =>{
    return(
        <div className="VideoHeader">
        <ArrowBackIosIcon />
        <h2 >Reels</h2>
        <CameraAltOutlinedIcon
            
        />

        </div>
    );

};
export default VideoHeader;