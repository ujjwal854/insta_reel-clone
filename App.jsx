import React, { useEffect, useState } from "react";
  
import "./App.css";
import VideoCard from "./VideoCard"
import db from "./Firebase";

const App = () =>{
    const [reels,setReels]=useState([]);
    useEffect(()=>{
        db.collection('reels').onSnapshot(snapshot=>(
            setReels(snapshot.docs.map((doc)=>({
                
                id:doc.id,
                data:doc.data()})))
        ))
            
            
         
        

    },[])

    return(
        <div className="app">
        

        <div className="app_top">

        <img className="app_logo"
            src="https://cdn.exclaimer.com/Handbook%20Images/instagram-icon_square_64x64.png?_ga=2.192634538.1473843996.1622528122-1088718851.1622528122"
        

         alt="Insta_logo"  
        
        />
         <h1>Reels</h1>
         


        </div>
        
        <div className="app_videos">
        {reels.map(({id,data:{channel,avatar,song,url,likes,shares}})=>(
         <VideoCard

            key={id}
            channel={channel}
            avatar={avatar}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
    
            
        
        
               />))}
               
               
        </div>
        
        

        </div>




    );

};
export default App;