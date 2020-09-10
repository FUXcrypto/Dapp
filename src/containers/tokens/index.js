/* eslint-disable react-hooks/exhaustive-deps */
import { useWeb3React } from '@web3-react/core';
import { Button, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledTable, TokenTableContainer } from './style';
import { TOKEN_LIST_URL, TOKEN_INTEREST_URL } from '../../utils/config';

const columns = [
	{
		title: 'Token',
		dataIndex: 'logoURI',
		key: 'logoURI',
		render: (text) => {
			if (text) {
				return <Avatar src={text} />;
			}
			return null;
		},
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Symbol',
		dataIndex: 'symbol',
		key: 'symbol',
	},
	{
		title: 'Chain ID',
		dataIndex: 'chainId',
		key: 'chainId',
	},
	{
		title: 'Address',
		key: 'address',
		dataIndex: 'address',
	},
	{
		title: 'Value',
		key: 'value',
		dataIndex: 'value',
		render: (text, tkn) => {
			if (text) {
				return <>{`${text} ${tkn.symbol.split('t')[1]}`}</>;
			}
			return null;
		},
	},
	{
		title: 'Burn',
		dataIndex: 'burn',
		key: 'burn',
		render: () => {
			return (
				<Link to="/burn">
					<Button danger type="dashed" size="small">
						Burn
					</Button>
				</Link>
			);
		},
	},
	{
		title: 'Platform',
		dataIndex: 'platform',
		key: 'platform',
	},
	{
		title: 'APY',
		dataIndex: 'apy',
		key: 'apy',
		render: (text, tkn) => {
			if (text) {
				return <Tag color={text === 0 ? 'warning' : 'success'}>{`${text} %`}</Tag>;
			}
			return null;
		},
	},
];

const Tokens = () => {
	const { chainId, account, library } = useWeb3React();

	const [tokensList, setTokensList] = useState([]);

	useEffect(() => {
		let isCancelled = false;
		const getTokenInformation = async () => {
			if (!chainId) return;

			const tokenJson = await fetch(TOKEN_LIST_URL).then((res) => res.json());

			const interestJson = await fetch(TOKEN_INTEREST_URL).then((res) => res.json());

			if (!isCancelled) {
				let tokensListTemp = tokenJson.tokens;
				tokensListTemp = tokensListTemp
					.filter((tkn) => tkn.chainId === chainId)
					.map((tkn) => {
						tkn.key = tkn.name;
						tkn.value = null;
						return tkn;
					});

				tokensListTemp = await Promise.all(
					tokensListTemp.map(async (tkn) => {
						const res = await library.contract.methods.getTToken(tkn.symbol).call();
						if (res) {
							tkn.value = library.web3.utils.fromWei(res, 'ether').toString();
						}
						return tkn;
					})
				);

				let interestDataTemp = interestJson.tokens;

				tokensListTemp = tokensListTemp.map((tkn) => {
					interestDataTemp.forEach((intr) => {
						if (intr.Address === tkn.address) {
							tkn.apy = Number.parseFloat(intr.Interest).toFixed(2);
							tkn.platform = intr.Platform;
						}
					});
					return tkn;
				});

				setTokensList(tokensListTemp);
			}
		};

		getTokenInformation();
		return () => {
			isCancelled = true;
		};
	}, [chainId, account]);

	return <TokenTableContainer>{tokensList.length > 0 && <StyledTable size="medium" columns={columns} type="fixed" dataSource={tokensList} pagination={false} scroll={{ x: 250 }} />}</TokenTableContainer>;
};

export default Tokens;
