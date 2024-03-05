import React, { useEffect, useState } from 'react'
import { Youtube_API } from '../utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [video,setVideo] = useState([])

    useEffect(()=>{
   getVideos();
    },[]);

    const getVideos = async() =>{

        const data = await fetch(Youtube_API)

        const json = await data.json();
        //  console.log(json.items)
        setVideo(json.items);

    }
  return (
    <div className='flex flex-wrap'>
        {video.map((video) => ( <Link to= {"/watch?v=" + video.id}><VideoCard  key= {video.id} info ={video}/> </Link>))}
     
    </div>
  )
}

export default VideoContainer
