import { useState } from 'react';
import './App.css';
import Content from './components/content';
import Header from './components/header';

function App() {
  const [shrunk, setShrunk] = useState(false);

  const handleScroll = event => {
    var scrollTop = event.currentTarget.scrollTop;
    console.log('scrollTop: ', event.currentTarget.scrollTop);
//    console.log('offsetHeight: ', event.currentTarget.offsetHeight);

    setShrunk(scrollTop > 5)
  };

  return (
    <div className="App">
      {/* <div className={`header ${shrunk ? "minimized" : ""}`}><Header minimize={shrunk}/></div> */}
      <div className={`header ${shrunk ? "minimized" : ""}`}>header</div>
      <div className={`content ${shrunk ? "maximized" : ""}`} onScroll={handleScroll}><Content/></div>
      <div className='footer'>footer</div>
    </div>
  );
}

export default App;
