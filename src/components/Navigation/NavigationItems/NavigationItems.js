import React from 'react';
import "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/" active>Checkout</NavigationItem>
        <NavigationItem link="/" active>Salina Ghale</NavigationItem>
    </ul>
);
export default navigationItems;