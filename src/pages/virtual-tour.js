import * as React from "react"
import { Layout } from "../components/layout"


// import GoBack from "../components/goBack"













export default function VirtualTour() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Terms of Use`} /> */}

    
<section className="outer section section--gradient" >
      <div className="container" style={{paddingTop: '60px'}}>
        
      {/* <div className="mobile"><GoBack /></div> */}

{/* <h1 className="title" style={{fontSize:'50px'}}>Virtual Tour</h1> */}
    

<div id="tour" className="virtualtour">
 <iframe title="Rack House Virtual Tour" className="" style={{maxWidth:'100%', margin:'0 auto', border:'10px solid #333', borderRadius:'12px'}} src="https://www.google.com/maps/embed?pb=!4v1646715550851!6m8!1m7!1sCAoSLEFGMVFpcFA5OWw5SHU3Y0RSMVMzYkxQWS1DS3hnWHhNMTFHQlhCN0l4UE9q!2m2!1d30.367306744074!2d-89.094062253672!3f340.80219860937757!4f-7.026614771956915!5f0.7820865974627469&amp;origin=https://rackspace.netlify.app" width="800" height="500" allowFullScreen="" loading="lazy" origin="https://rackspace.netlify.app" ></iframe>
      </div>



    </div>
{/* 
    <GoBack /> */}
    <div className="spacer33"></div> 
    </section>
    
    
    </Layout>

  )
}
