import React from 'react';
import { Drawer, Space } from 'antd';
import { Link } from 'react-router-dom';

import { useToggle } from '../../../_hooks/useToggle';
import { NavigateLinks } from '../navigateLinks/navigateLinks';
import './linksDrawer.scss';

export const LinksDrawer = () => {
    const { visible, toggle } = useToggle();

    return (
        <React.Fragment>
            <Space>
                <h1 className='title-sm' onClick={toggle}>
                    <span>HB</span>
                    <i className="fa-solid fa-bars" />
                </h1>
            </Space>
            <Drawer
                placement="top"
                closable={false}
                onClose={toggle}
                visible={visible}
                contentWrapperStyle={{
                    height: '55px',
                    marginTop: '80px'
                }}
                className='links-drawer'
            >
                <div className='d-flex'>
                    <Link to="home" className='title-sm'>
                        <h1>HoneyBlog</h1>
                    </Link>
                    <NavigateLinks />
                </div>
            </Drawer>
        </React.Fragment>
    )
}