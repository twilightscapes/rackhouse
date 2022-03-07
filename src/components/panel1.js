
import * as React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
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


const CustomBox = styled.div`
.frontbg iframe{
  opacity:.4;
}


*{
  cursor: url('data:image/svg+xml,%3Csvg id="ebnjYAzfMro1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"%3E%3Cdefs%3E%3Cfilter id="ebnjYAzfMro2-filter" x="-400%25" width="600%25" y="-400%25" height="600%25"%3E%3CfeGaussianBlur id="ebnjYAzfMro2-filter-drop-shadow-0-blur" in="SourceAlpha" stdDeviation="0,0"/%3E%3CfeOffset id="ebnjYAzfMro2-filter-drop-shadow-0-offset" dx="0" dy="0" result="tmp"/%3E%3CfeFlood id="ebnjYAzfMro2-filter-drop-shadow-0-flood" flood-color="%23000"/%3E%3CfeComposite id="ebnjYAzfMro2-filter-drop-shadow-0-composite" operator="in" in2="tmp"/%3E%3CfeMerge id="ebnjYAzfMro2-filter-drop-shadow-0-merge"%3E%3CfeMergeNode id="ebnjYAzfMro2-filter-drop-shadow-0-merge-node-1"/%3E%3CfeMergeNode id="ebnjYAzfMro2-filter-drop-shadow-0-merge-node-2" in="SourceGraphic"/%3E%3C/feMerge%3E%3CfeGaussianBlur id="ebnjYAzfMro2-filter-blur-0" stdDeviation="2,2" result="result"/%3E%3C/filter%3E%3C/defs%3E%3Cellipse rx="4.492195" ry="4.730719" transform="translate(31.021128 30.644481)" filter="url(%23ebnjYAzfMro2-filter)" fill="%2300ebff" stroke-width="0"/%3E%3C/svg%3E') 32 32, pointer !important;
}



`

const Characters = () => (

  
<CustomBox style={{}}>

{/* GRID INTRO */}
<div className="" id="" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100%', width:'100vw', position:'relative', overflow:'hidden'}}>

{/* <div style={{position:'absolute', right:'20vh', top:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div> */}




<div id="" className="wrap-element tronpanel" style={{overflow:'hidden', height:'',}}>
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


{/* <div style={{position:'absolute', bottom:'0', left:'0', zIndex:'1', width:'100vw', height:'100%', border:'0px solid yellow', padding:'0', margin:'0'}}>
<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/shawshank-stuff.png" style={{height:'100vh'}}  />
</div> */}

          {/* <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          /> */}
      
     
{/* Panel Video */}






{/* Panel Content */}
{/* <h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:'0'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>TRON</div>
      </h1> */}
<a href="https://tron.allin60.com" title="TRON in 60 Seconds" aria-label="TRON in 60 Seconds">
<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'2rem', width:'100%', padding:'0', opacity:'.7', zIndex:''}}>
        {/* <div className="" style={{fontWeight:'bold', fontFamily:'Roboto'}}>TRON</div> */}
        <StaticImage className=""
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/tron-logo.png" />
      </h1>
 </a>


 <div id="characters" className="characters" style={{position:'absolute', zIndex:'0', width:'', bottom:'0', height:'100%', top:'0', background:'none', filter:'none', boxShadow:'none', padding:'20vh 0 0 0',}}>

 {/* <ReactPlayer
          className='playerpp'
          url="https://www.youtube.com/embed/S5S6s5dZXNM"
          width="100%"
          height=""
          style={{left:'', position:'absolute', zIndex:'2', display:'', width:'', alignSelf:'', placeContent:'', justifyContent:'', margin:'0 auto', bottom:'0', border:'0px solid blue'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:0, start:5, end:41 }
            },
          }}
       
          playing
          playsinline
          playIcon={


        <div className="" style={{display:'', flexDiection:'', placeContent:'center', height:'', position:'absolute', left:'', right:'', bottom:'0', zIndex:'9', width:'', height:'100vh', border:'0px solid red'}}>

        <button aria-label="Click To Play" className="actionJackson TRON tronText"
       >
          
          <Link state={{modal: true}} to="/the-grid/" style={{color:'#37f8f8', display:'block', height:'100vh', width:'100vw', display:'grid', placeContent:'center', border:'0px solid yellow', position:'relative', top:'40vh'}}>
            <div className="" style={{
          display:'flex', justifyContent:'center', zIndex:'', filter:'drop-shadow(2px 2px 2px #000)', width:'100%',  padding:'5% 1rem', borderRadius:'200px', border:'3px dotted #666', lineHeight:'200%', fontSize:'clamp(2rem, 4vw, 3.6rem)', background:'radial-gradient(circle, rgba(10, 45, 48, 0.4) 17%, rgba(25, 96, 109, 0.4) 58%, rgba(10, 196, 206, 0.5) 97%)', textShadow:'2px 2px 2px #333'
          }}>
            Enter The Grid
            </div>
          </Link>
          
          </button>
        
        </div>
        }
            light="../assets/transparent.png"
          /> */}
    
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', zIndex:'-2', position:'relative' }}>

    <div id="" className="" style={{position:'relative', display:'flex', justifyContent:'center', border:'0px solid red',}}>
             <a href="https://tron.allin60.com" title="Sam Flynn"  aria-label="Sam Flynn">
    {/* <SamFlynn className="character" style={{height:'100vh', width:'90%', margin:'0 0 0 0',}} /> */}
    <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/sam-flynn.png" />
    </a>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <a href="https://tron.allin60.com" title="Quorra" aria-label="Quorra">
      {/* <QuoraStand className="character" style={{height:'100%', width:'85%', margin:'0 0 0 10%', right:'', zIndex:''}} /> */}
      <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/quora-ass.png" />
      </a>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center',}}>
<a href="https://tron.allin60.com" title="Kevin Flynn" aria-label="Kevin Flynn">
    {/* <KevinFlynn className="character" style={{position:'relative', height:'100%', width:'130%', zIndex:'', margin:'0 0 0 -16%'}} /> */}
    <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/kevin-flynn.png" />
    </a>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
    display:'flex', flexDiection:'column', justifyContent:'center',
    padding:'0', border:'0px solid red',}}>
      <Link to="/tron/" title="Tron" aria-label="Tron">
    {/* <TronGuy className="character" style={{height:'100%', width:'100%', margin:'0 0 0 0', transform: 'scaleX(-1)'}} /> */}
    <StaticImage className="character"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/tron.png" />
    </Link>
    </div>
    
    <div srl_exclude="true" id="mylink15" className="donation2" style={{position:'relative', transform:'', maxWidth:'', height:'100vh', 
    // background:'rgba(6, 70, 90, 0.6)', 
    padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <a href="https://tron.allin60.com" title="Clu" aria-label="Clu">
    {/* <CluGuy className="character evil" style={{height:'100%', width:'100%', margin:'0 0 0 -20%',}} /> */}
    <StaticImage className="character evil"
style={{height:'', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
    </a>
    </div>
    
</div>

    </div> 
    
{/* <div className="" style={{display:'flex', flexDiection:'', justifyContent:'center',  position:'absolute', left:'', right:'', bottom:'20vh', zIndex:'', width:'100vw', margin:'0 auto', height:'', border:'0px solid red', textAlign:'center'}}>

   
          
  
            <div className="tronText " style={{
          display:'flex', justifyContent:'center', zIndex:'', filter:'drop-shadow(2px 2px 2px #000)', width:'80%',  padding:'2% 1rem', borderRadius:'200px', border:'3px dotted #04e2ff', lineHeight:'200%', fontSize:'clamp(1.2rem, 3vw, 2.8rem)', color:'rgb(6, 232, 240)', fontWeight:'bold',  textShadow:'2px 2px 2px #333'
          }}>
            CHOOSE YOUR CHARACTER
            </div>

          
        
        
        </div> */}
    

       


</div>

</div>

{/* Panel Content */}





{/*  */}
{/* Image Gallery */}

  {/* {data.allFile.edges.map(edge => {
  return <GatsbyImage
  image={edge.node.childImageSharp.gatsbyImageData}
  srl_gallery_image="true"
  alt={edge.node.name}
  key={edge.node.id}
/>
})} */}






</CustomBox>
)
export default Characters