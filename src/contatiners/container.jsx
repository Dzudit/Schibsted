import React, {useState, useEffect, createContext} from 'react';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined, SortAscendingOutlined } from '@ant-design/icons';
import fetch from '../services/fetch.jsx';
import ListItem from '../components/list.jsx';

const { TabPane } = Tabs;
let dataSports = null;
let dataFashion = null;

export default function Container() {

    const [sports, setSports] = useState(null);
    const [fashion, setFashion] = useState(null);
    const [articles, setArticles] = useState(null);

    useEffect(()=>{
        let mounted = true;

            !sports && fetch('sports')
                .then( resp => { mounted && setSports( <ListItem listData={dataSports = resp.data.articles}/>) })
                .catch(err => { setSports( err.response.data.message)})
            
            !fashion && fetch('fashion')
                .then( resp => { mounted && setFashion(<ListItem listData={dataFashion = resp.data.articles}/>) })
                .catch(err => { setFashion( err.response.data.message)})

                
            dataSports && dataFashion && !articles && setArticles(<ListItem listData={[...dataSports, ...dataFashion]}/>);
        
        return () => {mounted = false};
   
    },[fashion, sports, articles]);

    function filter(data) {

        let error = false;
        let sortedDate = data.sort( (a,b) => { 
            isNaN( new Date(a.date).getTime()) ||  isNaN( new Date(b.date).getTime()) ? error = true : null;
            return new Date(a.date) - new Date(b.date);
        }) 
        return !error ? sortedDate : null;
    }

    function sort () {
        let sortedFashion = dataFashion && filter(dataFashion);
        let sortedSports = dataSports && filter(dataSports);
        let sortedAll = dataFashion && dataSports && filter([...dataFashion, ...dataSports])
        sortedFashion ? setFashion( <ListItem listData={sortedFashion}/>) : alert("cannot sorted Fashion, not all date are correct");
        sortedSports ? setSports( <ListItem listData={sortedSports}/>) : alert("cannot sorted Sports, not all date are correct");
        sortedAll ? setSports( <ListItem listData={sortedAll}/>) : alert("cannot sorted Articles, not all date are correct");
    }

    return  <div>
        <div className="sort" onClick={sort}><SortAscendingOutlined /> Sort by date</div>
        <Tabs defaultActiveKey="1">
                <TabPane
                        tab={
                            <span>
                            <AppleOutlined />
                            Sports
                            </span>
                        }
                        key="1">       
                        { sports ? sports : "Loading sports"}
                </TabPane>
                <TabPane
                        tab={
                            <span>
                            <AndroidOutlined />
                            Fashion
                            </span>
                        }
                        key="2">
                        { fashion ? fashion : "Loading fashion"}
                </TabPane>
                <TabPane
                        tab={
                            <span>
                            <AndroidOutlined />
                            Show All
                            </span>
                        }
                        key="3">
                        { articles ? articles : "cannot load articles" }
                </TabPane>
        </Tabs> 
    </div>
}