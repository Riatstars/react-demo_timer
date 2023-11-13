import React from 'react'
import {formatTime} from "./formatTime";

function SnapRender({snapShot}) {
  return ( 
  <>
  {snapShot.current?.map((snap)=>(<span>{formatTime(snap)}</span>))}
  </>
  )
}

export default SnapRender