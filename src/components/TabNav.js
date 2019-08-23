import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/
const Nav = props => (
    <NavLink exact {...props} />
);

const contentInfo = (iconLabel, pageLabel) => {
  return (
    <span><Icon name={iconLabel} />{pageLabel}</span>
  )
}

const homePage = contentInfo("home", "Home Page");
const charPage = contentInfo("user", "Characters");
const locPage = contentInfo("compass", "Location");
const epiPage = contentInfo("television", "Episodes");


const panes = [
    { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={homePage} /> },
    { menuItem: <Menu.Item key='characters' as={Nav} to={`/characters`} content={charPage} /> },
    { menuItem: <Menu.Item key='location' as={Nav} to={`/locations`} content={locPage} /> },
    { menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodes`} content={epiPage} /> }
]

const TabNav = () => <Tab panes={panes} />

export default TabNav
