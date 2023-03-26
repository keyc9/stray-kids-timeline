import "..//Style-sheets/TimeBlock.css";

const TimeBlock = ({ lineStyle, date, picture, text }) => {

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
        <div className= 'event-wrapper'>
          <h3 className='text event-text'>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default TimeBlock;
