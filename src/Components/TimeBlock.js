import { useRef, useEffect } from "react";
import "..//Style-sheets/TimeBlock.css";

const TimeBlock = ({ lineStyle, date, picture, text }) => {
  const wrapper = useRef();

  useEffect(() => {
    animateFading(wrapper.current);
  }, []);

  //animate sliding on scroll
  const animateFading = (element) => {
    const fadeOnScrollOptions = {
      threshold: 0.4,
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

  return (
    <div className='block-wrapper'>
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
        <div className={"vl " + lineStyle}></div>
        <div className='event-wrapper fade-in' ref={wrapper}>
          <h3 className='text event-text'>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default TimeBlock;
