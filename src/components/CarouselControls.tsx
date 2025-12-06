import Arrow from '../assets/arrow-carousel.svg'

function SliderCarouselButtonLeft({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className='max-w-8 root:invert hover:cursor-pointer hover:scale-110'>
            <img src={Arrow} alt="slide-left" />
        </button>
    );
}

function SliderCarouselButtonRight({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className='max-w-8 root:invert hover:cursor-pointer hover:scale-110'>
            <img src={Arrow} alt="slide-right" className='rotate-180'/>
        </button>
    );
}

export { SliderCarouselButtonLeft, SliderCarouselButtonRight };
