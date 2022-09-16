import React, { useEffect } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { selectLanguage, setLanguage } from '../../../../redux/userSettings/userSettingsSlice';
import languageCode from '../../../_consts/languageCodes';
import { useTranslation } from '../../../_hooks/useTranslation';

export const LanguageDropdown = () => {
    const dispatch = useDispatch();
    const language = useSelector(selectLanguage);
    const translate = useTranslation();

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <Dropdown overlay={
            <Menu
                items={[
                    {
                        key: '1',
                        label: (
                            <span onClick={() => { dispatch(setLanguage(languageCode.ENGLISH)) }}>
                                {translate('languageEn')}
                            </span>
                        )
                    },
                    {
                        key: '2',
                        label: (
                            <span onClick={() => { dispatch(setLanguage(languageCode.UKRAINIAN)) }}>
                                {translate('languageUa')}
                            </span>
                        )
                    }
                ]}
            />
        }>
            <span>
                <Space>
                    <i className="fa-solid fa-globe" />
                </Space>
            </span>
        </Dropdown>
    )
}