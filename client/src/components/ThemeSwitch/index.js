import React from "react";

import { Switch } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import * as actions from "./actions";

const ThemeSwitch = () => {
  const { t } = useTranslation("common");

  const currentTheme = useSelector((state) => state.themeSwitch.currentTheme);

  const handleOnChange = (e) => {
    dispatch({ type: actions.SET_THEME, payload: {} });
  };

  const dispatch = useDispatch();

  return (
    <>
      <span className="font-pixel font-color">
        <b>{`${t("ThemeSwitch.switch_label", "Change theme")}:`}</b>{" "}
      </span>
      <Switch
        checkedChildren={<BulbOutlined />}
        unCheckedChildren={<BulbFilled />}
        defaultChecked={currentTheme === "dark" ? true : false}
        onChange={handleOnChange}
      />
    </>
  );
};

export default ThemeSwitch;
