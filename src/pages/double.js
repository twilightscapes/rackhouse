import React, { useState, useRef } from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from "react-player/lazy";
import { ImPlay } from "react-icons/im"
import { StaticImage } from "gatsby-plugin-image"
import Controls from "../components/Controls";
import {Link} from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/layout";
const CustomBox = styled.div`

.wrap-element {
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
  aspect-ratio: 16 / 9;
  z-index:0;
  max-width:100%;
  max-height:75vh !important;
}
.wrap-element iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%; 
  left: -100%; 
  border: 0;
  overflow:hidden;
}



// .pagination{ position:relative; top:-205px;}


@media (max-width: 48em) {
  .wrap-element {
    padding-bottom: 0;
    height:300px;
    overflow:visible;
    border:0px solid red;
  }
  .pagination{maxWidth:'100vw'}
}


@media (min-width: 1300px) {
  .pagination{position:relative; top:-185px;}
  }


`

function Double() {
  const [state, setState] = useState({
    playing: true,
    controls: true,
    light: false,
    muted: false,
    loop: true,
  });

  // const playerRef = useRef(null);
  const controlsRef = useRef(null);

  const {
    playing,
    controls,
    light,
    muted,
    loop,
    playbackRate,
    pip,
    played,
    seeking,
    volume,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const { iconimage } = useSiteMetadata()

  return (

    <CustomBox>
<Layout>


      <div className="wrap-element" style={{overflow:'hidden'}}>




      <ReactPlayer
            // ref={playerRef}
            style={{position:'', zIndex:'0'}}
            width="100%"
            height="100%"
            // url={iframeUrl}
            url="https://youtu.be/lZzai6at_xA"
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            muted={muted}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, autoplay:1, controls:0, start:0, end:5000, mute:0  }
              },
            }}

          playsinline
            playIcon={
              
              <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'', justifyContent:'center', alignItem:'center', paddingTop:''}}>

        

<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/pulpfiction.jpg" style={{height:'100%', position:'absolute', top:'0', zIndex:'-1'}}  />

{/* <div style={{position:'absolute', width:'100vw', top:'10px', margin:'0 0 0 0', zIndex:'', display:'grid', placeContent:'center', background:'transparent !important',}}>
    <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
  </div> */}



  

            <div style={{display:'grid', placeContent:'center', fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem', width:'100%'}}>Click To Play

    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} /></div>
            {/* </div> */}


       </button>
  
          }
         light="../assets/transparent.png"
          />



<ReactPlayer
         className='frontbg'
         url="https://www.youtube.com/embed/c_V1iD6F1kk"
         width="100%"
         height="100vh"
         playing={true}
            controls={false}
            light={false}
            loop={true}
            muted={true}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, controls:0, start:20, end:500, mute:1 }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'', zIndex:'1', bottom:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
  
          <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
            
  

        
            <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
            </div>
            </button>}
         
          />


{/* <div style={{position:'', bottom:'', left:'', zIndex:'', width:'', height:'100vh', border:'0px solid yellow', padding:'0', margin:''}}> */}
<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/shawshank-stuff.png" style={{height:'100%', position:'absolute', top:'0', zIndex:'1'}}  />
{/* </div> */}



<Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />






        </div>






<div className="contact" style={{position:'absolute', bottom:'30px', zIndex:'1', left:'10%', display:'flex', justifyContent:'center', border:'0px solid red', width:''}}>
  <Link href="/shawshank/" title="View This Project" className="navbar-item  button fire" style={{margin:'1rem 2rem 0 2rem', textDecoration:'none'}}>View This Project</Link>
</div>


</Layout>



      </CustomBox>
  );
}

export default Double;


// https://youtu.be/NmzuHjWmXOc