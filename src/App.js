import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Body from './Components/Body';
import Navbar from './Components/Navbar';
import CareRedesign from './Components/CareRedesign';
import MemberAdminPortal from './Components/MemberAdminPortal';
import ProviderSearch from './Components/ProviderSearch';
import PerformanceManagement from './Components/PerformanceManagement';

// Amplify
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // component: 'Member Admin Portal'
      component: 'Provider Search'
    }

    this.componentMap = {
      "Care Redesign": <CareRedesign />,
      "Member Admin Portal": <MemberAdminPortal />,
      "Provider Search": <ProviderSearch />,
      "Performance Management": <PerformanceManagement />
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar setComponent={this.setComponent} />
        <Body
          component={this.state.component}
          componentMap={this.componentMap}
        />
      </div>
    );
  }

  createBody = () => {
    return this.componentMap[this.state.component]
  }

  setComponent = (component) => {
    if (component in this.componentMap) {
      this.setState({ component })
    }
  }
}

export default withAuthenticator(App, true);
