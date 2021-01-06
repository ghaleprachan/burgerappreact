import React, { Component } from 'react';
import Bob from '../../hoc/Bob'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHander = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Bob>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHander} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Bob>
        );
    }
}

export default Layout;