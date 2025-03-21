import React, { useState } from 'react'

const Array_task = () => {
    const [data, setData] = useState([]);
    
    const items = [
        {
            "name": "Neha",
            "id": 1,
            "class": "10th"
        },
        {
            "name": "Malwal",
            "id": 2,
            "class": "10th"
        },
        {
            "name": "Shizu",
            "id": 3,
            "class": "10th"
        }
    ];

    const Additem =  () => {
         setData(items);
         
         
    };
    console.log(data?.[1]?.name);
    
    return (
        <div className='flex justify-center items-center'>
            
            <button onClick={Additem} className=' bg-green-300 rounded-lg w-50 text-3xl mt-10' >Add Data</button>
            {/* { data.len==null?("No data"):data[0].name} */}
            {/* {data.map((cards) => {
                return (  
                    <div key={cards.id} className='border w-56 bg-blue-300 rounded-lg'>
                        <h3>Name: {cards.name}</h3>
                        <h3>id: {cards.id}</h3>
                        <h3>class: {cards.class}</h3>
                    </div>
                );
            })} */}
             
        </div>
       
    );
};

export default Array_task;
