import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UpdateToys = () => {

    const toys = useLoaderData()



// const { user } = useContext(AuthContext);

        const handleToyEdit = event =>{
        event.preventDefault();

            const form = event.target;
            const _id = form._id.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
            const updateToys = {
            _id,
            price,
            quantity,
            description,
        }

        console.log(updateToys);

            fetch(`https://power-toy-server.vercel.app/updateToys/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateToys),
            })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    swal({
                    title: "Your SuperHero Has Updated!",
                    text: "Updated",
                    icon: "success",
                    });
                }
            });

    }
 
    return (
        <>
            <Helmet>
                <title>Power Toys - { toys.name}</title>
            </Helmet>
            <h2 className='text-center text-3xl'>Update Your Toy </h2>
            <div className="divider"></div>
            <h2 className='text-center text-3xl mb-8'>Toys Name: {toys.name}</h2>
            <form onSubmit={handleToyEdit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="form-control hidden">
                        <label className="label">
                            <span className="label-text">ID</span>
                        </label>
                        <input type="text" value={toys._id}  name="_id" className="input input-bordered" />
                    </div>

                       <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" defaultValue={toys.price}  name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" defaultValue={toys.quantity} name="quantity" className="input input-bordered" />
                    </div>
                 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" defaultValue={toys.description} name="description" className="input input-bordered" />
                    </div>

                    
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-accent btn-block" type="submit" value="Update" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </>
    );
};

export default UpdateToys;