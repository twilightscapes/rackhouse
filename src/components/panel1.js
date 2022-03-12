

import React, { useRef } from "react";
import styled from "styled-components"

// import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
import { StaticImage } from "gatsby-plugin-image"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
// import LightCycle from "../../static/assets/light-cycle.svg"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
// import SamFlynn from "../../static/assets/sam-flynn.png"
// import CluGuy from "../../static/assets/clu.png"
// import TronGuy from "../../static/assets/tron.png"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.png"
// import KevinFlynn from "../../static/assets/kevin-flynn.png"
// import TronChick from "../../static/assets/tron-chick1.svg"
import RackLogo from "../../static/assets/logointro.svg"

const CustomBox = styled.div`



.frontvideo iframe{
  z-index:-2 !important;
}


`




function Characters() {


  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  return (

  
<CustomBox style={{}}>

{/* GRID INTRO */}
<div className="" id="" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'', width:'100%', position:'relative', overflow:'hidden'}}>



<div id="" className="wrap-element tronpanel" style={{overflow:'', height:'', position:'relative', zIndex:'0' }} ref={playerContainerRef}>
<ReactPlayer
        ref={playerRef}
         className='frontvideo'
         url="https://youtu.be/14zqZsUzplg"
         width="100%"
         height="100vh"
         playing={true}
            controls={false}
            light={true}
            loop={true}
            muted={true}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, controls:0, start:7, end:34, mute:1, loop:0, rel:0, origin:"http://rackspace.netlify.app" }
              },
            }}

          playsinline
            playIcon={

          <>   

  


<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/rackhouse-header.jpg" style={{height:'', position:'absolute', top:'0', zIndex:'-1'}}  />


<div className="specialfont" style={{position:'relative', zIndex:'3', right:'', top:'' , padding:'20% 0 0 0', textShadow:'2px 2px 2px #333',}}>
            <div style={{fontWeight:'bold', padding:'2rem', fontSize:'2rem', backdropFilter:'blur(4px)', background:'rgba(0, 0, 0, .5)', borderRadius:'12px', }}>Click To Play
    <ImPlay className="" style={{margin:'0 auto', width:'', fontSize:'50px', filter:'dropShadow(0px 0px 14px #E3272D)'}} />
            </div>
</div>
   

            
       
             
           </>  
          }
         
          />

<div style={{position:'absolute', top:'-20px', width:'100vw', height:'100vh', zIndex:'2'}}>
<RackLogo className="racklogo"  />
</div>

</div>

</div>







</CustomBox>
  )
}
export default Characters