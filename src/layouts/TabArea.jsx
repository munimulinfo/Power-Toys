import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabDesign from './TabDesign';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TabArea = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    

    const [activeTab, setActiveTab] = useState("Marvel");
    const [loading, setLoading] = useState(false);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const [toys, setToys] = useState()

    useEffect(() => {
        fetch('https://power-toy-server.vercel.app/gettoys')
            .then(res => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [loading])

    useEffect(() => {
        fetch(`https://power-toy-server.vercel.app/allToysByCategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);
    

    return (
        <div className="my-container" data-aos="zoom-in" data-aos-delay="200">

             <div className="gallery-head mx-auto mb-5 mt-8">
                <h2 className='text-3xl font-bold'>Here is Our Powerfull Heroes</h2>
                <div className="divider"></div>
            </div>
              <Tabs forceRenderTabPanel defaultIndex={0}>
            <div className="text-xl text-center mx-auto text-[#2AA69A] mt-10">
                    <TabList>
                        <Tab onClick={() => handleTabClick("Marvel")}>Marvel</Tab>
                        <Tab onClick={() => handleTabClick("DC")}>DC</Tab>
                         <Tab onClick={() => handleTabClick("Justice_League")}>Justice_League</Tab>
                    </TabList>
                </div>

        <TabPanel>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 mb-4 mx-auto'>
{
                            toys?.map(toys => (
                                <TabDesign
                                    toys= {toys}
                                ></TabDesign>
                            ))
                        }
                    </div>
        </TabPanel>
                
                 <TabPanel>
     <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 mb-4 mx-auto'>
{
                            toys?.map(toys => (
                                <TabDesign
                                    toys= {toys}
                                ></TabDesign>
                            ))
                        }
                    </div>
                </TabPanel>
                
                <TabPanel>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 mb-4 mx-auto'>
{
                            toys?.map(toys => (
                                <TabDesign
                                    toys= {toys}
                                ></TabDesign>
                            ))
                        }
                    </div>
                    
    </TabPanel>
  </Tabs>
       </div>
    );
};

export default TabArea;