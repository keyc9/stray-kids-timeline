import {useState, useRef, useEffect} from "react";
import "..//Style-sheets/TimeBlock.css";
// import img1 from "..//Pictures/img1.jpg";
// import img2 from "..//Pictures/img2.jpg";
// import img3 from "..//Pictures/img3.jpg";

const FirstBlock = ({ lineStyle, date, picture, text }) => {

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

        const [fix, setFix] = useState(false);
        function setFixedPoint() {
          if (window.scrollY >= 430) {
            setFix(true);
          } else {
            setFix(false);
          }
        }
      
        window.addEventListener("scroll", setFixedPoint);


  return (
    <div>
    <div className='last-block-wrapper'>
      <div className='block-body'>
        <div className='date-wrapper'>
        <div className='date-text_wrapper'>
          <h3 className='date-text'>{date}</h3>
          </div>
          <div className='picture'>
            <img
            src={require("..//Pictures/"+picture+".jpg")}
              alt={'Stray Kids ' + date}
            />
          </div>
        </div>
        {/* <div className="last-point-blank"></div> */}
        <div className={'vl ' + lineStyle}>
        <div className={fix ? "point-wrapper fixed" : "point-wrapper"}>
        </div>
        </div>
        <div className='event-wrapper fade-in' ref={wrapper}>
          <h3 className='event-text text'>{text}</h3>
        </div>
      </div>
            <div className="text-point">
        <h3 className='last-text text'>Начало пути</h3>
      </div>
    </div>
    </div>
  );
};

export default FirstBlock;
