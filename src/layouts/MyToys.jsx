import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import UpdateToys from './UpdateToys';
import UpdateToysModal from './UpdateToysModal';
import swal from 'sweetalert'
import { Helmet } from 'react-helmet';

const options = [
    { value: 'Price-Ascending' },
    {value: 'Price-Descending'}
]

const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    const [selected, setSelected] = useState(options[0])
  const [toys, setToys] = useState([]);
    
    useEffect(() => {
        const [value, type] = selected.value.split('-').map(item => item.toLowerCase());
    fetch(`https://power-toy-server.vercel.app/getmytoys/${user?.email}?value=${value}&type=${type}`)
        .then((res) => res.json())
        .then((data) => {
            setToys(data);
      });
    }, [user, selected]);
    
    const changePrice = (value) => {
        setSelected(value)
    }



    const handleDelete = id => {
          
                    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Super Hero!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                fetch(`https://power-toy-server.vercel.app/deleteToys/${id}`, {
                      method: 'DELETE'
                  })
                      .then(res => res.json())
                      .then(data => {
                          if (data.deletedCount > 0) {
                              const remaining = toys.filter(toys => toys._id !== id);
                              setToys(remaining);
                          }
                      })
                swal("Poof! You Just Remove Your Super Power", {
                icon: "success",
                });
            } else {
                swal("Your Super Hero Is Safe!");
            }
            });
          }

    return (
        <div className='my-container'>
             <Helmet>
                <title>Power Toys - My Toys</title>
            </Helmet>
            {
                options.map(options => <div className='lg:text-right text-center mx-auto mt-2'><button  onClick={() => changePrice(options)}>{options.value }</button></div>)
            }
           <div className="overflow-x-auto mt-8">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Toys Name</th>
                    <th>Seller Name</th>
                    <th>Sub Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Rating</th>
                    <th>image</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                       toys?.map((toys, index) => (
                            <tr>
                               <th>{index + 1 }</th>
                               <td>{toys.name }</td>
                                <td>{toys.sellerName }</td>
                               <td>{toys.subCategory}</td>
                               <td>${toys.price}</td>
                               <td>{toys.quantity }</td>
                               <td>{toys.rating }</td>
                               <td><img src={toys.image} className='w-12 h-12' alt="" /></td>
                               <td>
                             <button className='btn btn-sm btn-accent mr-3'><Link to={`/updateToys/${toys._id}`}>Edit</Link></button>
                          
                                   <button className='btn btn-sm btn-outline btn-danger' onClick={()=> handleDelete(toys._id)}>Delete</button>
                                    <label htmlFor={`/editmytoy/${toys._id}`} className="btn btn-sm btn-info ml-3">More</label>
                               </td>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id={`/editmytoy/${toys._id}`} className="modal-toggle" />
                                <div className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Description</span>
                                                </label>
                                                <input type="text"  name="description" value={toys.description} className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Seller Name</span>
                                                </label>
                                                <input type="text" name="sellerName" value={toys.sellerName} className="input input-bordered" />
                                           </div>
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Seller Email</span>
                                            </label>
                                            <input type="text" name="sellerEmail" value={toys.sellerEmail} className="input input-bordered" />
                                           </div>
                                    <div className="modal-action">
                                    <label htmlFor={`/editmytoy/${toys._id}`} className="btn">Done</label>
                                    </div>
                                </div>
                                </div>
                           </tr>
                           
                        )     
                )}        
                </tbody>
                </table>

          
          
            </div>
        </div>
    );
};

export default MyToys;