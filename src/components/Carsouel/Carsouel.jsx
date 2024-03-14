import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";


export default function Carsouel() {
  return (
    <>
    <TECarousel showControls showIndicators ride="carousel">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem
          itemID={1}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img
            src="/images/slideshow-banners/home12-category-banner1.jpg"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">First slide label</h5>
            <p>
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </TECarouselItem>
        <TECarouselItem
          itemID={2}
          className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img
            src="/images/slideshow-banners/home12-category-banner2.jpg"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">Second slide label</h5>
            <p>
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </TECarouselItem>
        <TECarouselItem
          itemID={3}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img
            src="/images/slideshow-banners/home12-category-banner1.jpg"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h6 className="text-xl block">Third slide label</h6>
            <p>
              Some representative placeholder content for the third slide.
            </p>
          </div>
        </TECarouselItem>
      </div>
    </TECarousel>
  </>
  )
}
