import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WestIcon from '@mui/icons-material/West';

export const ArrowButton = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group"> 
        <WestIcon className={currentSlide === 0 ? 'disable' : ' bg-ged-500'} onClick={() => previous()} />
        <ArrowRightAltIcon onClick={() => next()} />
      </div>
    );
  };