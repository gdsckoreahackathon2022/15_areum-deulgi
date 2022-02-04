import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const New =()=>{
    const { id } = useParams();
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("http://15.165.85.145:8000/api/3/")
        .then((res)=>setData([...data,res.data]));
    },console.log(data))

    return(
        <div>{data}</div>
    )
}

export default New