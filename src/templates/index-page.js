import React, { useState, useRef } from "react";
import { Link, graphql } from "gatsby"
import ReactPlayer from 'react-player/lazy'
import { Layout } from "../components/layout"
import { Footer } from "../components/footer";
import { Seo } from "../components/seo"
// import { ImPlay } from "react-icons/im"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
// import Controls from "../components/Controls";
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
import BlogListHome from "../components/blog-list-home"
import Newsignup from "../components/newssign"
// import FrontLoader from "../../static/assets/grid-loader.svg"
import { RiArrowRightSLine } from "react-icons/ri"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import BackgroundImage from 'gatsby-background-image'
import Panel1 from "../components/panel1"
// import Panel2 from "../pages/shawshank-trailer"



// import TimeAgo from 'react-timeago'
// import Countdown from 'react-countdown'

export const pageQuery = graphql`
  query HomeQueryHomeQuery($id: String! ) {
    
    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
      }




      

      

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }





  

    desktop: file(relativePath: { eq: "curtains.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }


    

    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`










const HomePage = ({ data }) => {


 

 const imageData = data.desktop.childImageSharp.fluid

  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data 
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

    // const { iconimage } = useSiteMetadata()

    // const imageData = data.desktop.childImageSharp.fluid
    const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts

    const Svg = frontmatter.svgImage
    const svgZindex = frontmatter.svgzindex
    if (!Svg) {
      
    }
    else{
      <AddSvg />
    }


    function AddSvg(){
      const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
      return (
        <object title="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} alt="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" >You need a new browser</object>
      )
    }



    const [state, setState] = useState({
      playing: true,
      controls: false,
      light: false,
      muted: true,
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

 




const YouTube = frontmatter.youtuber

if (!YouTube) {

}
else{
  
  <Iframer />
}

function Iframer() {
  

  const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
  return (
    <ReactPlayer
    className='react-player66'
    url={Url}
    
    // url={[
    //   iframeUrl,
    //   YoutuberSuggestion1,
    //   YoutuberSuggestion2,
    //   YoutuberSuggestion3
    // ]}
    width="100%"
    height="100%"

    config={{
      youtube: {
        playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
      },
    }}
    loop
    playing
    playsinline
//       playIcon={
//         <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>

//     <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', margin:'0 auto'}}>
    

//       <div style={{position:'relative', maxWidth:'100vw', margin:'4% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
// <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'30vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
// </div>

//       <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
// <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
//       </div>
//       </button>}
//         light="../assets/transparent.png"
    />
  )
}


const options = {
  settings: {
    autoplaySpeed: 4000,
    boxShadow: '0px 0px 20px #000',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: true,
    hideControlsAfter: false,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    slideAnimationType: 'slide',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
    usingPreact: false
  },
  buttons: {
    backgroundColor: '#FA02B7',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: '40px'
  },
  caption: {
captionAlignment: 'start',
captionColor: '#FFFFFF',
captionContainerPadding: '20px 12% 30px 12%',
captionFontFamily: 'inherit',
captionFontSize: 'inherit',
captionFontStyle: 'inherit',
captionFontWeight: 'inherit',
captionTextTransform: 'inherit',
showCaption: false
  },
  thumbnails: {
    showThumbnails: false,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: '#111',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 2px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  },
  progressBar: {
    backgroundColor: '#000',
    fillColor: '#333',
    height: '3px',
    showProgressBar: true
  },
};
  
  return (

    <Layout>
    <Helmet>
  <body className="homepage" style={{background:''}} />
</Helmet>
{/* <Seo
          title={`VidSock - Video Multimedia NFT Platform`}
          description={`Create, display and market your NFTs with VidSock`}
          image={'https://vidsock.com/default-og-image.jpg'}
        /> */}
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
  //       image={photoUrl}
  //  photoUrl

   image={ siteUrl + getSrc(frontmatter.featuredImage) }
/>
      




{/* VIDEO URLS */}



{/* uCf3Q43fC_4 cool train */}






{/* <HomeHolder /> */}

<div id="homestart" className="horizontal-holder allin60panel" style={{position:'relative', height:'70vh', overflow:'hidden' }}>
{/* <div className="RArrow"><span></span></div> */}


<div id="" className="wrap-element " style={{overflow:'hidden', width:'100vw', height:'70vh', position:'absolute', top:'0', zIndex:''}}>





{/* <ReactPlayer
            // ref={playerRef}
            width="100%"
            height="100%"
   
            // url={iframeUrl}
            url="https://www.youtube.com/embed/videoseries?list=PLSld2C-SHcw6iI-8VdTwswUmghftk2chW"
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
                playerVars: { showinfo:0, autoplay:1, controls:0, start:10, end:2000, mute:1  }
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


          /> */}
          

          
          
          
          </div>



          {/* <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          /> */}

          
<div className="horizontal-scroll panels sitegrad movingBG" style={{}}>



<div className="" style={{height:'50%', paddingTop:'50%'}}></div>
{/* <div></div> */}



{/* <GridLoader /> */}


{/* <div id="homestart"><Panel1 /></div> */}

{/* <BackgroundImage
      Tag="section"
      className=""
      fluid={imageData}
      backgroundColor={`#111`}
      style={{}}
     >




<div className="donation2" style={{display:'grid',
  placeContent:'center', width:'100vw', height:'100vh', justifyContent:'center', position:'relative', background:'rgba(0,0,0,0.50)', webkitBackdropFilter:'blur(10px)', backdropFilter:'blur(14px)'}}>

  <h1 className="tronText " style={{fontSize:'7vw', padding:'3vh 5vw 20vh 5vw', position:'', top:'', border:'0px solid', diplay:'', placeContent:'center', maxWidth:'80vw', fontFamily:'inherit'}}><div className="lineOne">All that's cool </div> <div className="lineTwo">in 60 seconds</div><br /><span style={{fontSize:'2rem'}}>allin60.com</span></h1>
  
</div>
</BackgroundImage> */}



<div className="custom-cursor " style={{margin:'', height:'100%', textDecoration:'none'}}>

  <Panel1 />

</div>



{/* <Panel2 /> */}


<div>
<Link title="Pulp Fiction by Quentin Tarantino - All In 60 Seconds"  to="/pulp-fiction-trailer/" className="navbar-item  button " style={{margin:'', height:'100%', textDecoration:'none'}}>
{/* <Panel3 /> */}
<StaticImage className=""
alt="Pulp Fiction by Quentin Tarantino - All In 60 Seconds" src="../../static/assets/pulpfiction.jpg" />
</Link>
</div>


<div>
<Link title="Shawshank Redemption by Stephen King - All In 60 Seconds"  to="/shawshank-trailer/" className="navbar-item button " style={{margin:'', height:'100%', textDecoration:'none'}}>
{/* <Panel3 /> */}
<StaticImage className=""
alt="Shawshank Redemption by Stephen King - All In 60 Seconds" src="../../static/assets/shawshank.jpg" />
</Link>
</div>



<div>
<Link title="They Live by John Carpenter - All In 60 Seconds"  to="/they-live/" className="navbar-item  button " style={{margin:'', height:'100%', textDecoration:'none'}}>
<StaticImage className=""
alt="They Live by John Carpenter - All In 60 Seconds" src="../../static/assets/TheyLive-Header.jpg" />
</Link>
</div>



<div>
<Link title="They Live by John Carpenter - All In 60 Seconds"  to="/mystery-science-theater-3022/" className="navbar-item  button " style={{margin:'', height:'100%', textDecoration:'none'}}>
<StaticImage className=""
alt="Mystery Science Theater 3000 - All In 60 Seconds" src="../../static/assets/mystery-science.jpg" />
</Link>
</div>



{/* <div>
<Link title="Shawshank Redemption by Stephen King - All In 60 Seconds"  to="/shawshank-trailer/" className="navbar-item button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<Panel3 />
<StaticImage className=""
alt="Shawshank Redemption by Stephen King - All In 60 Seconds" src="../../static/assets/shawshank.jpg" />
</Link>
</div> */}



{/* <div>
<Link title="Pulp Fiction by Quentin Tarantino - All In 60 Seconds"  to="/pulp-fiction-trailer/" className="navbar-item  button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<Panel3 />
<StaticImage className=""
alt="Pulp Fiction by Quentin Tarantino - All In 60 Seconds" src="../../static/assets/pulpfiction.jpg" />
</Link>
</div> */}


{/* <a href="https://tron.allin60.com/">
<StaticImage className=""
alt="Shawshank Redemption by Stephen King - All In 60 Seconds" src="../../static/assets/shawshank.jpg" />
</a> */}


{/* <div>
<Link title="They Live by John Carpenter - All In 60 Seconds"  to="/they-live/" className="navbar-item  button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<StaticImage className=""
alt="They Live by John Carpenter - All In 60 Seconds" src="../../static/assets/TheyLive-Header.jpg" />
</Link>
</div> */}


{/* <a href="https://tron.allin60.com/">
<StaticImage className=""
alt="Pulp Fiction by Quentin Tarantino - All In 60 Seconds" src="../../static/assets/pulpfiction.jpg" />
</a> */}


{/* <div>
<Link title="They Live by John Carpenter - All In 60 Seconds"  to="/mystery-science-theater-3022/" className="navbar-item  button fire" style={{margin:'', height:'100%', textDecoration:'none'}}>
<StaticImage className=""
alt="Mystery Science Theater 3000 - All In 60 Seconds" src="../../static/assets/mystery-science.jpg" />
</Link>
</div> */}


{/* <BlogListHome data={posts} /> */}


{/* <div style={{overflow:'hidden'}}>
<VideoPage />
</div> */}

{/* <div className="pagination tronpanel" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh', paddingTop:'1vh', background:''}}>
<Link to="/minutes/2/" title="View Archives">
  <div  className="tronText" style={{fontSize:'3vw', marginTop:'1rem', lineHeight:'130%'}}><span style={{fontSize:'65%'}}>viewing:</span><br />Lastest Minutes</div>

   
    <div  className="tronText " style={{ background:'rgba(0,0,0,0.10)', width:'80vw', position:'relative', top:'', margin:'10vh auto', padding:'10% 10%', zIndex:'1', textAlign:'', border:'1px solid #000', borderRadius:'12px', textDecoration:'none', color:'#cccc'}}>
    <h1 className="">View All Minutes?</h1>
    </div>
</Link>

</div> */}


{/* <div className="allin60panel actionJackson custom-cursor" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh', paddingTop:'0', background:''}}>
<div style={{ background:'rgba(0,0,0,0.10)', width:'80vw', position:'relative', top:'', margin:'5vh auto', padding:'4% 5%', zIndex:'1', textAlign:'', border:'1px solid #000', borderRadius:'12px', textDecoration:'none', color:'#cccc'}}>
  <Newsignup />
  </div>
</div> */}




<div className="allin60panel actionJackson frontdrop" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh', paddingTop:'0', background:''}}>

  spacer
</div>

        
</div>

</div>







<div name="container21" className="container21" style={{marginTop:'',}}>


{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ display:'',}}>
  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>




{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}






{/* if(navigator.standalone) {
    "Thanks for using our PWA!"
} else {
    "Please consider downloading our PWA."
} */}





 

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}





{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}


  
{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}




      </div>
  </article>
</section>

) : (
  ""
)}
{/* end show feature */}




<br />

{/* show Info */}
{ShowInfo ? (
            
       


<section style={{ display:'', height:'', overflow:''}}>
  <article>
<div className="flexbutt" style={{display:'flex', gap:'30px'}}>
      <div className="flexcheek " style={{padding:'1rem 2rem 0 2rem', maxHeight:'90vh',}}>


          <h1 className="title1">
            {frontmatter.title}
            {/* Today's Popular Subjects <br /> */}
            {/* All In 60 Seconds */}
          </h1>
          <h2
            className="tagline1"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </h2>





          <div
          style={{padding:'0 8% 0 4.5%', fontSize:'clamp(1rem, 2vw, 2.8rem)',}}
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />


  
  <br />
          <Link
            to={frontmatter.cta.ctaLink}
            className="button fire actionJackson"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc'
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>

            
          </Link>

         


{/* <AnchorLink 
className="actionJackson txtshadow"
style={{
  cursor:'pointer',
  width:'70%',
  margin:'0 auto'

}} 
to="#experiences" title="See the new EXPERIENCES™" /> */}




{/* <span className="actionJackson txtshadow"> <span className="icon -right">
              <FaHandPointDown />
            </span> &nbsp;&nbsp;All New EXPERIENCES &nbsp;&nbsp;<span className="icon -right">
              <FaHandPointDown />
            </span></span> */}
          


      </div>



        


      <div className="flexcheek" style={{position:'relative', maxHeight:'50vh', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
 
 


 <div style={{margin:'0 30px', zIndex:'', borderRadius:'12px', maxHeight:'50vh', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:'column'}}>
   





           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              style={{border:'0px solid red', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px !important', position:'absolute', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
            />
          ) : (
            ""
          )}





<div style={{position:'relative', top:'', margin:'0', padding:'25% 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
  <Newsignup />
  </div>



{/* <ScrollAnimation animateIn="bounceInDown" delay={350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} >
<div style={{position:'relative', top:'0px', paddingRight:'', border:'0px solid yellow', zIndex:'0'}}>
  <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'1rem 0 0 0',
    padding:'0',
  }}
>
Only Available<br />
Through NFT
</h2>
</div>
</ScrollAnimation> */}



{/* <div style={{fontSize:'120%', textAlign:'center', margin:'1rem', textShadow:'2px 2px 0 #000'}}><Link state={{modal: true}} to="/about/">Learn More About The VidSock Platform Here</Link></div> */}

</div>

      
      







      </div> 
</div>
</article>
</section>


) : (
  ""
)}
{/* end show Info */}



<div style={{textAlign:'center', fontSize:'5vw', margin:'10vh 0 0 0'}}>Latest Minutes:</div>




{/* end show Posts */}
{ShowPosts ? (

<div id="posts" name="posts">
  
 
        <BlogListHome data={posts} />


       
        
        <div style={{textAlign:'center'}}><Link className="post-card button " to="/minutes/" style={{textDecoration:'none', color:'inherit', textAlign:'center'}}>More Minutes <RiArrowRightSLine style={{fontSize:'50px'}} /></Link>
        </div>



 

  
</div>

   ) : (
    ""
  )}
{/* end show Posts */}


 </div>{/* end scooch */}

      

 <h3 style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', margin:'0 auto 2rem auto'}}>Todd's Other Work</h3>
 
 <div className="flexbutt noexit print" style={{padding:'0 4%',
position:'relative', height:'', width:'', overflow:'', display:'flex', gap:'20px', margin:'0 auto 2rem auto', }}>



{/* <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
    <a className="noexit" href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/twilightscapes-button.jpg" alt="Todd Lambert Night photos"  /></a>
    <br />
    Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the night like you&apos;ve never seen it before.
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Twilightscapes.com</a></div>
    </div> */}


    
    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <a className="noexit" href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/urban-fetish-button.jpg" alt="Todd Lambert Night photos" style={{borderRadius:'8px'}}  /></a>
    <br />
    Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. 
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>UrbanFetish.com</a></div>
    </div>





<div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
    <a className="noexit" href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/toddlambert-promo-banner.png" alt="Todd Lambert is an independent artist, creator, design, developer and generally a unicorn" style={{borderRadius:'8px'}}  /></a>
    <br />
    Todd Lambert excels in design, development, marketing, conceptual photography and online strategy that bring results. Learn more about Todd and maybe hire him to help you?
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>ToddLambert.com</a></div>
    </div>


    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <a className="noexit" href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
    <StaticImage src="../../static/assets/vidsock-promo.jpg" alt="Todd builds Web Apps"  style={{borderRadius:'8px'}} /></a>
    <br />
Todd sells exceptionally fast and well-built multimedia web apps called VidSocks. They are a complete website solution that costs nothing to run and get top ranks in Google!
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>VidSocks.com</a></div>
    </div>













</div>


<Footer />
    </Layout>
  )
}

export default HomePage
  

