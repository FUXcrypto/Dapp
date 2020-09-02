import { useWeb3React } from '@web3-react/core';
import { Layout } from 'antd';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import HeaderBar from '../components/headerbar';
import SideBar from '../components/sidebar';
import { injected, walletlink } from '../hooks/connectors';
import { useEagerConnect, useInactiveListener } from './../hooks/index';
import ConnectWallet from './connect-wallet';
import { StyledContent, StyledDrawer, StyledHeader, StyledSider } from './globalStyle';
import OverView from './overview';

const connectorsByName = {
  Injected: injected,
  walletlink: walletlink
};

function MainContent() {
  const context = useWeb3React();
  const {
    connector,
    activate,
  } = context;

  // state for connectot activation
  const [activatingConnector, setActivatingConnector] = React.useState();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }

  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  // Drawer Open and Close
  const [drawerVisible, setDrawerVisible] = useState(false);
  const onDrawerClose = () => {
    setDrawerVisible(false);
  };
  const onDrawerOpen = () => {
    setDrawerVisible(true);
  };

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <StyledDrawer
          title={
            <div className="logo-area">
              THIRM WALLET
            </div>
          }
          placement="left"
          onClose={onDrawerClose}
          visible={drawerVisible}
        >
          <SideBar />
        </StyledDrawer>
        <StyledHeader>
          <HeaderBar onDrawerOpen={onDrawerOpen} collapsed={collapsed} setActivatingConnector={setActivatingConnector} activate={activate} connectorsByName={connectorsByName} triedEager={triedEager} activatingConnector={activatingConnector} />
        </StyledHeader>
        <Layout>
          <StyledSider width={250} breakpoint="sm" onCollapse={onCollapse} collapsed={collapsed} collapsedWidth={0} trigger={null}>
            <SideBar collapsed={collapsed} />
          </StyledSider>
          <StyledContent>
            <Switch>
              <Route exact path="/" component={() => <ConnectWallet />} />
              <Route exact path="/overview" component={() => <OverView />} />
            </Switch>
          </StyledContent>
        </Layout>
      </Layout>
    </Router>
  );
}

export default MainContent;
