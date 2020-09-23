/* eslint-disable react-hooks/exhaustive-deps */
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useWeb3React } from '@web3-react/core';
import { Badge, Button, Col, Row, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { injected, walletConnect, walletlink } from './../../hooks/connectors';
import { ConnectedAvatar, DisconnectButton, PopverWrapper, StyledPopover, ThirmLogo } from './style';
const LoginKeyIcon = require('../../assets/images/login-key.svg');
const MetaMaskIcon = require('../../assets/images/metamask.png');
const WalletLinkIcon = require('../../assets/images/qr-code.png');
const WalletConnectIcon = require('../../assets/images/wallet-connect.png');

const HeaderBar = (props) => {

  const { collapsed } = props;

  const { deactivate, active, account, connector, chainId } = useWeb3React();

  const [networkName, setNetworkName] = useState('');

  const [popoverVisible, setPopoverVisible] = useState(false);

  const [walletName, setWalletName] = useState('');

  const [walletIcon, setWalletIcon] = useState('');

  useEffect(() => {
    const setWalletAndNetworkName = () => {
      if (!account && !chainId) return;

      if (chainId && chainId === 1) {
        setNetworkName('MainNet');
      } else if (chainId && chainId === 3) {
        setNetworkName('Ropsten');
      } else {
        setNetworkName('');
      }

      if (connector === injected) {
        setWalletName('Meta Mask');
      } else if (connector === walletlink) {
        setWalletName('Wallet Link');
      } else if (connector === walletConnect) {
        setWalletName('Wallet Connect');
      } else {
        setWalletName('');
      }

      if (connector === injected) {
        setWalletIcon(MetaMaskIcon);
      } else if (connector === walletlink) {
        setWalletIcon(WalletLinkIcon);
      } else if (connector === walletConnect) {
        setWalletIcon(WalletConnectIcon);
      } else {
        setWalletIcon(LoginKeyIcon);
      }
    };

    setWalletAndNetworkName();
  }, [account, chainId]);

  const onPopoverVisible = (val) => {
    setPopoverVisible(val);
  }

  const history = useHistory();

  return (
    <Row justify="space-between" align="middle">
      <Col xs={12}>
        <ThirmLogo>
          <Link to="/">
            <span className="logo-text">
              THIRM DAPP <Tag color="volcano">BETA</Tag>
            </span>
          </Link>
        </ThirmLogo>
      </Col>
      <Col xs={12}>{
        active ? <StyledPopover placement="bottomRight" title={null} content={() => <ActivePopoverContent account={account} active={active} deactivate={deactivate} walletName={walletName} walletIcon={walletIcon} networkName={networkName} history={history} setPopoverVisible={setPopoverVisible} />} trigger="click" onVisibleChange={onPopoverVisible} visible={popoverVisible}>
          <div className="left-content">
            {!collapsed && <Badge count={<div className="active-dot" />} offset={[-8, 40]}><ConnectedAvatar src={walletIcon} /></Badge>}
            <div className="connection-info">
              <span className="connection-info-up">{walletName}</span>
              <span className="connection-info-down">{account && account.substr(0, 5)}...{account && account.substr(39)}</span>
            </div>
          </div>

          <div className="right-content">
            {networkName && (
              <Tag className="network-name" color="success">
                {networkName}
              </Tag>
            )}
            {
              popoverVisible ? <UpOutlined className="dropdown-icon" /> : <DownOutlined className="dropdown-icon" />
            }
          </div>

        </StyledPopover> : <StyledPopover placement="bottomRight" title={null} content={() => <InActivePopoverContent history={history} setPopoverVisible={setPopoverVisible} />} trigger="click" onVisibleChange={onPopoverVisible} visible={popoverVisible} >
            <div className="left-content">
              <Badge count={<div className="inactive-dot" />} offset={[-8, 40]}>
                <ConnectedAvatar src={LoginKeyIcon} />
              </Badge>
              <div className="connection-info">
                <span className="connection-info-up">Not Connected</span>
                <span className="connection-info-down">Connect Wallet</span>
              </div>
            </div>
            {
              popoverVisible ? <UpOutlined className="dropdown-icon" /> : <DownOutlined className="dropdown-icon" />
            }
          </StyledPopover>
      }
      </Col>
    </Row>
  );
}


const ActivePopoverContent = ({ account, active, deactivate, walletName, walletIcon, networkName, history, setPopoverVisible }) => (
  <PopverWrapper>
    <Row justify="center" align="center">
      <ConnectedAvatar src={`https://robohash.org/${account}?set=set5`} size={60} />
      <Tag className="account-address">
        {account}
      </Tag>

      <Col xs={24}>
        <ul className="connection-info">
          <li className="connection-info-list">
            <div>
              Status
            </div>
            <div>
              {active ? "Connected" : ""}
            </div>
          </li>
          <li className="connection-info-list">
            <div>
              Wallet
            </div>
            <div>
              {walletName}
            </div>
          </li>
          <li className="connection-info-list">
            <div>
              Network
            </div>
            <div>
              {networkName}
            </div>
          </li>
        </ul>
      </Col>
      <Col xs={24}>
        <DisconnectButton
          onClick={() => {
            setPopoverVisible(false);
            localStorage.removeItem('wallet');
            deactivate();
            history.push('/');
          }}
        >
          Disconnect
          </DisconnectButton>
      </Col>
    </Row>
  </PopverWrapper>
);

const InActivePopoverContent = ({ history, setPopoverVisible }) => (
  <PopverWrapper>
    <Row justify="space-between" align="middle">
      <Col xs={24}>
        <p>Connect to Wallet</p>
        <Button type="primary" onClick={() => {
          setPopoverVisible(false);
          history.push("/");
        }}>Connect</Button>
      </Col>
    </Row>
  </PopverWrapper>
);

export default HeaderBar;