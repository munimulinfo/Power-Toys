import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddToys = () => {

    const { user } = useContext(AuthContext);
    const handleToyAdd = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const sellerEmail = user?.email;
        const subCategory = form.subCategory.value;
        const description = form.description.value;
        const image = form.image.value;
        const addToys = {
            name, 
            sellerName, 
            price,
            quantity,
            rating,
            sellerEmail,
            subCategory,
            description,
            image
        }


        fetch('https://power-toy-server.vercel.app/addnewtoys', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(addToys)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
               <Navigate to="/" replace={true} />
                    swal({
                title: "Your SuperHero Has Added!",
                text: "Added",
                icon: "success",
                    });
                form.reset()
            }
        })

    }
    return (
        <div>
            <Helmet>
                <title>Power Toys - Add Toys</title>
            </Helmet>
            <h2 className='text-center text-3xl'>Add Your Toys </h2>
            <form onSubmit={handleToyAdd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toys Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" required/>
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" value={user?.displayName} name="sellerName" className="input input-bordered" required/>
                    </div>
                       <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name="email" value={user?.email} placeholder="sellerEmail" className="input input-bordered" required/>   
                    </div>

                       <div className="form-control">
                        <label className="label">
                            <span className="label-text">Choose Sub-Category</span>
                        </label>
                            <select name="subCategory" id="subCategory" className='h-12'required>
                            <option value="Marvel">Marvel</option>
                            <option value="DC">DC</option>
                            <option value="Justice_League">Justice League</option>
                            </select> 
                    </div>

                       <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number"  name="price" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name="quantity" className="input input-bordered" required/>
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating (Select 1-5 Value Only)</span>
                        </label>
                        <input type="number" name="rating" className="input input-bordered" required/>
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input type="text" name="image" className="input input-bordered" required/>
                    </div>
                 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" className="input input-bordered" required/>
                    </div>

                    
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-accent btn-block" type="submit" value="Add A Toy" required/>
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
   )
};

export default AddToys;