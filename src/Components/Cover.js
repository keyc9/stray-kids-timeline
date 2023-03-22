import '..//Style-sheets/Cover.css';
import useWindowDimensions from "./dimensions.js";
import cover_img from "..//Pictures/cover.png";

const Cover = () => {
    const { docHeight, docWidth } = useWindowDimensions();


    // document.querySelector('cover_wrapper').style.height = Math.round(height)+'px';
    // document.querySelector('cover_wrapper').style.width = Math.round(width)+'px';

    return (
        <div className='cover_wrapper' style={ { height: docHeight }}>
                <h3 className="cover-text">You make Stray Kids <br/> STAY</h3>
        </div>
    )
}


export default Cover;