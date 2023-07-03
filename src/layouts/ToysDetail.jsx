import React from 'react';
import { useCol } from 'react-bootstrap/esm/Col';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import ReactStars from 'react-stars'
import { Helmet } from 'react-helmet';

const ToysDetail = () => {


     const toys = useLoaderData()
    
    const { name, _id, sellerName, subCategory, price, image, rating, description, quantity, sellerEmail } = toys;

    return (
        <>
              <Helmet>
                <title>Power Toys - {toys?.name}</title>
            </Helmet>
               <div className="mx-auto px-4 w-full max-w-7xl bg-white text-gray-700">
      <div className="flex flex-col lg:flex-row">

        {/* :PICTURES CONTAINER */}
        <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
          {/* ::Main Picture */}
          <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
            <img src={image} alt='image' className="object-contain w-full h-full" />
          </div>
        </div>



        {/* :PRODUCT DETAILS */}
                    <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200 gap-4 ">
                         <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ml-4">
                    <h3 className='mt-6 text-xl text-gray-500 font-medium'>{ description}</h3>             
                        </div>
                        
                         <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ml-8">
                        <label>Seller Email:</label>
                            <h3>{ sellerEmail}</h3>             
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ml-8">
                <label>Seller Name:</label>
                    <h3>{ sellerName}</h3>             
                </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ml-8">
                <label>Sub Category:</label>
                    <h3>{ subCategory}</h3>             
                </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ml-8">
                {/* :::Quantity */}
                <label>Hero Quantity:</label>
                    <input type="number" value={quantity} min="1" className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0" />               
                        </div>
                        

                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ml-8">
                {/* :::Quantity */}
                <label>Hero Price $:</label>
                    <input type="number" value={price} min="1" className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0" />               
                        </div>
  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ml-8">
                {/* :::Quantity */}
                            <label>Ratings: { rating}+</label>
                             <ReactStars
                        count={5}
                        value={rating}
  size={24}
  color2={'#ffd700'} />            
                        </div>
                        

                    </div>
                    

      </div>
    </div>
        </>
    );
};

export default ToysDetail;