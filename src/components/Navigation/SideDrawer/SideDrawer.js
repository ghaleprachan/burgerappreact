import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import BackDrop from '../../UI/Backdrop/Backdrop'
import Bob from '../../../hoc/Bob'

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Bob>
            <BackDrop show={props.open} cliked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="One">
                    <Logo height="100%" />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Bob>
    );
}

export default sideDrawer;