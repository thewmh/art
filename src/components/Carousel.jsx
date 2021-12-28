import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';


export default function Carousel(props) {
    const slideData = props.slides;
    const slides = slideData.map((child) =>
        <SplideSlide>
            <img src={child.src} alt={child.alt} />
        </SplideSlide>
    );

    return (
        <>
            <Splide options={ {
                perPage: 1,
                height : '10rem',
                width: '10rem',
                rewind : true,
                cover: true,
                lazyLoad: 'nearby',
                gap    : '1rem',
                arrowPath: 'M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z',
            } } className="mx-auto">
                {slides}
            </Splide>
        </>
    )
}