import React, { useState } from 'react'
import './content.css';
import InnerContent from './inner-content'

function Content() {

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = event => {
    var scrollTop = event.currentTarget.scrollTop;
    // console.log('scrollTop: ', event.currentTarget.scrollTop);
    // console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    setScrolling(scrollTop > 5)
  };

  return (
    <div className='content'>
      <div className={`header ${scrolling ? "minimized" : ""}`}>Inner Header</div>
      <div className='body' onScroll={handleScroll}><InnerContent/></div>
      {/* <div className='body'>Some body</div> */}
      <div className='footer'>Inner Footer</div>
    </div>
  )
}

export default Content
