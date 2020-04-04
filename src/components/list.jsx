import React from 'react'
import {List, Card, Row, Col} from 'antd';


export default function ListItem({listData}) {
    return <List
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
                        alt="image cannot load"
                        src={item.image}
                        onerror="this.style.display='none'"
                    />
                }
                >
                <List.Item.Meta
                    title={<h2>{item.title}</h2>}
                    description={item.category}
                />
                {item.preamble}
                </List.Item>
            </Card>
        )}
    />
}