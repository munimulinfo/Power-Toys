import React, { useEffect } from 'react';
import blackAdam from '../assets/superheroes/blackadam.jpeg'
import blackPanther from '../assets/superheroes/black panther.jpg'
import thor from '../assets/superheroes/thor.jpeg'
import batman from '../assets/superheroes/batman.jpg'
import captain from '../assets/superheroes/captain america.jpg'
import superman from '../assets/superheroes/superman.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <div className='my-container item mx-auto text-center'  data-aos="fade-left" data-aos-delay="400">
            
            <div className="gallery-head mx-auto mb-5 mt-8">
                <h2 className='text-3xl font-bold'>Meet Your Favourite Heroes</h2>
                <div className="divider"></div>
            </div>
            <div className="gallary grid lg:grid-cols-3 grid-cols-1 gap-4 mx-auto text-center">
                <div className="gallery1 mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={blackAdam} alt="BlackAdam" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Black Adam</h2>
                    <p>Take The Friendly Neighborhood Hero Home. Buy Black Adam Toys</p>
                </div>
                </div>
                </div>
                
                 <div className="gallery2 mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={blackPanther} alt="Shoes" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Black Panther</h2>
                    <p>Grab Your ULT Power with Black Panther. Buy Black Panther Toys</p>
                </div>
                </div>
                </div>
                

                 <div className="gallery3 mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={thor} alt="Shoes" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Thor</h2>
                    <p>Buy Super Power Dream Toy Marvel Super Hero Legends Action Figure</p>
                </div>
                </div>
                </div>
                

                <div className="gallery4 mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={batman} alt="Shoes" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Batman</h2>
                    <p>Fantastic action figures of Batman, Get Yours</p>
                </div>
                </div>
                </div>
                
                 <div className="gallery5 mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={captain} alt="Shoes" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Captain America</h2>
                    <p>Here is the Captain Of Your Heroes, Captain America is Coming!</p>
                </div>
                </div>
                </div>
                

                 <div className="gallery6 mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={superman} alt="Shoes" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Superman</h2>
                    <p>We Didn't Need to Told You His Name, The Ultimate Power</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;