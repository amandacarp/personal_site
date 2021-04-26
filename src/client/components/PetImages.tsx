import React from 'react';
import Lightbox from 'react-image-lightbox';
import { BsImage } from 'react-icons/bs';

const images = [
    'images/homepage.png',
    'images/profilepage.png',
    'images/servicespage.png',
    'images/editpage.png'
];

function PetImages() {

    const [isOpen, setOpen] = React.useState(false);
    const [photoIndex, setPhotoIndex] = React.useState(0);

    const handleClick = () => {
        setOpen(!isOpen)
    }

    const handleNext = () => {
        setPhotoIndex((photoIndex + 1) % images.length)
    }

    const handlePrev = () => {
        setPhotoIndex((photoIndex + images.length - 1) % images.length)
    }

    return (
        <>
            <div>
                <div onClick={handleClick}>
                <BsImage />
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={handleClick}
                        onMovePrevRequest={handlePrev}
                        onMoveNextRequest={handleNext}
                    />
                )}
            </div>
        </>
    )

}

export default PetImages;