import React from "react";

import { Switch } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux'

import * as actions from './actions'

const ThemeSwitch = () => {

    const currentTheme = useSelector(state => state.themeSwitch.currentTheme)

    const handleOnChange = e => {
        dispatch(({ type: actions.SET_THEME, payload: { theme: e.checked ? "dark" : "light" } }))
    }

    const dispatch = useDispatch()

    return (
        <>
            <span><b>Change theme:</b>  </span>
            <Switch
                checkedChildren={<BulbOutlined />}
                unCheckedChildren={<BulbFilled />}
                defaultChecked={currentTheme == "dark" ? true : false }
                onChange={handleOnChange}
            />
        </>
    )
}

export default ThemeSwitch;