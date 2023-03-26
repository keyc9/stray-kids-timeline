import { useState } from "react";
import "..//Style-sheets/TimeBlock.css";
import useWindowDimensions from "./dimensions.js";

const FirstBlock = ({ lineStyle, date, picture, text }) => {
  const { docHeight} = useWindowDimensions();

  const [fix, setFix] = useState(false);
  function setFixedPoint() {
    if (window.scrollY >= docHeight) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixedPoint);

  return (
    <div>
      <div className='text-point '>
        <h3 className='point-text text'>Вы находитесь здесь</h3>
      </div>
      <div className='first-block-wrapper'>
        <div className='block-body'>
          <div className='date-wrapper'>
            <div className='date-text_wrapper'>
              <h3 className='date-text'>{date}</h3>
            </div>
            <div className='picture'>
            <a href={picture} target='_blank' rel="noreferrer">
              <img loading='lazy' src={picture} alt={"Stray Kids " + date} />
            </a>
            </div>
          </div>

          <div className={"vl " + lineStyle}>
            {" "}
            <div className='first-point-blank'></div>
            <div
              className={fix ? "point-wrapper fixed" : "point-wrapper"}
            ></div>
          </div>
          <div className='event-wrapper'>
            <h3 className='event-text text'>{text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
