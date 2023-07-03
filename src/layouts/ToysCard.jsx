import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({ toys, handleSearch }) => {

    const { _id, image, sellerName, name, price, subCategory, quantity } = toys;
    
    return (
         <div className="card card-compact w-96 bg-base-100 shadow-xl  mx-auto">
                <figure><img src={image} className='h-48 lg:h-96' alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>

                    <h3 className=''>Seller: {sellerName}</h3>
                    <h3 className=''>Price: ${price}</h3>
                    <h3 className=''>Sub Category: {subCategory}</h3>
                    <h3 className=''>Available Quantity: {quantity }</h3>
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

export default ToysCard;