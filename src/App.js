import "./App.css";
import { useState, useEffect } from "react";
import Cover from ".//Components/Cover.js";
import TimeBlock from ".//Components/TimeBlock";
import FirstBlock from "./Components/FirstBlock";
import LastBlock from ".//Components/LastBlock";
import Footer from ".//Components/Footer";
import useWindowDimensions from ".//Components/dimensions.js";
import { FaAngleUp } from "react-icons/fa";
import VideoBlock from ".//Components/VideoBlock";

function App() {
  const { docHeight } = useWindowDimensions();
  // ------------------------------------------------------------------------------------------------

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > docHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ! ----------------------------------------------------------------
  return (
    <div className='App'>
      <div className='top-to-btm'>
        {" "}
        {showTopBtn && (
          <FaAngleUp className='icon-position icon-style' onClick={goToTop} />
        )}{" "}
      </div>

      <Cover />

      <div className='event-box'>
        <FirstBlock
          lineStyle='maxident-to-bg'
          date='26.03.18'
          picture={require(".//Pictures/200201.jpg")}
          text='Lorem ipsum dolor sit amet'
        />

        <VideoBlock 
                  lineStyle='maxident-to-bg'
                  date='xx.03.18'
                  text='Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet'
                  youtubeID = 'OvioeS1ZZ7o'
        />

        <TimeBlock
          lineStyle='maxident-era'
          date='26.03.18'
          picture={require(".//Pictures/200202.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='maxident-to-oddinary'
          date='26.03.18'
          picture={require(".//Pictures/200203.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='26.03.18'
          picture={require(".//Pictures/200203.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='26.03.18'
          picture={require(".//Pictures/200203.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='26.03.18'
          picture={require(".//Pictures/200203.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='26.03.18'
          picture={require(".//Pictures/200203.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='26.03.18'
          picture={require(".//Pictures/200203.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='26.03.18'
          picture={require(".//Pictures/200203.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <TimeBlock
          lineStyle='oddinary-era'
          date='26.03.18'
          picture={require(".//Pictures/200203.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <LastBlock
          lineStyle='oddinary-to-bg'
          date='26.03.18'
          picture={require(".//Pictures/200201.jpg")}
          text='Lorem ipsum dolor sit amet'
        />
        <Footer />
        <div></div>
      </div>
    </div>
  );
}

export default App;
