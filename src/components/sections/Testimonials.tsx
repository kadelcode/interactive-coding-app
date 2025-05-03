"use client";

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Swiper styles for pagination
import 'swiper/css/autoplay'; // Import Swiper styles for autoplay


import { Autoplay, Pagination } from 'swiper/modules'; // Import Swiper modules

const TestimonialsData = [
    {
        name: 'Alex Johnson',
        role: 'Frontend Engineer',
        avatar: '/avatars/alex.jpg',
        quote: 'Exactly the kind of practice I needed before my technical interviews!',
    },
    {
        name: 'Sara Lee',
        role: 'Full Stack Dev',
        avatar: '/avatars/sara.jpg',
        quote: 'The interactive challenges and instant feedback are game-changers.',
    },
    {
        name: 'Michael Chen',
        role: 'CS Student',
        avatar: '/avatars/michael.jpg',
        quote: 'Super polished and motivating—I’m hooked!',
    },
    {
        name: 'Emily Davis',
        role: 'Software Engineer',
        avatar: '/avatars/emily.jpg',
        quote: 'I love the variety of challenges and the community support.',
    },
    {
        name: 'David Smith',
        role: 'Data Scientist',
        avatar: '/avatars/david.jpg',
        quote: 'The platform is intuitive and the challenges are well-structured.',
    },
    {
        name: 'Sophia Brown',
        role: 'DevOps Engineer',
        avatar: '/avatars/sophia.jpg',
        quote: 'I appreciate the focus on real-world problems. It’s a great way to learn!',
    },
]

const Testimonials = () => {
    return (
        <section className="py-24 px-4 bg-gray-900 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">What Developers Are Saying</h2>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className='w-full max-w-3xl mx-auto'
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                style={{ height: 'auto' }} // Set height to auto for better responsiveness
            >
                {TestimonialsData.map((testimonial, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center justify-center text-center min-h-[300px] p-6 bg-gray-800 rounded-lg shadow-lg">
                        <div className='text-center'>
                        <img 
                          src={`https://ui-avatars.com/api/?name=${testimonial.name}&background=4a5568&color=fff&size=64&rounded=true`} 
                          alt={`${testimonial.name}'s avatar`} 
                          className="rounded-full mb-4 inline-block" 
                        />
                        <p className="text-lg italic mb-2">"{testimonial.quote}"</p>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;