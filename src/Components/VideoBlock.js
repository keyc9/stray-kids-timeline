import "..//Style-sheets/TimeBlock.css";

const VideoBlock = ({ lineStyle, date, youtubeID, text }) => {

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
              lazy-loading="true"
              src={`https://youtube.com/embed/${youtubeID}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture'
              allowFullScreen='allowfullscreen'
            ></iframe>
          </div>
        </div>
        <div className={"vl " + lineStyle}></div>
        <div className='event-wrapper fade-in'>
          <h3 className='text event-text video-event'>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;
