import {useState, useRef, useEffect} from "react";
import "..//Style-sheets/TimeBlock.css";
// import img1 from "..//Pictures/img1.jpg";
// import img2 from "..//Pictures/img2.jpg";
// import img3 from "..//Pictures/img3.jpg";

const TimeBlock = ({ lineStyle, date, picture, text }) => {

const wrapper = useRef();

	useEffect(() => {
		animateFading(wrapper.current);
	}, []);

	//animate sliding on scroll
	const animateFading = (element) => {
		const fadeOnScrollOptions = {
			threshold: 0.3,
			rootMargin: '0px 0px -100px 0px',
		};

		const fadeOnScrollObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add('appear');
					observer.unobserve(entry.target);
				}
			});
		}, fadeOnScrollOptions);

		fadeOnScrollObserver.observe(element);
	};

  return (
    <div className='block-wrapper'>
      <div className='block-body'>
        <div className='date-wrapper'>
          <h3 className='date-text'>{date}</h3>
          <div className='picture'>
            <img
            src={require("..//Pictures/"+picture+".jpg")}
              alt={'Stray Kids ' + date}
            />
          </div>
        </div>
        <div className={'vl ' + lineStyle}>
        </div>
        <div className='event-wrapper fade-in' ref={wrapper}>
          <h3 className='event-text'>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default TimeBlock;
