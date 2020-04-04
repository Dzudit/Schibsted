import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Container from '../contatiners/container.jsx';

const END_POINT = 'http://localhost:6010/articles/'

Fetch.propsTypes = {
    url: PropTypes.string 
}

export default function Fetch({url}) {
    const [data, setData] = useState(null);
    useEffect(()=>{
        let mounted = true;
        axios.get(END_POINT + url)
        .then(response => {
            if(mounted){
                setData(response.data.articles)
                console.log("repsonse", response)
            }
        })
        .catch( error =>  console.log("err",error));

        return () => {mounted = false};
    }, [url]);

    if(!data) {
        return <span>Loading data...</span>
    }
    return  <ListArticles listData={data} />
}