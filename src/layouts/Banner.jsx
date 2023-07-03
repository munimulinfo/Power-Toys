import React from 'react';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full h-[700px]">
    <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full rounded-xl h-full " />
       <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='lg:text-6xl text-3xl font-bold'>Living With Your Favourite SuperHeroes</h2>
                        <p>Home of Action Figures: Toys, Collectibles & More</p>
                        <div>
                            <button className="btn btn-accent mr-5 mb-5"><Link to="/alltoys">Discover More</Link></button>
                            <button className="btn btn-outline btn-info">Get Hero</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn  btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-accent btn-circle ml-3">❯</a>
                </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full rounded-xl h-full" />
       <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                       <h2 className='lg:text-6xl text-3xl font-bold'>Living With Your Favourite SuperHeroes</h2>
                        <p>Home of Action Figures: Toys, Collectibles & More</p>
                        <div>
                            <button className="btn btn-accent mr-5 mb-5"><Link to="/alltoys">Discover More</Link></button>
                            <button className="btn btn-outline btn-info">Get Hero</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-accent btn-circle ml-3">❯</a>
                </div>
    </div> 

    <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} className="w-full rounded-xl h-full" />
       <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                       <h2 className='lg:text-6xl text-3xl font-bold'>Living With Your Favourite SuperHeroes</h2>
                        <p>Home of Action Figures: Toys, Collectibles & More</p>
                        <div>
                            <button className="btn btn-accent mr-5 mb-5"><Link to="/alltoys">Discover More</Link></button>
                            <button className="btn btn-outline btn-info">Get Hero</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-accent btn-circle ml-3">❯</a>
                </div>
    </div> 
            
</div>
    );
};

export default Banner;