import React, { useState } from "react";
import { Col, Grid, Row, Drawer, Button, Menu, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";

import "./index.scss";

import ThemeSwitch from "../ThemeSwitch";
import LangSelection from "../LangSelection";

const { useBreakpoint } = Grid;
const { Item } = Menu;

const BottomNavbar = () => {
  const { t } = useTranslation("common");

  const { md } = useBreakpoint();

  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <nav className="bottom-navbar" style={{ zIndex: "200" }}>
      <Row>
        {md ? (
          <>
            <Col flex="auto">
              <Space size="small">
                <ThemeSwitch />
                <LangSelection />
              </Space>
            </Col>
            <Col flex="auto">
              <a
                className="font-pixel font-color nav-bar-links"
                href="#about-me"
              >
                {t("about_me", "About me")}
              </a>
            </Col>
            <Col flex="auto">
              <a
                className="font-pixel font-color nav-bar-links"
                href="#experience"
              >
                {t("experience", "Experience")}
              </a>
            </Col>
            <Col flex="auto">
              <a className="font-pixel font-color nav-bar-links" href="#skills">
                {t("skills", "Skills")}
              </a>
            </Col>
            <Col flex="auto">
              <a
                className="font-pixel font-color nav-bar-links"
                href="#contact"
              >
                {t("contact", "Contact")}
              </a>
            </Col>
          </>
        ) : (
          <>
            <Button className="barsMenu" type="outlined" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              placement="bottom"
              closable={false}
              onClose={onCloseDrawer}
              visible={drawerVisible}
            >
              <Space>
                {" "}
                <ThemeSwitch />
                <LangSelection />
              </Space>

              <Menu mode="inline" style={{ marginTop: "1%" }}>
                <Item>
                  <a
                    className="font-pixel font-color nav-bar-links"
                    href="#about-me"
                  >
                    {t("about_me", "About me")}
                  </a>
                </Item>
                <Item>
                  <a
                    className="font-pixel font-color nav-bar-links"
                    href="#experience"
                  >
                    {t("experience", "Experience")}
                  </a>
                </Item>
                <Item>
                  <a
                    className="font-pixel font-color nav-bar-links"
                    href="#skills"
                  >
                    {t("skills", "Skills")}
                  </a>
                </Item>
                <Item>
                  <a
                    className="font-pixel font-color nav-bar-links"
                    href="#contact"
                  >
                    {t("contact", "Contact")}
                  </a>
                </Item>
              </Menu>
            </Drawer>
          </>
        )}
      </Row>
    </nav>
  );
};

export default BottomNavbar;
