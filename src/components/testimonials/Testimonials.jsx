import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonial_data = [
    {
        avatar: AVTR1,
        name: 'Jane doe',
        review:"I had the pleasure of working with Nikhil Chavan as the project manager for our application development. Nikhil's exceptional leadership, attention to detail, and dedication to delivering results were evident throughout the project. Thanks to his efforts, we successfully launched the application on time and within scope. I highly recommend Nikhil for his outstanding project management skills, it's a 'great' experience working with him.",  
     },
    {
        avatar: AVTR2,
        name: 'Jack Jones',
        review:"I had the pleasure of working with Nikhil Chavan as the project manager for our application development. Nikhil's exceptional leadership, attention to detail, and dedication to delivering results were evident throughout the project. Thanks to his efforts, we successfully launched the application on time and within scope. I highly recommend Nikhil for his outstanding project management skills, it's a 'great' experience working with him.",  
    },
    {
        avatar: AVTR3,
        name: 'John Doe',
        review:"I had the pleasure of working with Nikhil Chavan as the project manager for our application development. Nikhil's exceptional leadership, attention to detail, and dedication to delivering results were evident throughout the project. Thanks to his efforts, we successfully launched the application on time and within scope. I highly recommend Nikhil for his outstanding project management skills, it's a 'great' experience working with him.",  
    },
    {
        avatar: AVTR4,
        name: 'Martin Garrix',
        review:"I had the pleasure of working with Nikhil Chavan as the project manager for our application development. Nikhil's exceptional leadership, attention to detail, and dedication to delivering results were evident throughout the project. Thanks to his efforts, we successfully launched the application on time and within scope. I highly recommend Nikhil for his outstanding project management skills, it's a 'great' experience working with him.",  
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
               {
                testimonial_data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial" >
                        <div className="client__avatar">
                            <img src={avatar} alt="avatar1" />
                        </div>
                        <h5 className="client__name">{name}</h5>
                        <small className="client__review">
                            {review}
                        </small>
                    </SwiperSlide>
                    )
                })
               }
            </Swiper>
        </section>
    )
}

export default Testimonials