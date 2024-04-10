import React from "react";

import { Select } from "antd";

import { useTranslation } from 'react-i18next';

import "./index.scss";

const LangSelection = () => {
  const { i18n } = useTranslation();
  
  const handleOnChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Select
        defaultValue="en"
        placement="topLeft"
        onChange={handleOnChange}
        options={[
          { value: "en", label: "EN", className: "font-pixel font-color" },
          { value: "es", label: "ES", className: "font-pixel font-color" },
        ]}
        className="font-pixel font-color"
        dropdownStyle={{ backgroundColor: "transparent", border: "0px" }}
      />
    </>
  );
};

export default LangSelection;
