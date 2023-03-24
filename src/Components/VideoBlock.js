import { useRef, useEffect } from "react";
import "..//Style-sheets/TimeBlock.css";

const VideoBlock = ({ lineStyle, date, youtubeID, text }) => {
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

  return (
    <div className='block-wrapper'>
      <div className='block-body'>
        <div className='date-wrapper video-wrapper'>
          <div className=' date-text_wrapper'>
            <h3 className='date-text video-date'>{date}</h3>
          </div>
          <div className='video-container'>
            <iframe
              className=''
              loading="lazy"
              src={`https://youtube.com/embed/${youtubeID}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen='allowfullscreen'
            ></iframe>
          </div>
        </div>
        <div className={"vl " + lineStyle}></div>
        <div className='event-wrapper fade-in' ref={wrapper}>
          <h3 className='text event-text video-event'>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;
