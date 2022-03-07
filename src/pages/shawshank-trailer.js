import React, { useState, useRef } from "react";
// import { Layout } from "../components/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import {Link} from "gatsby"
import ReactPlayer from "react-player/lazy";
import { StaticImage } from "gatsby-plugin-image"
import { ImPlay } from "react-icons/im"
import Controls from "../components/Controls";
import styled from "styled-components"
const CustomBox = styled.div`

.wrap-element {
  position: relative;
  overflow: ;
  padding-bottom: 56.25%;
  height:100vh;
}

.wrap-element iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%; 
  left: -100%; 
  border: 0;
}

@media (max-width: 48em) {
  .wrap-element {
    padding-bottom: 0;
    height:300px;
    overflow:visible;
    border:0px solid red;
  }
}

@media (min-width: 58em) {

}
`

  export default function Projects2() {

    const [state, setState] = useState({
      playing: true,
      controls: true,
      light: true,
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
{/* <Layout className="page"> */}

      <div className="wrap-element" style={{overflow:'hidden'}}>

          <ReactPlayer
            width="100%"
            height="100%"
            url="https://youtu.be/6hB3S9bIaco"
            playing={playing}
            controls={true}
            light={true}
            loop={loop}
            muted={true}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, controls:0, start:20, end:68, mute:0 }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'', zIndex:'5', bottom:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
  
          <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
            
  
            <div style={{position:'relative', maxWidth:'100vw', margin:'10% 0', zIndex:'', display:'flex', justifyContent:'center', background:'transparent !important',}}>
    <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
  </div>
        
            <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
            </div>
            </button>}
         
          />


<div style={{position:'absolute', bottom:'0', left:'0', zIndex:'1', width:'100vw', height:'100%', border:'0px solid yellow', padding:'0', margin:'0'}}>
<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/shawshank-stuff.png" style={{height:'100vh'}}  />
</div>

          <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />
        </div>

<div className="contact" style={{position:'absolute', bottom:'30px', zIndex:'70',  left:'', right:'10%', display:'flex', justifyContent:'center', border:'0px solid red', width:''}}>
  <Link href="/shawshank/" title="View This Project" className="navbar-item  button fire" style={{margin:'1rem 2rem 0 2rem', textDecoration:'none'}}>View This Project</Link>
</div>



      {/* </Layout> */}
      </CustomBox>


  )
}
