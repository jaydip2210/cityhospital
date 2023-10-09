import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';
import { Heading } from '../../components/Ui/Heading/Heading';
import Card from '../../components/Ui/Card/Card';
import { Link } from 'react-router-dom';

function Review(props) {

    const [rData, setRdata] = useState([]);

    const getData = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/comments"); //string na format ma male

        let data = await response.json(); //ane json ma ferva
        setRdata(data);
        console.log(data);
    }

    useEffect(() => {
        getData();
    })

    return (
        <>
            <section id="testimonials" className="testimonials">
                <div className="container">
                    <div className="section-title"><Heading>Reviews</Heading></div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Navigation]}
                        navigation={true}
                        className="mySwiper"
                    >
                        {
                            rData.map((v) => {
                                return (
                                    <SwiperSlide>
                                        <Link to={"/review-details" + v.id}>
                                            <Card
                                                title={v.name.substring(0, 15)}
                                                subtitle={v.body.substring(0, 150)}
                                            />
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Review;