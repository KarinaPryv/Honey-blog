import '../userInfoPanel/userInfoPanel.scss'
import React from 'react';
import { Drawer, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import { LogoutButton } from '../logoutButton/logoutButton';
import { selectUser } from '../../../redux/userAuth/userAuthSlice';
import { useTranslation } from '../../_hooks/useTranslation';
import { useToggle } from '../../_hooks/useToggle';
import { selectTheme } from '../../../redux/userSettings/userSettingsSlice';

export const UserInfoPanel = () => {
    const translate = useTranslation();
    const user = useSelector(selectUser);
    const theme = useSelector(selectTheme);
    const { visible, toggle } = useToggle();

    return (
        <React.Fragment>
            <Avatar
                size={{ xs: 34, sm: 34, md: 40, lg: 40, xl: 40, xxl: 50 }}
                onClick={toggle}
                icon={<UserOutlined />}
                src={user.imageUrl}
            />
                <Drawer
                    title={translate('userPanelTitle')}
                    placement="right"
                    onClose={toggle}
                    visible={visible}
                    drawerStyle={{
                        backgroundColor: theme === "dark" ? "rgb(42, 42, 42)" : "rgb(253, 243, 186)",
                        color: theme === "dark" ? "rgba(255, 211, 157)" : "rgba(0, 0, 0, 0.85)",
                    }}
                >
                    <div className='user-info-block'>
                        <Avatar
                            size={120}
                            shape="square"
                            icon={<UserOutlined />}
                            src={user.imageUrl}
                        />
                        <p>{user.givenName}</p>
                        <p>{user.familyName}</p>
                        <span>{user.email}</span>
                        <LogoutButton />
                    </div>
                </Drawer>
        </React.Fragment>
    );
};