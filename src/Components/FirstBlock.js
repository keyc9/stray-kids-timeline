import { useState, useRef, useEffect } from "react";
import "..//Style-sheets/TimeBlock.css";
import useWindowDimensions from "./dimensions.js";

const FirstBlock = ({ lineStyle, date, picture, text }) => {
  const wrapper = useRef();

  useEffect(() => {
    animateFading(wrapper.current);
  }, []);

  //animate sliding on scroll
  const animateFading = (element) => {
    const fadeOnScrollOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    };

    const fadeOnScrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      fadeOnScrollOptions
    );

    fadeOnScrollObserver.observe(element);
  };

  const { docHeight } = useWindowDimensions();
  let pointPosition = (docHeight + 0);

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
          <div className='event-wrapper fade-in' ref={wrapper}>
            <h3 className='event-text text'>{text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
