import React, {useEffect, useState} from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {withRouter} from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const defaultSelectedKey = (currentPath) => {
    // eslint-disable-next-line default-case
    switch (currentPath) {
        case '/firstPage/':
            return '1';
        case '/secondPage/':
            return '2';
        case '/thirdPage/':
            return '3';
        default:
            return '3';
    }
};
const MainPage = ({history, children}) => {
    const [current, setCurrent] = useState(defaultSelectedKey(history.location.pathname));
    useEffect(()=>{
        if(history.location.pathname === '/')
            history.push('/thirdPage/');
        setCurrent(defaultSelectedKey(history.location.pathname));
    },[history.location.pathname]);



    return <Layout>
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[current]}
                selectedKeys={[current]}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="3" onClick={()=>{history.push('/thirdPage/');}}>Main</Menu.Item>
                <Menu.Item key="1" onClick={()=>{history.push('/firstPage/');}}>Memes</Menu.Item>
                <Menu.Item key="2" onClick={()=>{history.push('/secondPage/');}}>Cats</Menu.Item>
            </Menu>
        </Header>
        <Layout style={{ minHeight: '100vh', }}>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>DS</Breadcrumb.Item>
                    <Breadcrumb.Item>Eugene Bondarev</Breadcrumb.Item>
                    <Breadcrumb.Item>{
                        current === '1'?
                            'Memes':
                            current=== '2'?
                                'Cats':
                                current === '3'?
                                    'Main':'kek'
                    }</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: '10vh',
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    </Layout>
};

export default  withRouter(MainPage)