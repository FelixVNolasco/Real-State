"use client"

import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import { images, CustomImage } from "../../../lib/images";
import { useState } from "react";
import "react-18-image-lightbox/style.css";

export default function App({ showGallery }: { showGallery: boolean }) {

    const [index, setIndex] = useState<number>(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index: number, item: CustomImage) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <>
            {
                showGallery ?
                    (
                        <div className="w-full">
                            <Gallery
                                images={images}
                                onClick={handleClick}
                                enableImageSelection={false}
                            />
                            {
                                !!currentImage && (
                                    /* @ts-ignore */
                                    <Lightbox
                                        mainSrc={currentImage.original}
                                        imageTitle={currentImage.caption}
                                        mainSrcThumbnail={currentImage.src}
                                        nextSrc={nextImage.original}
                                        nextSrcThumbnail={nextImage.src}
                                        prevSrc={prevImage.original}
                                        prevSrcThumbnail={prevImage.src}
                                        onCloseRequest={handleClose}
                                        onMovePrevRequest={handleMovePrev}
                                        onMoveNextRequest={handleMoveNext}
                                    />
                                )
                            }
                            <hr className="mt-4" />
                        </div >
                    )
                    :
                    (
                      null
                    )
            }
        </>
    );
}