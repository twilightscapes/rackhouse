import * as React from "react"
import { ShareSocial } from 'react-share-social' 
import styled from "styled-components"

const CustomBox = styled.div`



`

const style = {
  background: 'transparent',
  borderRadius: 3,
  border: '0px solid red',
  color: '#fff',
  padding: '0 30px',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  margin:'0 auto',

};

const Foo = () => {
  
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
<CustomBox style={{}}>
    <ShareSocial
    className="social"
    style={style}
    url ={url}
    // title="Sharing IS Caring!"
    socialTypes={['facebook','twitter','reddit','linkedin']}>

      </ShareSocial>
    </CustomBox>


  );
};

export default Foo



