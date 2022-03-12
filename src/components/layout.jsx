import React, { } from "react"
import { Seo } from "./seo"
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"

// import { StoreContext } from "../context/store-context"
// import { Toast } from "./toast"
import Bug from "../../static/assets/logo.svg"
import SiteLogo from "../../static/assets/logo.svg"

// import { CartButton } from "./cart-button"
// import SearchIcon from "../../static/assets/search"
import Theme from "../components/theme"

// import { Link } from "gatsby-plugin-anchor-links"
// import { StaticImage } from "gatsby-plugin-image"

import Install from './install-discount'
// import { navigate } from "gatsby";

export function Layout({ children }) {

  // const { iconimage } = useSiteMetadata()
  // const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  // const items = checkout ? checkout.lineItems : []

  // const quantity = items.reduce((total, item) => {
  //   return total + item.quantity
  // }, 0)

  return (
    <div style={{display:''}}> 
<>
      <Seo />

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



<header name="pagetop" style={{}} >



      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />

<div id="secondMenu" className="" style={{}}>
<ul className="sidebarMenuInner post-card" style={{maxWidth:'400px', position:'absolute', left:'0',}}>
<Install />
{/* <li className="carto" style={{border:'none', margin:' 0', textAlign:'center'}}>
Woot
</li>
<li className="carto" style={{border:'none', margin:' 0', textAlign:'center'}}>
This is 2nd menu
</li> */}

</ul>
</div>

  <label htmlFor="openSidebarMenu" className="backdrop1" ><input type="checkbox" /></label>

<label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle">
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'500px', color:'#fff', border:'0px solid blue'}}>
{/* <img className="" src={iconimage} alt="Logo" style={{borderRadius:'12px'}} /> */}
<Bug className="bug" style={{fontSize:'38px', maxWidth:'', opacity:'1', margin:'0 0 0 0', width:'100%' }}/> 
{/* <object className="" id="logo" data={iconimage} type="image/svg+xml" style={{  overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'', background:'transparent'  }} alt="Animated Logo" title="Animated Logo" >Animated Logo</object> */}
</div>
  </label>

  
  {/* <Install /> */}




   <div id="sidebarMenu" style={{minWidth:'', width:'',}}>
  
{/* <div className="no-app promocode">
30% OFF CODE: <span style={{color:'var(--primary-color)', fontWeight:'bold'}}>LoveTheNight</span>
</div> */}

  

    <ul className="sidebarMenuInner post-card" style={{maxWidth:'400px', position:'absolute', right:'0', display:'', justifyContent:''}}>

    <li className="carto" style={{border:'none', margin:' 0', textAlign:'center'}}>
    <Link to="/" name="homereturn" title="return to home" style={{position:'absolute', display:'block', width:'180px', height:'180px', border:'0px solid'}}></Link>
<SiteLogo />
 </li>


<li className="carto" style={{textAlign:'', pointerEvents:'none'}}>
      <Link className="navbar-item txtshadow" to="/minutes/">

      Our Menu

        </Link>
</li>

<li className="carto" style={{textAlign:'', pointerEvents:'none'}}>
      <Link className="navbar-item txtshadow" to="/minutes/">

      Weekend Brunch

        </Link>
</li>


<li className="carto" style={{textAlign:'', pointerEvents:'none'}}>
      <Link className="navbar-item txtshadow" to="/minutes/">

      Libations

        </Link>
</li>

<li className="carto" style={{textAlign:'', pointerEvents:'none'}}>
      <Link className="navbar-item txtshadow" to="/minutes/">

      Bourbon Society

        </Link>
</li>


<li className="carto" style={{textAlign:'', pointerEvents:'none'}}>
              <Link className="navbar-item txtshadow" to="/about/">

              About Us

              </Link>
      </li> 



<li className="carto" style={{textAlign:'', pointerEvents:''}}>
      <Link className="navbar-item txtshadow" to="/minutes/">

      Our Locations

        </Link>
</li>

      <li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'space-around', verticalAlign:'center', padding:'5px 0 0 0' , background:'rgba(0,0,0,0)' }}>
  
      <Theme  style={{padding:'0'}} />
   {/* <Link className="sherlock" to="/search/" style={{marginRight:'0', marginTop:'5px'}}>
    <span className="carto"><SearchIcon /></span>
   </Link>
   
   <CartButton quantity={quantity} /> */}


        </li>

    </ul>

  </div>

      {/* <Toast show={loading || didJustAddToCart} >
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
          </>
        )}
      </Toast> */}
 
      {/* <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div> */}
     
</header>
{children}

      
      
      {/* <Consent /> */}
     {/* <Install /> */}
      {/* <Footer /> */}
      
      </>
    </div>
    
  )
}
