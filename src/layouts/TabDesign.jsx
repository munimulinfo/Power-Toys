import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars'

const TabDesign = ({ toys }) => {
    
    const { _id, image, sellerName, name, price, rating, quantity } = toys;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl  mx-auto">
                <figure><img src={image} className='h-48 lg:h-96' alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>

                    <h3 className=''>Price: ${price}</h3>
                <h3 className=''>Rating: {rating}
                <ReactStars
                        count={5}
                        value={rating}
  size={24}
  color2={'#ffd700'} /></h3>
                    <div className="card-actions justify-end">
                    <button className="btn btn-accent">
                        <Link to={`/toyDetails/${toys._id}`}>
                            View Details
                         </Link>
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default TabDesign;