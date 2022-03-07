/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
// import { Link } from "gatsby"
// import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"


import PostCard from "./post-card"


export default function BlogListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}


const PostMaker = ({ data }) => (


//   <div className="horizontal-holder" style={{position:'relative'}}>




//  <div className="horizontal-scroll panels" style={{ scrollSnapType: '', maxHeight:'',}}>


// <div></div>
<>
  {data}
</>
// </div>

// </div>




)