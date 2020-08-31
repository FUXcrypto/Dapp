import { Menu } from 'antd';
import styled from 'styled-components';

export const SideBarArea = styled.div`
  background-color: #fbfbfb;
  height: 100%;
  display: flex;
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
  flex-direction: column;
`;

export const Intro = styled.div`
  text-align: center;
  padding: 8px 16px;
`;

export const SideMenu = styled(Menu)`
  padding-top: 16px;
  background-color: #fbfbfb;
  border: 0;
  width: 100%;
  border-top: 1px solid #e3e3e3;
`;
