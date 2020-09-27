import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import Page1 from './page1';
import logo from '../img/logo.png';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="container">
        <div className="logoBox">
          <img src={logo}></img>
        </div>

        <Tab className="tabMenu" panes={
          [
            { menuItem: 'Cookies', render: () => <Tab.Pane><Page1/></Tab.Pane> },
            { menuItem: 'Công thức trà giải nhiệt', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Trái cây tươi', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
          ]
        } />
      </div>
    );
  }
}

export default Container;