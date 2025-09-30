import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetAxios = () => {
    const [data, setData] = useState([]);

    const getData = ()=> {
        axios.get("https://jsonplaceholder.typicode.com/users", data)
        .then((res)=> {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err)=> {
            console.log("This Error is Fetching: ", err);
        })
    }
    useEffect(() => {
        getData();
    }, [])
    
  return (
    <>
        <h1>Hlo Chef | Here is Get Metho to fetch data with the help of Axios.</h1>
        <div className="getAxiosData">
            {
                data.map((axData)=> {
                    return (
                        <div key={axData.id}>
                            <h3>{axData.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default GetAxios
