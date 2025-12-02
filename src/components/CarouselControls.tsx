import Arrow from '../assets/arrow-carousel.svg'

function SliderCarouselButtonLeft() {
    return (
        <button className='max-w-8'>
            <img src={Arrow} alt="slide-left" />
        </button>
    );
}

function SliderCarouselButtonRight() {
    return (
        <button className='max-w-8'>
            <img src={Arrow} alt="slide-right" className='rotate-180'/>
        </button>
    );
}

export { SliderCarouselButtonLeft, SliderCarouselButtonRight };
