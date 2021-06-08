import React from "react";
import "./VideoFooter.css";
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import {Button,Avatar} from "@material-ui/core"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker"
const VideoFooter = ({channel,avatar,song,likes,shares}) =>{
    return(
        <div className="video_foot">
        <div className="foot_txt">
        <Avatar 
            src={avatar}
        />
       <h3> {channel}<span >.</span><Button>Follow</Button></h3>
       </div>


       <div className="foot_ticker">
           <MusicNoteIcon className="ticker_icon"/>
          <Ticker mode="smooth">
           {({index}) =>(
               <>
                   <h1>{song}</h1>
               </>
           )}
           </Ticker>
       </div>
       <div className="footer_icons">
       <div className="icons_left">
       <FavoriteIcon />
       <ModeCommentIcon />
       <SendIcon />
       <MoreHorizIcon />

       </div>

        <div className="icons_right">
        <div className="icons_fin">
            <FavoriteIcon />
            <p>{likes}</p>
        </div>
        <div className="icons_fin">
            <ModeCommentIcon />
            <p>{shares}</p>
        </div>

        </div>

       

       </div>
        
 </div>
        



    );

};
export default VideoFooter;