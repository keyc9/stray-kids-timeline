import "./App.css";
import { useState, useRef, useEffect } from "react";
import Cover from ".//Components/Cover.js";
import TimeBlock from ".//Components/TimeBlock";
import Point from ".//Components/Point";
import FirstBlock from ".//Components/FirstBlock";
import LastBlock from ".//Components/LastBlock";
import Footer from ".//Components/Footer";

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
        <FirstBlock />
        <div className={fix ? "point-wrapper fixed" : "point-wrapper"}>
          <Point />
        </div>

        <TimeBlock
          lineStyle='maxident-to-bg'
          date='200201'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis finibus leo. Nullam vitae venenatis ligula. Fusce commodo justo non odio pellentesque, in facilisis erat porta. In ultrices, arcu a molestie facilisis, urna lorem placerat enim, dapibus consectetur libero quam ut erat. '
        />
        <TimeBlock
          lineStyle='maxident-to-oddinary vl'
          date='200202'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis finibus leo. Nullam vitae venenatis ligula.'
        />
        <TimeBlock
          lineStyle='oddinary-era vl'
          date='200203'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era vl'
          date='200203'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era vl'
          date='200203'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era vl'
          date='200203'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era vl'
          date='200203'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era vl'
          date='200203'
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-to-bg vl'
          date='200203'
          text='Lorem ipsum dolor sit amet'
        />
        <LastBlock />
        <Footer />
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
}

export default App;
