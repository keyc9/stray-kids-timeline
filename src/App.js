import "./App.css";
import { useState, useRef, useEffect } from "react";
import Cover from ".//Components/Cover.js";
import TimeBlock from ".//Components/TimeBlock";
import FirstBlock from "./Components/FirstBlock";
import LastBlock from ".//Components/LastBlock";
import Footer from ".//Components/Footer";
import img1 from "./Pictures/200201.jpg";


function App() {
  const [fix, setFix] = useState(false);
  function setFixedPoint() {
    if (window.scrollY >= 453) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixedPoint);

  const bottomRef = useRef(null);

  const toBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const topRef = useRef(null);

  const toTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='App' ref={topRef}>
      <button className='to-bottom-button' onClick={toBottom}></button>
      <button className='to-top-button' onClick={toTop}></button>
      <Cover />
      <div className='event-box'>
        {/* <FirstBlock />
        <div className={fix ? "point-wrapper fixed" : "point-wrapper"}>
          <Point />
        </div> */}

<FirstBlock
          lineStyle='maxident-to-bg'
          date='200201'
          picture ='200201'
          text='Lorem ipsum dolor sit amet'

/>

{/* <div className='block-body'>
        <div className='date-wrapper'>
          <h3 className='date-text'>new</h3>
          <div className='picture'>
            <img
            src={img1}
              alt='Stray Kids'
            />
          </div>
        </div>
        <div className='vl maxident-to-bg'>
        <span className="point-wrapper"></span>
        </div>
        <div className='event-wrapper'>
          <h3 className='event-text'>adwindoamwdmpwdmaw</h3>
        </div>
      </div> */}

        <TimeBlock
          lineStyle='maxident-era'
          date='200201'
          picture ='200201'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis finibus leo. Nullam vitae venenatis ligula. Fusce commodo justo non odio pellentesque, in facilisis erat porta. In ultrices, arcu a molestie facilisis, urna lorem placerat enim, dapibus consectetur libero quam ut erat. '
        />
        <TimeBlock
          lineStyle='maxident-to-oddinary'
          date='200202'
          picture ='200202'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis finibus leo. Nullam vitae venenatis ligula.'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='200203'
          picture ='200203'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='200203'
          picture ='200202'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='200203'
          picture ='200202'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='200203'
          picture ='200202'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='200203'
          picture ='200202'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='200203'
          picture ='200202'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='200203'
          picture ='200202'
          text='Lorem ipsum dolor sit amet'
        />
        <LastBlock
          lineStyle='oddinary-to-bg'
          date='200201'
          picture ='200201'
          text='Lorem ipsum dolor sit amet'

/>
        <Footer />
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
}

export default App;
