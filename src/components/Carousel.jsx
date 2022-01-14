import React, { useState, useEffect, createRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Carousel(props) {
    const [isLoading, setIsLoading] = useState(true);

    function onLoad() {
        setTimeout(() => setIsLoading(false), 1000);
    }
    const mainRef = createRef();
    const thumbsRef = createRef();
    const slideData = props.slides;
    const slides = slideData.map((child, index) =>
        <SplideSlide key={index}>
            <img src={child.src} alt={child.alt} />
        </SplideSlide>
    );
    const thumbsWidth = 100 / slides.length;

    useEffect(() => {
        if ( mainRef.current && thumbsRef.current && thumbsRef.current.splide ) {
            mainRef.current.sync( thumbsRef.current.splide );
          }
    })

    return (
        <>
            <img
                src={
                slideData[0].src
                }
                style={{ display: isLoading ? "block" : "none" }}
            />
            <div onLoad={onLoad} style={{ display: isLoading ? "none" : "block" }}>
            <Splide options={ {
                type: 'slide',
                heightRatio : 1,
                width: '50%',
                rewind : true,
                cover: true,
                lazyLoad: 'nearby',
                gap    : '1rem',
                pagination: false,
                arrows: false,
            } } className="mx-auto" ref={ mainRef }>
                {slides}
            </Splide>
            <Splide options={ {
                rewind: true,
                gap: '1rem',
                pagination: false,
                fixedWidth: `${thumbsWidth}%`,
                fixedHeight: 70,
                cover: true,
                focus: 'center',
                arrowPath: 'M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z',
                isNavigation: true,
            } } className="mx-auto" ref={ thumbsRef }>
                {slides}
            </Splide>
            </div>
        </>
    )
}