import '..//Style-sheets/Cover.css';
import useWindowDimensions from "./dimensions.js";

const Cover = () => {
    const { docHeight } = useWindowDimensions();

    return (
        <div className='cover_wrapper' style={ { height: docHeight }}>
                <h3 className="cover-text">You make Stray Kids <br/> STAY</h3>
        </div>
    )
}


export default Cover;