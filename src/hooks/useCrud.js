import axios from "axios";
import { useState } from "react";

const useCrud = (base) => {
    const [apiData, setApiData] = useState();
    const [isLoading, setisLoading] = useState(true);
    const [hasError, sethasError] = useState(false);
    //leer
    const getApi = (path='users') => {
        const url = `${base}${path}/`;
        axios.get(url)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err));

    }
    // crear
    const postApi = (path, data) => {
        const url = `${base}${path}/`;
        axios.post(url, data)
        .then(res =>{ 
            setApiData([...apiData, res.data]);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }
    //eliminar
    const deleteApi = (path, id) => {
        const url = `${base}${path}/${id}/`
        axios.delete(url)
        .then(()=> {
            setApiData(apiData.filter(user=>user.id!==id));
            console.log('delete success');
        })
        .catch(err => console.log(err));

    }
    //actualizar
    const patchApi = (path, data, id) => {
        const url = `${base}${path}/${id}/`;
        axios.patch(url,data)
        .then(res => {
            setApiData(apiData.map((user) => user.id===id?res.data : user));
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }

    return [apiData, getApi, postApi, deleteApi, patchApi];
}

export default useCrud;