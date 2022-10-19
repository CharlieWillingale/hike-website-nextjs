import { useState, useEffect, useCallback } from "react";
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/Carousel.module.css'
import { PrevButton, NextButton } from "./EmblaCarouselButtons";




function Carousel(props) {
    
    const [viewportRef, embla] = useEmblaCarousel({ loop: false });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
      if (!embla) return;
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);
  
    useEffect(() => {
      if (!embla) return;
      embla.on("select", onSelect);
      embla.on("reInit", onSelect);
      onSelect();
    }, [embla, onSelect]);
    
    const itemsInCarousel = props.carouselList.length - 1
    let index = 0

    return(
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={viewportRef}>
                <div className={styles.embla__container}>
                    {props.carouselList.map((image) => (
                        <div key={image.alt} className={styles.embla__slide}>
                            <Image 
                                src={image.source} 
                                alt={image.alt}
                                width={3000}
                                height={2000}
                            />
                        </div>
                )
            )}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    )
}

export default Carousel