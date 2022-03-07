import * as React from "react"
import { ProductCard } from "./product-card"
import TwilightLogo from "../../static/assets/TSidebarHover.svg"
import Newsignup from "../components/newssign"

// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function ProductListing({ products }) {
  return (
    <>
    {/* // <div className={listingContainerStyle}>
    // <div className="masonry"> */}

<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', overflow:'hidden', position:'relative', padding:' 0', background:'transparent'}}>
      
<TwilightLogo className="bglogo" />
    
      <div className="RArrow">
     <span></span>
    </div>
    <div className="horizontal-scroll-wrapper squares" style={{ width:'', padding:'0'}}>


    <div className="introspacer" style={{height:'1vh'}}></div>

<div className="intropanel">

<div className="tronText1" style={{display:'', flexDirection:'', padding:'1rem 3%', margin:'25% 10% 0 50vw', borderRadius:'12px', height:'', textAlign:'center',  background:'rgba(0,0,0,0.30)', textShadow:'2px 2px 10px #222',  fontSize:'clamp(1rem, 2vw, 3rem)'}}>
Thank you for visiting. If you enjoyed this, please support the artist by viewing/buying one of his photos or DONATE HERE. </div>



</div>


{/* <div>

</div> */}




      {products.map((p, index) => (
        <ProductCard product={p} key={p.id} eager={index === 0} />
      ))}

<div className="donation" style={{}}>
{/* <Link to="/contact"> */}
<div style={{position:'relative', top:'', margin:'0', padding:'25% 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px', textDecoration:'none'}}>
  <Newsignup />
  </div>
{/* </Link> */}
</div>
    </div>




    </div>
    {/* <div className="spacer33" /> */}
    </>
  )
}
