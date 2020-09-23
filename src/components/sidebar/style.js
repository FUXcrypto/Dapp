import { Avatar, Button, Menu, Popover } from 'antd';
import styled from 'styled-components';

export const Intro = styled.div`
	text-align: center;
	padding: 8px 16px;
`;

export const SideMenu = styled(Menu)`
	background-color: #fff;
	border: 0;
	margin-top: 24px;
	@media only screen and (max-width: 768px) {
		margin-top: 4px;
	}
`;

export const ConnectorButton = styled(Button)`
	margin: 8px 4px;
	padding: 10px;
	&:focus,
	&:hover,
	&:active &:focus-within {
		outline: none;
		border: 1px solid #f9f9f9;
		background-color: #f9f9f9;
	}
`;

export const AvatarIcon = styled(Avatar)`
	padding: 6px;
	margin: 4px;
`;

export const ConnectButton = styled(Button)`
	width: 250px;
	margin: 0;
	height: 80px;
	border: 0;
	background: #fafafa;
	display: flex;
	align-items: center;
	justify-content: center;
	&:focus,
	&:hover,
	&:active &:focus-within {
		background: #f3f3f3;
	}
`;

export const PopverWrapper = styled.div`
	width: 360px;
`;

export const StyledPopover = styled(Popover)`
	width: 280px;
	height: 80px;
	padding: 20px 0;
	.network-name {
		margin-left: 24px;
		margin-right: 24px;
		width: 75px;
	}
`;

export const DisconnectButton = styled(Button)`
	margin: 16px 0 8px 0;
	height: 45px;
	padding: 10px 16px;
	border: 1px solid #e3e3e3;
	border-radius: 5px;
	width: 100%;
	&:focus,
	&:hover,
	&:active &:focus-within {
		outline: none;
		border: 1px solid #e3e3e3;
	}
`;

export const ConnectedAvatar = styled(Avatar)`
	height: 48px;
	width: 48px;
	box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.1);
	background-color: #fff;
	margin-right: 4px;
	border: 1px solid #e3e3e3;
`;

export const ConnectorAvatar = styled(Avatar)`
	height: 32px;
	width: 32px;
	margin-right: 8px;
`;

export const SideWrapper = styled.div`
	position: fixed;
	top: 0px;
	width: 250px;
	min-height: 100vh;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 60px;
	@media (max-width: 768px) {
		margin-top: 60px;
		width: 200px;
	}
`;

export const SideSocial = styled.div`
	margin-top: auto;
	height: 80px;
	ul {
		margin: 16px;
		display: inline-flex;
		li {
			padding-left: 8px;
		}
	}
`;

export const SocialAvatar = styled(Avatar)`
	height: 36px;
	width: 36px;
	padding: 6px;
	box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.1);
	background-color: #fff;
	margin-right: 4px;
	&:hover {
		background: #f1f1f1;
	}
`;
