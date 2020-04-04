import React from 'react'
import {List, Card } from 'antd';
import PropTypes from 'prop-types';

ListItem.propTypes = {
    listData: PropTypes.array
};

export default function ListItem({listData}) {
    return <div>
        <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            renderItem={item => (
                <Card>
                    <List.Item
                    key={item.id}
                    extra={
                        <img
                            width={272}
                            alt="no image for this article"
                            src={item.image}
                        
                        />
                    }
                    >
                    <List.Item.Meta
                        title={<div>{item.title} - <span style={{color: "red"}}>{item.date}</span></div>}
                        description={item.category}
                    />
                    {item.preamble}
                    </List.Item>
                </Card>
            )}
        />
        </div>
}