import React, { useEffect, useState } from 'react';
import ToysCard from './ToysCard';
import { Helmet } from 'react-helmet';

const AllToys = () => {

  const [searchText, setSearchText] = useState("");
  const [showAll, setShowAll] = useState(false);

  const [toys, setToys] = useState()
  
  // For Show Fixed Toys
  const handleShowAll = () => {
        setShowAll(true);
  };
  
    useEffect(() => {
        fetch('https://power-toy-server.vercel.app/gettoys')
        .then(res => res.json())
        .then((result) => {
            setToys(result);
        });
    }, [])
    
      const handleSearch = () => {
    fetch(`https://power-toy-server.vercel.app/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

    return (
      <>
        <Helmet>
                <title>Power Toys - All Toys</title>
            </Helmet>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Here" className="input input-bordered input-accent w-full max-w-xs"
          />{" "}
          <button className='btn btn-accent mr-5 mb-8' onClick={handleSearch}>Search</button>
            </div>
            

          <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 mb-4 mx-auto'>
            

            {
                toys?.slice(0, showAll ? toys.length : 20).map((toys) => (<ToysCard
                    key={toys._id}
                    toys={toys}
                    handleSearch={handleSearch}
                    ></ToysCard>)
               )}
  
          

        </div>
       <div className="text-center">
                  
                          {!showAll && (
                              <button className="btn m-auto flex" onClick={handleShowAll}> Show All</button>
                            )}
                    </div>
        
        </>
      
    );
};

export default AllToys;