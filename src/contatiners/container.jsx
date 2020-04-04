import React, {useState, useEffect} from 'react';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import ListItem from '../components/list.jsx'
const { TabPane } = Tabs;


const END_POINT = 'http://localhost:6010/articles/'

export default function Container() {

    const [sports, setDataSprots] = useState(null);
    const [articles, setDataArticles] = useState(null);
    useEffect(()=>{
        let mounted = true;
        axios.get(END_POINT + 'sports')
        .then(response => {
            if(mounted){
                setDataSprots(response.data.articles)
                console.log("repsonse", response)
            }
        })
        .catch( error =>  console.log("err",error));

      /*  axios.get(END_POINT + 'articles')
        .then(response => {
            if(mounted){
                setDataArticles(response.data.articles)
                console.log("repsonse", response)
            }
        })
        .catch( error =>  console.log("err",error));

        return () => {mounted = false};*/
    },[articles,sports]);

    
    if(!sports) {
        return <span>Loading data...</span>
    }

    return <Tabs defaultActiveKey="1">
            <TabPane
                    tab={
                        <span>
                        <AppleOutlined />
                         Sports
                        </span>
                    }
                    key="1"
                    >       
                        <ListItem listData={sports}/> 
                    </TabPane>
                    <TabPane
                    tab={
                        <span>
                        <AndroidOutlined />
                         Aricles
                        </span>
                    }
                    key="2">
            </TabPane>
    </Tabs>
}