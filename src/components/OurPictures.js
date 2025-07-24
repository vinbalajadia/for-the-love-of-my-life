import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './OurPictures.css';
import { Pagination } from 'swiper/modules';

const images = [
    '/images/picture2.jpg',
    '/images/picture3.jpg',
    '/images/picture4.jpg',
    '/images/picture5.jpg',
    '/images/picture6.jpg',
    '/images/picture7.jpg',
    '/images/picture8.jpg',
    '/images/picture9.jpg',
    '/images/picture10.jpg',
    '/images/picture11.jpg',
    '/images/picture12.jpg',
    '/images/picture13.jpg',
    '/images/picture14.jpg',
    '/images/picture15.jpg',
    '/images/picture16.jpg',
    '/images/picture17.jpg',
    '/images/picture18.jpg',
];

const OurPictures = () => {
    const [loadedImages, setLoadedImages] = React.useState(new Set());
    const [failedImages, setFailedImages] = React.useState(new Set());

    const handleImageError = (e, index) => {
        console.log(`Failed to load image ${index + 1}:`, e.target.src);
        setFailedImages(prev => new Set([...prev, index]));
    };

    const handleImageLoad = (index) => {
        console.log(`Successfully loaded image ${index + 1}`);
        setLoadedImages(prev => new Set([...prev, index]));
    };

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Ang ganda mo palagi. ♡</h2>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
                spaceBetween={10}
                slidesPerView={1}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="image-container">
                            <img 
                                src={img} 
                                alt={`memory-${index + 1}`} 
                                className="memory-img"
                                onError={(e) => handleImageError(e, index)}
                                onLoad={() => handleImageLoad(index)}
                            />
                            {failedImages.has(index) && !loadedImages.has(index) && (
                                <div className="image-fallback">
                                    <p>Image {index + 1}</p>
                                    <p>Path: {img}</p>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurPictures;