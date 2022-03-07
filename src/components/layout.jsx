import React, { } from "react"
// import { SkipNavContent, SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
// import { Footer } from "./footer"
import { Seo } from "./seo"
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
// import { AiOutlineFundProjectionScreen } from "react-icons/ai"
// import { GiBackwardTime } from "react-icons/gi"
// import { BsStopwatch } from "react-icons/bs"
// import { BiMoviePlay } from "react-icons/bi"


// import TwilightLogo from "../../static/assets/TSidebarHover.svg"
import { StoreContext } from "../context/store-context"
import { Toast } from "./toast"
import Bug from "../../static/assets/logo.svg"
import SiteLogo from "../../static/assets/logo.svg"
// import { FiShare } from 'react-icons/fi';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import Fullscreen from "../components/FullScreen"
import { ImArrowRight } from "react-icons/im"
import { CartButton } from "./cart-button"
// import SearchIcon from "../../static/assets/search"
// import Theme from "../components/theme"
// import Audio from '../assets/audio.mp3'
// import TouchUp from '../components/TouchUp'
// import { IoMdFingerPrint } from 'react-icons/io'
// import { Link } from "gatsby-plugin-anchor-links"

// import { StaticImage } from "gatsby-plugin-image"
// import Consent from './Consent'
import Install from './install-discount'
// import { useSiteMetadata } from "../hooks/use-site-metadata"
// 
// import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";



export function Layout({ children }) {

  // const { iconimage } = useSiteMetadata()
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div style={{display:''}}> 
<>
      <Seo />
      {/* <SkipNavLink /> */}


      
      <ModalRoutingContext.Consumer closeTimeoutMS={300} >
    {({ modal, closeTo }) => (
      <div style={{overflow:''}}>
        {modal ? (
          <>
          <div style={{display:'', position:'fixed', top:'3%', right:'3%', padding:'0px', fontSize:'2rem', background:'#111 !important', opacity:'1 !important', zIndex:'5',  filter:' drop-shadow(0px 4px 3px #000)',}}>
          <Link state={{noScroll: true }} to={closeTo} style={{fontSize:'2rem',  textDecoration:'none', lineHeight:'', display:'flex', flexDirection:'column', color:'', cursor:'pointer'}}>
            <AiOutlineClose />
            {/* <span className="TRON">[</span> */}
            
            {/* <span className="" style={{fontSize:'70%', textAlign:'center'}}>home</span> */}
          </Link>
          </div>
          </>
        ) : (
''
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>


      {/* <Header /> */}

      
      
      {/* <audio controls="controls" autoplay="false" src={Audio}>
    Your browser does not support the HTML5 Audio element.
</audio> */}

{/* <Fullscreen /> */}

<header name="pagetop" style={{}} >

{/* <Link to="/"><img id="logo" className="twlogo1" src={twLogo} alt="Twilightscapes Logo" style={{margin:'16px 0 40px 4vw', minWidth:'100px', maxWidth:'100px', height:'auto', padding:'0', border:'0px solid red', position:'fixed', zIndex:'2'}} /></Link> */}







      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />


      {/* <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle" style={{display:''}}>
<div style={{textAlign:'center'}}>MENU</div>
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label> */}


<label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle">
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'500px', color:'#fff', border:'0px solid blue'}}>
{/* <img className="" src={iconimage} alt="Logo" style={{borderRadius:'12px'}} /> */}

<Bug className="bug" style={{fontSize:'38px', maxWidth:'', opacity:'1', margin:'0 0 0 0', width:'100%' }}/> 
{/* <object className="" id="logo" data={iconimage} type="image/svg+xml" style={{  overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'', background:'transparent'  }} alt="Animated Logo" title="Animated Logo" >Animated Logo</object> */}
</div>
  </label>


  <label htmlFor="openSidebarMenu" className="backdrop1" ></label>


   <div id="sidebarMenu" style={{minWidth:'', width:''}}>
  
{/* <div className="no-app promocode">
30% OFF CODE: <span style={{color:'var(--primary-color)', fontWeight:'bold'}}>LoveTheNight</span>
</div> */}










  <Install />



	

    




    <ul className="sidebarMenuInner post-card" style={{maxWidth:'400px', position:'absolute', right:'0', display:'', justifyContent:''}}>




    <li className="carto" style={{border:'none', margin:' 0', textAlign:'center'}}>
    <Link to="/" name="homereturn" title="return to home" style={{position:'absolute', display:'block', width:'180px', height:'180px', border:'0px solid'}}></Link>
{/* <img src={iconimage} alt="Logo" width="100%" height="100%" /> */}
<SiteLogo />
{/* <object className="" id="logo" data={iconimage} type="image/svg+xml" style={{  overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'', background:'transparent'  }} alt="Animated Logo" title="Animated Logo" >Animated Logo</object> */}
{/* <Link to="/">
<LogoText style={{width:'100%', height:''}} />
</Link> */}
 </li>



<li className="carta">
 <Link className="navbar-item txtshadow" to="/contact/">
Contact Me<span>Ordering Questions?</span>
</Link>
</li>









<li className="carto" style={{textAlign:''}}>
              <Link className="navbar-item txtshadow" to="/projects">
      <div style={{display:'flex', gap:'10px'}}>
        {/* <AiOutlineFundProjectionScreen style={{fontSize:'2vw'}} /> */}
        View By Project
        </div>
              </Link>
      </li> 


<li className="carto">
      <Link className="navbar-item txtshadow" to="/minutes/">
      <div style={{display:'flex', gap:'10px'}}>
      View All Minutes
      </div>
        </Link>
</li>

{/* <li className="carto" style={{textAlign:'center'}}>
      <Link className="navbar-item txtshadow" to="/minutes/">
      <div style={{display:'flex', gap:'10px'}}>
      Current Minutes
      </div>
        </Link>
</li> */}


<li className="carto" style={{textAlign:'center'}}>
              <Link className="navbar-item txtshadow" to="/about/">
              <div style={{display:'flex', gap:'10px'}}>
              {/* <BiMoviePlay style={{fontSize:'2vw'}}  /> */}
              About This Site
              </div>
              </Link>
      </li> 





      
    
      <li className="carta">
      <div style={{display:'flex', justifyContent:'center'}}>
<button className="back" onClick={()=>navigate(-1)} style={{padding:'4px 8px', borderRadius:'12px'}}>
        {/* <span className="icon -left" style={{paddingRight:'1rem'}}>
                <BiLeftArrow />
        </span>  */}
        {" "} Continue Choosing 
</button>
</div>
      </li>

      

      <li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'space-around', verticalAlign:'center', padding:'5px 0 0 0' , background:'rgba(0,0,0,0)' }}>
  
      {/* <Theme  style={{padding:'0'}} /> */}
   {/* <Link className="sherlock" to="/search/" style={{marginRight:'0', marginTop:'5px'}}>
    <span className="carto"><SearchIcon /></span>
   </Link> */}
   
   <CartButton quantity={quantity} />


        </li>

    

    </ul>






  </div>










      <Toast show={loading || didJustAddToCart} >
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
          </>
        )}
      </Toast>
 



      {/* <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div> */}
     


     

</header>



{/* <div className="toppad" style={{display:'block', height:'20px', border:'0px solid yellow'}}></div> */}



      {/* <SkipNavContent className="intro"> */}

        {children}
        
        {/* </SkipNavContent> */}
      
      
      {/* <Consent /> */}
     {/* <Install /> */}
      {/* <Footer /> */}
      
      </>
    </div>
    
  )
}
