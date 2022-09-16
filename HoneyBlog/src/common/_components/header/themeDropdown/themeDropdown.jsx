import React, { useEffect } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { selectTheme, setTheme } from '../../../../redux/userSettings/userSettingsSlice';
import themes from '../../../_consts/themes';
import { useTranslation } from '../../../_hooks/useTranslation';

export const ThemeDropdown = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const translate = useTranslation();

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const getThemeIcon = () => {
        let themeIcon = "fa-solid";
        if (theme === themes.LIGHT) {
            themeIcon += " fa-sun";
        } else {
            themeIcon += " fa-moon";
        }

        return themeIcon;
    }

    return (
        <Dropdown overlay={
            <Menu items={[
                {
                    key: '1',
                    label: (
                        <span className='d-flex' onClick={() => { dispatch(setTheme(themes.LIGHT)) }}>
                            <i className="fa-solid fa-sun" />
                            <span>{translate('themeLight')}</span>
                        </span>
                    )
                },
                {
                    key: '2',
                    label: (
                        <span className='d-flex' onClick={() => { dispatch(setTheme(themes.DARK)) }}>
                            <i className="fa-solid fa-moon" />
                            <span>{translate('themeDark')}</span>
                        </span>
                    )
                }
            ]}
            />
        }>
            <span>
                <Space>
                    <i className={getThemeIcon()} />
                </Space>
            </span>
        </Dropdown>
    )
}