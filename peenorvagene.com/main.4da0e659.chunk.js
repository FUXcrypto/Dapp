(this.webpackJsonpyam = this.webpackJsonpyam || []).push([[1], {
    217: function(e, t, n) {
        e.exports = n.p + "static/media/metamask-fox.c06f3a3e.svg"
    },
    218: function(e, t, n) {
        e.exports = n.p + "static/media/wallet-connect.37f2bc6e.svg"
    },
    219: function(e) {
        e.exports = JSON.parse('{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"networks":{}}')
    },
    220: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
    },
    221: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract PicToken","name":"_pic","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_mkaddr","type":"address"},{"internalType":"address","name":"_burnaddr","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_isFreezone","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_burnaddr","type":"address"}],"name":"burnto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"changeBonusEndBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bonusMultiplier","type":"uint256"}],"name":"changeBonusMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_punishtimeA","type":"uint256"},{"internalType":"uint256","name":"_punishrateA","type":"uint256"},{"internalType":"uint256","name":"_punishtimeB","type":"uint256"},{"internalType":"uint256","name":"_punishrateB","type":"uint256"},{"internalType":"uint256","name":"_punishtimeC","type":"uint256"},{"internalType":"uint256","name":"_punishrateC","type":"uint256"},{"internalType":"uint256","name":"_punishtimeD","type":"uint256"},{"internalType":"uint256","name":"_punishrateD","type":"uint256"},{"internalType":"uint256","name":"_punishtimeE","type":"uint256"},{"internalType":"uint256","name":"_punishrateE","type":"uint256"}],"name":"changePunishRules","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_picPerBlock","type":"uint256"}],"name":"changeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"name":"changeStartBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vaultfee","type":"uint256"}],"name":"changeVaultfee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_mkaddr","type":"address"}],"name":"mk","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mkaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingPic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pic","outputs":[{"internalType":"contract PicToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"picPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accPICPerShare","type":"uint256"},{"internalType":"uint256","name":"isFreezone","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishrateA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishrateB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishrateC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishrateD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishrateE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishtimeA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishtimeB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishtimeC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishtimeD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"punishtimeE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"lastDepositTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vaultfee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    222: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract PicFeeToken","name":"_picfee","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FeeDivisor","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"picfee","outputs":[{"internalType":"contract PicFeeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    223: function(e) {
        e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
    },
    224: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
    },
    231: function(e, t, n) {
        e.exports = n(508)
    },
    252: function(e, t) {},
    260: function(e, t) {},
    276: function(e, t) {},
    278: function(e, t) {},
    292: function(e, t) {},
    294: function(e, t) {},
    441: function(e, t) {},
    451: function(e, t) {},
    454: function(e, t) {},
    46: function(e, t, n) {
        e.exports = n.p + "static/media/chef.4a83876a.png"
    },
    507: function(e, t, n) {},
    508: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
          , r = n.n(a)
          , i = n(213)
          , u = n.n(i)
          , c = n(6)
          , o = n(31)
          , s = n(22)
          , l = n(2)
          , p = n(510)
          , d = n(3);
        function f() {
            var e = Object(d.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"]);
            return f = function() {
                return e
            }
            ,
            e
        }
        function m() {
            var e = Object(d.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"]);
            return m = function() {
                return e
            }
            ,
            e
        }
        function y() {
            var e = Object(d.a)(["\n  align-items: center;\n  background-color: ", ";\n  border: 0;\n  border-radius: 0px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: ", "px;\n  font-weight: 700;\n  height: ", "px;\n  justify-content: center;\n  outline: none;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  pointer-events: ", ";\n  width: 100%;\n  &:hover {\n    background-color: ", ";\n  }\n"]);
            return y = function() {
                return e
            }
            ,
            e
        }
        var b = l.c.button(y(), (function(e) {
            return e.theme.color.grey[200]
        }
        ), (function(e) {
            return e.boxShadow
        }
        ), (function(e) {
            return e.disabled ? "".concat(e.color, "55") : e.color
        }
        ), (function(e) {
            return e.fontSize
        }
        ), (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.padding
        }
        ), (function(e) {
            return e.padding
        }
        ), (function(e) {
            return e.disabled ? "none" : void 0
        }
        ), (function(e) {
            return e.theme.color.grey[100]
        }
        ))
          , h = Object(l.c)(o.b)(m(), (function(e) {
            return -e.theme.spacing[4]
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , v = l.c.a(f(), (function(e) {
            return -e.theme.spacing[4]
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , x = function(e) {
            var t, n, i, u, c, o = e.children, s = e.disabled, p = e.href, d = e.onClick, f = e.size, m = e.text, y = e.to, x = e.variant, w = Object(a.useContext)(l.a), g = w.color, E = w.spacing;
            switch (x) {
            case "secondary":
                t = g.grey[500];
                break;
            case "default":
            default:
                t = g.primary.main
            }
            switch (f) {
            case "sm":
                n = "4px 4px 8px ".concat(g.grey[300], ",\n        -8px -8px 16px ").concat(g.grey[100], "FF;"),
                u = E[3],
                i = 36,
                c = 14;
                break;
            case "lg":
                n = "6px 6px 12px ".concat(g.grey[300], ",\n        -12px -12px 24px ").concat(g.grey[100], "ff;"),
                u = E[4],
                i = 72,
                c = 16;
                break;
            case "md":
            default:
                n = "6px 6px 12px ".concat(g.grey[300], ",\n        -12px -12px 24px -2px ").concat(g.grey[100], "ff;"),
                u = E[4],
                i = 56,
                c = 16
            }
            var O = Object(a.useMemo)((function() {
                return y ? r.a.createElement(h, {
                    to: y
                }, m) : p ? r.a.createElement(v, {
                    href: p,
                    target: "__blank"
                }, m) : m
            }
            ), [p, m, y]);
            return r.a.createElement(b, {
                boxShadow: n,
                color: t,
                disabled: s,
                fontSize: c,
                onClick: d,
                padding: u,
                size: i
            }, o, O)
        };
        function w() {
            var e = Object(d.a)(["\n  background-color: ", ";\n  font-size: 36px;\n  height: 80px;\n  width: 80px;\n  border-radius: 40px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  box-shadow: inset 4px 4px 8px ", ",\n    inset -6px -6px 12px ", ";\n  margin: 0 auto ", "px;\n"]);
            return w = function() {
                return e
            }
            ,
            e
        }
        var g = l.c.div(w(), (function(e) {
            return e.theme.color.grey[200]
        }
        ), (function(e) {
            return e.theme.color.grey[300]
        }
        ), (function(e) {
            return e.theme.color.grey[100]
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ))
          , E = function(e) {
            var t = e.children;
            return r.a.createElement(g, null, t)
        };
        function O() {
            var e = Object(d.a)([""]);
            return O = function() {
                return e
            }
            ,
            e
        }
        function j() {
            var e = Object(d.a)(["\n  padding: 0 20px;\n  background: ", ";\n  border: 1px solid ", "ff;\n  border-radius: 12px;\n  box-shadow: inset 1px 1px 0px ", ";\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  min-height: 0;\n"]);
            return j = function() {
                return e
            }
            ,
            e
        }
        function T() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: relative;\n  width: 100%;\n  max-width: 512px;\n  @media (max-width: ", "px) {\n    flex: 1;\n    position: absolute;\n    top: 100%;\n    right: 0;\n    left: 0;\n    max-height: calc(100% - ", "px);\n    animation: ", " 0.3s forwards ease-out;\n  }\n"]);
            return T = function() {
                return e
            }
            ,
            e
        }
        function k() {
            var e = Object(d.a)(["\n  0% {\n    transform: translateY(0%);\n  }\n  100% {\n    transform: translateY(-100%);\n  }\n"]);
            return k = function() {
                return e
            }
            ,
            e
        }
        var C = Object(l.d)(k())
          , M = l.c.div(T(), (function(e) {
            return e.theme.breakpoints.mobile
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ), C)
          , S = l.c.div(j(), (function(e) {
            return e.theme.color.grey[200]
        }
        ), (function(e) {
            return e.theme.color.grey[300]
        }
        ), (function(e) {
            return e.theme.color.grey[100]
        }
        ))
          , A = (l.c.div(O()),
        function(e) {
            var t = e.children;
            return r.a.createElement(M, null, r.a.createElement(S, null, t))
        }
        );
        function I() {
            var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
            return I = function() {
                return e
            }
            ,
            e
        }
        var P = l.c.div(I(), (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        ))
          , _ = function(e) {
            var t, n = e.size, i = void 0 === n ? "md" : n, u = Object(a.useContext)(l.a).spacing;
            switch (i) {
            case "lg":
                t = u[6];
                break;
            case "sm":
                t = u[2];
                break;
            case "md":
            default:
                t = u[4]
            }
            return r.a.createElement(P, {
                size: t
            })
        };
        function F() {
            var e = Object(d.a)(["\n  flex: 1;\n"]);
            return F = function() {
                return e
            }
            ,
            e
        }
        function D() {
            var e = Object(d.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px;\n"]);
            return D = function() {
                return e
            }
            ,
            e
        }
        var N = l.c.div(D(), (function(e) {
            return e.theme.color.grey[100]
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , L = l.c.div(F())
          , z = function(e) {
            var t = e.children
              , n = r.a.Children.toArray(t).length;
            return r.a.createElement(N, null, r.a.Children.map(t, (function(e, t) {
                return r.a.createElement(r.a.Fragment, null, r.a.createElement(L, null, e), t < n - 1 && r.a.createElement(_, null))
            }
            )))
        };
        function B() {
            var e = Object(d.a)(["\n  padding: ", "px;\n  @media (max-width: ", "px) {\n    flex: 1;\n    overflow: auto;\n  }\n"]);
            return B = function() {
                return e
            }
            ,
            e
        }
        var R = l.c.div(B(), (function(e) {
            return e.theme.spacing[4]
        }
        ), (function(e) {
            return e.theme.breakpoints.mobile
        }
        ))
          , U = function(e) {
            var t = e.children;
            return r.a.createElement(R, null, t)
        };
        function H() {
            var e = Object(d.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 18px;\n  font-weight: 700;\n  height: ", "px;\n  justify-content: center;\n"]);
            return H = function() {
                return e
            }
            ,
            e
        }
        var W = l.c.div(H(), (function(e) {
            return e.theme.color.grey[600]
        }
        ), (function(e) {
            return e.theme.topBarSize
        }
        ))
          , V = function(e) {
            var t = e.text;
            return r.a.createElement(W, null, t)
        }
          , G = function(e) {
            var t = e.onConfirm
              , n = e.onDismiss
              , i = Object(a.useState)("disclaimer")
              , u = Object(c.a)(i, 2)
              , o = u[0]
              , s = u[1]
              , l = Object(a.useCallback)((function() {
                t(),
                n()
            }
            ), [t, n])
              , p = Object(a.useMemo)((function() {
                return "disclaimer" === o ? r.a.createElement("div", null, r.a.createElement("p", null, "Audits: None."), r.a.createElement("p", null, "While the initial creators of the PIC.finance protocol have made reasonable efforts to attempt to ensure the security of the contracts, including forking much of the codebase from existing well-audited projects and soliciting review from friends, nothing approaching the rigor of a formal audit has been conducted at this time."), r.a.createElement("p", null, "We STRONGLY urge caution to anyone who chooses to engage with these contracts.")) : r.a.createElement("div", null, r.a.createElement("p", null, "Attention PIC.finance"), r.a.createElement("p", null, "Providing liquidity for Uniswap pools is dangerous"), r.a.createElement("p", null, "You can LOSE your share of rebases"))
            }
            ), [o])
              , d = Object(a.useMemo)((function() {
                return "disclaimer" === o ? r.a.createElement(x, {
                    text: "Next",
                    variant: "secondary",
                    onClick: function() {
                        return s("uniswap")
                    }
                }) : r.a.createElement(x, {
                    text: "I understand",
                    onClick: l
                })
            }
            ), [s, o, l]);
            return r.a.createElement(A, null, r.a.createElement(V, {
                text: "Warning"
            }), r.a.createElement(E, null, "\u26a0\ufe0f"), r.a.createElement(U, null, p), r.a.createElement(z, null, d))
        };
        function J() {
            var e = Object(d.a)(["\n  box-sizing: border-box;\n  color: ", ";\n  font-size: 24px;\n  font-weight: 700;\n  padding: ", "px\n    ", "px;\n  text-align: center;\n  text-decoration: none;\n  width: 100%;\n  &:hover {\n    color: ", ";\n  }\n  &.active {\n    color: ", ";\n  }\n"]);
            return J = function() {
                return e
            }
            ,
            e
        }
        function Y() {
            var e = Object(d.a)(["\n  animation: ", " 0.3s forwards ease-out;\n  background-color: ", ";\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 100%;\n  bottom: 0;\n  width: calc(100% - 48px);\n"]);
            return Y = function() {
                return e
            }
            ,
            e
        }
        function K() {
            var e = Object(d.a)(["\n  0% {\n    transform: translateX(0)\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n"]);
            return K = function() {
                return e
            }
            ,
            e
        }
        function q() {
            var e = Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n"]);
            return q = function() {
                return e
            }
            ,
            e
        }
        function X() {
            var e = Object(d.a)(["\n  background-color: ", "aa;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);
            return X = function() {
                return e
            }
            ,
            e
        }
        var Z = l.c.div(X(), (function(e) {
            return e.theme.color.grey[600]
        }
        ))
          , Q = l.c.div(q())
          , $ = Object(l.d)(K())
          , ee = l.c.div(Y(), $, (function(e) {
            return e.theme.color.grey[200]
        }
        ))
          , te = Object(l.c)(o.c)(J(), (function(e) {
            return e.theme.color.grey[400]
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ), (function(e) {
            return e.theme.color.grey[500]
        }
        ), (function(e) {
            return e.theme.color.primary.main
        }
        ))
          , ne = function(e) {
            var t = e.onDismiss;
            return e.visible ? r.a.createElement(Q, null, r.a.createElement(Z, {
                onClick: t
            }), r.a.createElement(ee, null, r.a.createElement(te, {
                exact: !0,
                activeClassName: "active",
                to: "/",
                onClick: t
            }, "Home"), r.a.createElement(te, {
                exact: !0,
                activeClassName: "active",
                to: "/farms",
                onClick: t
            }, "PhotoStudio"))) : null
        };
        function ae() {
            var e = Object(d.a)(["\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: ", "px;\n  padding: 0 ", "px;\n  width: 100%;\n"]);
            return ae = function() {
                return e
            }
            ,
            e
        }
        var re = l.c.div(ae(), (function(e) {
            return e.width
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , ie = function(e) {
            var t, n = e.children, i = e.size, u = void 0 === i ? "md" : i, c = Object(a.useContext)(l.a).siteWidth;
            switch (u) {
            case "sm":
                t = c / 2;
                break;
            case "md":
                t = 2 * c / 3;
                break;
            case "lg":
            default:
                t = c
            }
            return r.a.createElement(re, {
                width: t
            }, n)
        }
          , ue = n(46)
          , ce = n.n(ue);
        function oe() {
            var e = Object(d.a)(["\n  font-family: 'Kaushan Script', sans-serif;\n"]);
            return oe = function() {
                return e
            }
            ,
            e
        }
        function se() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-family: 'Reem Kufi', sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  margin-left: ", "px;\n  @media (max-width: 400px) {\n    display: none;\n  }\n"]);
            return se = function() {
                return e
            }
            ,
            e
        }
        function le() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  min-height: 44px;\n  min-width: 44px;\n  padding: 0;\n  text-decoration: none;\n"]);
            return le = function() {
                return e
            }
            ,
            e
        }
        var pe = Object(l.c)(o.b)(le())
          , de = l.c.span(se(), (function(e) {
            return e.theme.color.grey[600]
        }
        ), (function(e) {
            return e.theme.spacing[2]
        }
        ))
          , fe = (l.c.span(oe()),
        function() {
            return r.a.createElement(pe, {
                to: "/"
            }, r.a.createElement("img", {
                src: ce.a,
                height: "32",
                style: {
                    marginTop: -4
                }
            }), r.a.createElement(de, null, "PeenOrVagene"))
        }
        );
        function me() {
            var e = Object(d.a)(["\n  background-color: ", "aa;\n  position: absolute;\n  top: 0; right: 0; bottom: 0; left: 0;\n"]);
            return me = function() {
                return e
            }
            ,
            e
        }
        function ye() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n"]);
            return ye = function() {
                return e
            }
            ,
            e
        }
        var be = Object(a.createContext)({
            onPresent: function() {},
            onDismiss: function() {}
        })
          , he = l.c.div(ye())
          , ve = l.c.div(me(), (function(e) {
            return e.theme.color.grey[600]
        }
        ))
          , xe = function(e) {
            var t = e.children
              , n = Object(a.useState)(!1)
              , i = Object(c.a)(n, 2)
              , u = i[0]
              , o = i[1]
              , s = Object(a.useState)()
              , l = Object(c.a)(s, 2)
              , p = l[0]
              , d = l[1]
              , f = Object(a.useState)()
              , m = Object(c.a)(f, 2)
              , y = m[0]
              , b = m[1]
              , h = Object(a.useCallback)((function(e, t) {
                b(t),
                d(e),
                o(!0)
            }
            ), [d, o, b])
              , v = Object(a.useCallback)((function() {
                d(void 0),
                o(!1)
            }
            ), [d, o, y]);
            return r.a.createElement(be.Provider, {
                value: {
                    content: p,
                    isOpen: u,
                    onPresent: h,
                    onDismiss: v
                }
            }, t, u && r.a.createElement(he, null, r.a.createElement(ve, {
                onClick: v
            }), r.a.isValidElement(p) && r.a.cloneElement(p, {
                onDismiss: v
            })))
        }
          , we = function(e, t) {
            var n = Object(a.useContext)(be)
              , r = n.onDismiss
              , i = n.onPresent;
            return [Object(a.useCallback)((function() {
                i(e, t)
            }
            ), [t, e, i]), r]
        }
          , ge = n(217)
          , Ee = n.n(ge)
          , Oe = n(218)
          , je = n.n(Oe);
        function Te() {
            var e = Object(d.a)(["\n  background: ", ";\n  border: 1px solid ", "ff;\n  border-radius: 0px;\n  box-shadow: inset 1px 1px 0px ", ";\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);
            return Te = function() {
                return e
            }
            ,
            e
        }
        var ke = l.c.div(Te(), (function(e) {
            return e.theme.color.grey[200]
        }
        ), (function(e) {
            return e.theme.color.grey[300]
        }
        ), (function(e) {
            return e.theme.color.grey[100]
        }
        ))
          , Ce = function(e) {
            var t = e.children;
            return r.a.createElement(ke, null, t)
        };
        function Me() {
            var e = Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: ", "px;\n"]);
            return Me = function() {
                return e
            }
            ,
            e
        }
        var Se = l.c.div(Me(), (function(e) {
            return e.theme.spacing[3]
        }
        ))
          , Ae = function(e) {
            var t = e.children;
            return r.a.createElement(Se, null, t)
        };
        function Ie() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-size: 18px;\n  font-weight: 700;\n  padding: ", "px;\n  text-align: center;\n"]);
            return Ie = function() {
                return e
            }
            ,
            e
        }
        var Pe = l.c.div(Ie(), (function(e) {
            return e.theme.color.grey[600]
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , _e = function(e) {
            var t = e.text;
            return r.a.createElement(Pe, null, t)
        }
          , Fe = function(e) {
            var t = e.icon
              , n = e.onConnect
              , a = e.title;
            return r.a.createElement(Ce, null, r.a.createElement(Ae, null, r.a.createElement(E, null, t), r.a.createElement(_e, {
                text: a
            }), r.a.createElement(_, null), r.a.createElement(x, {
                onClick: n,
                text: "Connect"
            })))
        };
        function De() {
            var e = Object(d.a)(["\n  flex-basis: calc(50% - ", "px);\n"]);
            return De = function() {
                return e
            }
            ,
            e
        }
        function Ne() {
            var e = Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: ", "px) {\n    flex-direction: column;\n    flex-wrap: none;\n  }\n"]);
            return Ne = function() {
                return e
            }
            ,
            e
        }
        var Le, ze = l.c.div(Ne(), (function(e) {
            return e.theme.breakpoints.mobile
        }
        )), Be = l.c.div(De(), (function(e) {
            return e.theme.spacing[2]
        }
        )), Re = function(e) {
            var t = e.onDismiss
              , n = Object(p.h)()
              , i = n.account
              , u = n.connect;
            return Object(a.useEffect)((function() {
                i && t()
            }
            ), [i, t]),
            r.a.createElement(A, null, r.a.createElement(V, {
                text: "Select a wallet provider."
            }), r.a.createElement(U, null, r.a.createElement(ze, null, r.a.createElement(Be, null, r.a.createElement(Fe, {
                icon: r.a.createElement("img", {
                    src: Ee.a,
                    style: {
                        height: 32
                    }
                }),
                onConnect: function() {
                    return u("injected")
                },
                title: "Metamask"
            })), r.a.createElement(_, {
                size: "sm"
            }), r.a.createElement(Be, null, r.a.createElement(Fe, {
                icon: r.a.createElement("img", {
                    src: je.a,
                    style: {
                        height: 24
                    }
                }),
                onConnect: function() {
                    return u("walletconnect")
                },
                title: "WalletConnect"
            })))), r.a.createElement(z, null, r.a.createElement(x, {
                text: "Cancel",
                variant: "secondary",
                onClick: t
            })))
        }, Ue = n(1), He = n.n(Ue), We = n(5), Ve = n(8), Ge = n.n(Ve), Je = n(42), Ye = n.n(Je), Ke = n(219), qe = function(e, t) {
            return new (new Ye.a(e).eth.Contract)(Ke.abi,t)
        }, Xe = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n, a) {
                var r;
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            t.methods.allowance(a, n.options.address).call();
                        case 3:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 7:
                            return e.prev = 7,
                            e.t0 = e.catch(0),
                            e.abrupt("return", "0");
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 7]])
            }
            )));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }(), Ze = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n, a) {
                var r, i;
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = qe(t, n),
                            e.prev = 1,
                            e.next = 4,
                            r.methods.balanceOf(a).call();
                        case 4:
                            return i = e.sent,
                            e.abrupt("return", i);
                        case 8:
                            return e.prev = 8,
                            e.t0 = e.catch(1),
                            e.abrupt("return", "0");
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 8]])
            }
            )));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }(), Qe = function() {
            var e = Object(a.useState)(0)
              , t = Object(c.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , i = Object(p.h)().ethereum;
            return Object(a.useEffect)((function() {
                if (i) {
                    var e = new Ye.a(i)
                      , t = setInterval(Object(We.a)(He.a.mark((function t() {
                        var a;
                        return He.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.eth.getBlockNumber();
                                case 2:
                                    a = t.sent,
                                    n !== a && r(a);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))), 1e3);
                    return function() {
                        return clearInterval(t)
                    }
                }
            }
            ), [i]),
            n
        }, $e = function(e) {
            var t = Object(a.useState)(new Ge.a(0))
              , n = Object(c.a)(t, 2)
              , r = n[0]
              , i = n[1]
              , u = Object(p.h)()
              , o = u.account
              , s = u.ethereum
              , l = Qe()
              , d = Object(a.useCallback)(Object(We.a)(He.a.mark((function t() {
                var n;
                return He.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Ze(s, e, o);
                        case 2:
                            n = t.sent,
                            i(new Ge.a(n));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))), [o, s, e]);
            return Object(a.useEffect)((function() {
                o && s && d()
            }
            ), [o, s, i, l, e]),
            r
        }, et = n(33), tt = n(7), nt = n(10), at = n(133), rt = n(220), it = n(221), ut = n(222), ct = n(223), ot = n(224), st = n(26), lt = new et.a(60), pt = lt.times(60), dt = pt.times(24), ft = (dt.times(365),
        new et.a(0),
        new et.a(1),
        new et.a("4294967295"),
        new et.a("340282366920938463463374607431768211455"),
        new et.a("115792089237316195423570985008687907853269984665640564039457584007913129639935"),
        new et.a("1e18"),
        Le = {
            uniswapFactory: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
            uniswapFactoryV2: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
            FUKT: "0xbf9fc1181b65542a552da563ae87a797eae208c0",
            picFEE: "0x825add9f83c27bc52d8af33c12755b6c7d70de9f",
            WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            UNIRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            YFI: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
            YCRV: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
            UNIAmpl: "0xc5be99a02c6857f9eac67bbce58df5572498f40c"
        },
        Object(st.a)(Le, "WETH", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),
        Object(st.a)(Le, "LINK", "0x514910771AF9Ca656af840dff83E8264EcF986CA"),
        Object(st.a)(Le, "MKR", "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"),
        Object(st.a)(Le, "SNX", "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F"),
        Object(st.a)(Le, "COMP", "0xc00e94Cb662C3520282E6f5717214004A7f26888"),
        Object(st.a)(Le, "LEND", "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03"),
        Object(st.a)(Le, "SUSHIYCRV", "0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726"),
        {
            sushi: {
                1: "0xbF9Fc1181b65542a552dA563Ae87A797Eae208c0"
            },
            picFEE: {
                1: "0x825add9f83c27bc52d8af33c12755b6c7d70de9f"
            },
            masterChef: {
                1: "0xf5786c6cf0116f4886d8229f377536932d6b64f9"
            },
            weth: {
                1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
            },
            USD: {
                1: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            }
        }), mt = [{
            pid: 0,
            lpAddresses: {
                1: "0x3ff9db9b9cd63dda591978c6a010c2fac8849d0e"
            },
            tokenAddresses: {
                1: "0xbF9Fc1181b65542a552dA563Ae87A797Eae208c0"
            },
            name: "Original FILM",
            symbol: "PIC-ETH UNI-V2 LP",
            tokenSymbol: "PIC",
            icon: "\ud83d\udcf7"
        }, {
            pid: 1,
            lpAddresses: {
                1: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852"
            },
            tokenAddresses: {
                1: "0xdac17f958d2ee523a2206206994597c13d831ec7"
            },
            name: "Tether Supporter",
            symbol: "USDT-ETH UNI-V2 LP",
            tokenSymbol: "USDT",
            icon: "\ud83d\udcb3"
        }, {
            pid: 2,
            lpAddresses: {
                1: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"
            },
            tokenAddresses: {
                1: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            },
            name: "USDC Supporter",
            symbol: "USDC-ETH UNI-V2 LP",
            tokenSymbol: "USDC",
            icon: "\ud83d\udcb5"
        }, {
            pid: 3,
            lpAddresses: {
                1: "0x8c889165335d8564dca2ff79934305a47678078d"
            },
            tokenAddresses: {
                1: "0xbF9Fc1181b65542a552dA563Ae87A797Eae208c0"
            },
            name: "Action FILM",
            symbol: "USDC-PIC UNI-V2 LP",
            tokenSymbol: "PIC2",
            icon: "\ud83c\udfa5"
        }], yt = {
            Hash: 0,
            Confirmed: 1,
            Both: 2,
            Simulate: 3
        }, bt = function() {
            function e(t, n, a, r) {
                var i = this;
                Object(tt.a)(this, e),
                this.web3 = a,
                this.defaultConfirmations = r.defaultConfirmations,
                this.autoGasMultiplier = r.autoGasMultiplier || 1.5,
                this.confirmationType = r.confirmationType || yt.Confirmed,
                this.defaultGas = r.defaultGas,
                this.defaultGasPrice = r.defaultGasPrice,
                this.sushi = new this.web3.eth.Contract(ut),
                this.masterChef = new this.web3.eth.Contract(it),
                this.weth = new this.web3.eth.Contract(ot),
                this.pools = mt.map((function(e) {
                    return Object.assign(e, {
                        lpAddress: e.lpAddresses[n],
                        tokenAddress: e.tokenAddresses[n],
                        lpContract: new i.web3.eth.Contract(ct),
                        tokenContract: new i.web3.eth.Contract(rt)
                    })
                }
                )),
                this.setProvider(t, n),
                this.setDefaultAccount(this.web3.eth.defaultAccount)
            }
            return Object(nt.a)(e, [{
                key: "setProvider",
                value: function(e, t) {
                    var n = function(n, a) {
                        n.setProvider(e),
                        a ? n.options.address = a : console.error("Contract address not found in network", t)
                    };
                    n(this.sushi, ft.sushi[t]),
                    n(this.masterChef, ft.masterChef[t]),
                    n(this.weth, ft.weth[t]),
                    this.pools.forEach((function(e) {
                        var t = e.lpContract
                          , a = e.lpAddress
                          , r = e.tokenContract
                          , i = e.tokenAddress;
                        n(t, a),
                        n(r, i)
                    }
                    ))
                }
            }, {
                key: "setDefaultAccount",
                value: function(e) {
                    this.sushi.options.from = e,
                    this.masterChef.options.from = e
                }
            }, {
                key: "callContractFunction",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e(t, n) {
                        var a, r, i, u, c, o, s, l, p, d, f, m, y, b, h, v, x, w, g, E, O, j = this;
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = n.confirmations,
                                    r = n.confirmationType,
                                    i = n.autoGasMultiplier,
                                    u = Object(at.a)(n, ["confirmations", "confirmationType", "autoGasMultiplier"]),
                                    this.blockGasLimit) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 4,
                                    this.setGasLimit();
                                case 4:
                                    if (!u.gasPrice && this.defaultGasPrice && (u.gasPrice = this.defaultGasPrice),
                                    r !== yt.Simulate && n.gas) {
                                        e.next = 30;
                                        break
                                    }
                                    if (!this.defaultGas || r === yt.Simulate) {
                                        e.next = 10;
                                        break
                                    }
                                    u.gas = this.defaultGas,
                                    e.next = 27;
                                    break;
                                case 10:
                                    return e.prev = 10,
                                    console.log("estimating gas"),
                                    e.next = 14,
                                    t.estimateGas(u);
                                case 14:
                                    c = e.sent,
                                    e.next = 24;
                                    break;
                                case 17:
                                    throw e.prev = 17,
                                    e.t0 = e.catch(10),
                                    o = t.encodeABI(),
                                    s = n.from,
                                    l = n.value,
                                    p = t._parent._address,
                                    e.t0.transactionData = {
                                        from: s,
                                        value: l,
                                        data: o,
                                        to: p
                                    },
                                    e.t0;
                                case 24:
                                    d = i || this.autoGasMultiplier,
                                    f = Math.floor(c * d),
                                    u.gas = f < this.blockGasLimit ? f : this.blockGasLimit;
                                case 27:
                                    if (r !== yt.Simulate) {
                                        e.next = 30;
                                        break
                                    }
                                    return m = u.gas,
                                    e.abrupt("return", {
                                        gasEstimate: c,
                                        g: m
                                    });
                                case 30:
                                    if (u.value ? u.value = new et.a(u.value).toFixed(0) : u.value = "0",
                                    y = t.send(u),
                                    h = (b = {
                                        INITIAL: 0,
                                        RESOLVED: 1,
                                        REJECTED: 2
                                    }).INITIAL,
                                    v = b.INITIAL,
                                    x = void 0 !== r ? r : this.confirmationType,
                                    Object.values(yt).includes(x)) {
                                        e.next = 38;
                                        break
                                    }
                                    throw new Error("Invalid confirmation type: ".concat(x));
                                case 38:
                                    if (x !== yt.Hash && x !== yt.Both || (w = new Promise((function(e, t) {
                                        y.on("error", (function(e) {
                                            h === b.INITIAL && (h = b.REJECTED,
                                            t(e),
                                            y.off())
                                        }
                                        )),
                                        y.on("transactionHash", (function(t) {
                                            h === b.INITIAL && (h = b.RESOLVED,
                                            e(t),
                                            x !== yt.Both && y.off())
                                        }
                                        ))
                                    }
                                    ))),
                                    x !== yt.Confirmed && x !== yt.Both || (g = new Promise((function(e, t) {
                                        y.on("error", (function(e) {
                                            x !== yt.Confirmed && h !== b.RESOLVED || v !== b.INITIAL || (v = b.REJECTED,
                                            t(e),
                                            y.off())
                                        }
                                        ));
                                        var n = a || j.defaultConfirmations;
                                        n ? y.on("confirmation", (function(t, a) {
                                            t >= n && (v === b.INITIAL && (v = b.RESOLVED,
                                            e(a),
                                            y.off()))
                                        }
                                        )) : y.on("receipt", (function(t) {
                                            v = b.RESOLVED,
                                            e(t),
                                            y.off()
                                        }
                                        ))
                                    }
                                    ))),
                                    x !== yt.Hash) {
                                        e.next = 46;
                                        break
                                    }
                                    return e.next = 43,
                                    w;
                                case 43:
                                    return E = e.sent,
                                    this.notifier && this.notifier.hash(E),
                                    e.abrupt("return", {
                                        transactionHash: E
                                    });
                                case 46:
                                    if (x !== yt.Confirmed) {
                                        e.next = 48;
                                        break
                                    }
                                    return e.abrupt("return", g);
                                case 48:
                                    return e.next = 50,
                                    w;
                                case 50:
                                    return O = e.sent,
                                    this.notifier && this.notifier.hash(O),
                                    e.abrupt("return", {
                                        transactionHash: O,
                                        confirmation: g
                                    });
                                case 53:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[10, 17]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "callConstantContractFunction",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e(t, n) {
                        var a, r, i;
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = t,
                                    r = n.blockNumber,
                                    i = Object(at.a)(n, ["blockNumber"]),
                                    e.abrupt("return", a.call(i, r));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setGasLimit",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e() {
                        var t;
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.web3.eth.getBlock("latest");
                                case 2:
                                    t = e.sent,
                                    this.blockGasLimit = t.gasLimit - 1e5;
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }(), ht = function e(t, n) {
            Object(tt.a)(this, e),
            this.contracts = t,
            this.accountInfo = n,
            this.type = "",
            this.allocation = [],
            this.balances = {},
            this.status = "",
            this.approvals = {},
            this.walletInfo = {}
        }, vt = "Returned error: VM Exception while processing transaction: revert", xt = function() {
            function e(t) {
                Object(tt.a)(this, e),
                this.provider = t
            }
            return Object(nt.a)(e, [{
                key: "setProvider",
                value: function(e) {
                    this.provider = e
                }
            }, {
                key: "resetEVM",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e() {
                        var t, n = arguments;
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : "0x1",
                                    e.next = 3,
                                    this.snapshot();
                                case 3:
                                    if (e.sent === t) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7,
                                    this.reset(t);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "reset",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e(t) {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("id must be set");
                                case 2:
                                    return e.next = 4,
                                    this.callJsonrpcMethod("evm_revert", [t]);
                                case 4:
                                    return e.abrupt("return", this.snapshot());
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "snapshot",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e() {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.callJsonrpcMethod("evm_snapshot"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "evmRevert",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e(t) {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.callJsonrpcMethod("evm_revert", [t]));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "stopMining",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e() {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.callJsonrpcMethod("miner_stop"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "startMining",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e() {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.callJsonrpcMethod("miner_start"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "mineBlock",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e() {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.callJsonrpcMethod("evm_mine"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "increaseTime",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e(t) {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.callJsonrpcMethod("evm_increaseTime", [t]));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "callJsonrpcMethod",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e(t, n) {
                        var a, r;
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = {
                                        method: t,
                                        params: n,
                                        jsonrpc: "2.0",
                                        id: (new Date).getTime()
                                    },
                                    e.next = 3,
                                    this.send(a);
                                case 3:
                                    return r = e.sent,
                                    e.abrupt("return", r.result);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "send",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e(t) {
                        var n = this;
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, a) {
                                        n.provider.send(t, (function(t, n) {
                                            t ? a(t) : e(n)
                                        }
                                        ))
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "assertCertainError",
                value: function(e, t) {
                    var n = e.message
                      , a = n.search(t)
                      , r = n;
                    0 === a && (r = n.substring(a, a + t.length)),
                    expect(r).toEqual(t)
                }
            }, {
                key: "expectThrow",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e(t, n) {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    t;
                                case 3:
                                    throw new Error("Did not throw");
                                case 6:
                                    e.prev = 6,
                                    e.t0 = e.catch(0),
                                    this.assertCertainError(e.t0, vt),
                                    n && "true" !== Object({
                                        NODE_ENV: "production",
                                        PUBLIC_URL: "",
                                        WDS_SOCKET_HOST: void 0,
                                        WDS_SOCKET_PATH: void 0,
                                        WDS_SOCKET_PORT: void 0
                                    }).COVERAGE && this.assertCertainError(e.t0, "".concat(vt, " ").concat(n));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 6]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "expectAssertFailure",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e(t) {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    t;
                                case 3:
                                    throw new Error("Did not throw");
                                case 6:
                                    e.prev = 6,
                                    e.t0 = e.catch(0),
                                    this.assertCertainError(e.t0, "Returned error: VM Exception while processing transaction: invalid opcode");
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }(), wt = function() {
            function e(t, n, a, r) {
                var i;
                Object(tt.a)(this, e),
                i = "string" === typeof t ? t.includes("wss") ? new Ye.a.providers.WebsocketProvider(t,r.ethereumNodeTimeout || 1e4) : new Ye.a.providers.HttpProvider(t,r.ethereumNodeTimeout || 1e4) : t,
                this.web3 = new Ye.a(i),
                a && (this.testing = new xt(i),
                this.snapshot = this.testing.snapshot()),
                r.defaultAccount && (this.web3.eth.defaultAccount = r.defaultAccount),
                this.contracts = new bt(i,n,this.web3,r),
                this.sushiAddress = ft.sushi[n],
                this.masterChefAddress = ft.masterChef[n],
                this.wethAddress = ft.weth[n]
            }
            return Object(nt.a)(e, [{
                key: "resetEVM",
                value: function() {
                    var e = Object(We.a)(He.a.mark((function e() {
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.testing.resetEVM(this.snapshot);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "addAccount",
                value: function(e, t) {
                    this.accounts.push(new ht(this.contracts,e,t))
                }
            }, {
                key: "setProvider",
                value: function(e, t) {
                    this.web3.setProvider(e),
                    this.contracts.setProvider(e, t),
                    this.operation.setNetworkId(t)
                }
            }, {
                key: "setDefaultAccount",
                value: function(e) {
                    this.web3.eth.defaultAccount = e,
                    this.contracts.setDefaultAccount(e)
                }
            }, {
                key: "getDefaultAccount",
                value: function() {
                    return this.web3.eth.defaultAccount
                }
            }, {
                key: "loadAccount",
                value: function(e) {
                    var t = this.web3.eth.accounts.wallet.add(e.privateKey);
                    if (!t || e.address && e.address.toLowerCase() !== t.address.toLowerCase())
                        throw new Error("Loaded account address mismatch.\n        Expected ".concat(e.address, ", got ").concat(t ? t.address : null))
                }
            }, {
                key: "toBigN",
                value: function(e) {
                    return Ge()(e)
                }
            }]),
            e
        }();
        et.a.config({
            EXPONENTIAL_AT: 1e3,
            DECIMAL_PLACES: 80
        });
        var gt = Object(a.createContext)({
            sushi: void 0
        })
          , Et = function(e) {
            var t = e.children
              , n = Object(p.h)().ethereum
              , i = Object(a.useState)()
              , u = Object(c.a)(i, 2)
              , o = u[0]
              , s = u[1];
            return window.sushi = o,
            window.eth = n,
            Object(a.useEffect)((function() {
                if (n) {
                    var e = Number(n.chainId)
                      , t = new wt(n,e,!1,{
                        defaultAccount: n.selectedAddress,
                        defaultConfirmations: 1,
                        autoGasMultiplier: 1.5,
                        testing: !1,
                        defaultGas: "6000000",
                        defaultGasPrice: "1000000000000",
                        accounts: [],
                        ethereumNodeTimeout: 1e4
                    });
                    s(t),
                    window.sushisauce = t
                }
            }
            ), [n]),
            r.a.createElement(gt.Provider, {
                value: {
                    sushi: o
                }
            }, t)
        }
          , Ot = function() {
            return Object(a.useContext)(gt).sushi
        }
          , jt = n(211);
        Ge.a.config({
            EXPONENTIAL_AT: 1e3,
            DECIMAL_PLACES: 80
        });
        var Tt = function(e) {
            return e && e.sushiAddress
        }
          , kt = function(e) {
            return e && e.contracts && e.contracts.masterChef
        }
          , Ct = function(e) {
            return e ? e.contracts.pools.map((function(t) {
                var n = t.pid
                  , a = t.name
                  , r = t.symbol
                  , i = t.icon
                  , u = t.tokenAddress
                  , c = t.tokenSymbol
                  , o = t.tokenContract;
                return {
                    pid: n,
                    id: r,
                    name: a,
                    lpToken: r,
                    lpTokenAddress: t.lpAddress,
                    lpContract: t.lpContract,
                    tokenAddress: u,
                    tokenSymbol: c,
                    tokenContract: o,
                    earnToken: "PIC",
                    earnTokenAddress: e.contracts.sushi.options.address,
                    icon: i
                }
            }
            )) : []
        }
          , Mt = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n) {
                var a, r, i;
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.methods.poolInfo(n).call();
                        case 2:
                            return a = e.sent,
                            r = a.allocPoint,
                            e.next = 6,
                            t.methods.totalAllocPoint().call();
                        case 6:
                            return i = e.sent,
                            e.abrupt("return", new Ge.a(r).div(new Ge.a(i)));
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , St = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n, a) {
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.pendingPic(n, a).call());
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }()
          , At = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n, a, r, i) {
                var u, c, o, s, l, p, d, f, m, y;
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            r.methods.balanceOf(a.options.address).call();
                        case 2:
                            return u = e.sent,
                            e.next = 5,
                            r.methods.decimals().call();
                        case 5:
                            return c = e.sent,
                            e.next = 8,
                            a.methods.balanceOf(t.options.address).call();
                        case 8:
                            return o = e.sent,
                            e.next = 11,
                            a.methods.totalSupply().call();
                        case 11:
                            return s = e.sent,
                            e.next = 14,
                            n.methods.balanceOf(a.options.address).call();
                        case 14:
                            return l = e.sent,
                            p = new Ge.a(o).div(new Ge.a(s)),
                            d = new Ge.a(u).times(p).div(new Ge.a(10).pow(c)),
                            f = new Ge.a(l),
                            m = p.times(f).times(new Ge.a(2)),
                            y = new Ge.a(l).times(p).div(new Ge.a(10).pow(18)),
                            e.t0 = d,
                            e.t1 = y,
                            e.t2 = m.div(new Ge.a(10).pow(18)),
                            e.t3 = y.div(d),
                            e.next = 26,
                            Mt(t, i);
                        case 26:
                            return e.t4 = e.sent,
                            e.abrupt("return", {
                                tokenAmount: e.t0,
                                wethAmount: e.t1,
                                totalWethValue: e.t2,
                                tokenPriceInWeth: e.t3,
                                poolWeight: e.t4
                            });
                        case 28:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, a, r, i) {
                return e.apply(this, arguments)
            }
        }()
          , It = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n, a) {
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.approve(n.options.address, jt.ethers.constants.MaxUint256).send({
                                from: a
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }()
          , Pt = function() {
            var e = Object(We.a)(He.a.mark((function e(t) {
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = Ge.a,
                            e.next = 3,
                            t.contracts.sushi.methods.totalSupply().call();
                        case 3:
                            return e.t1 = e.sent,
                            e.abrupt("return", new e.t0(e.t1));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , _t = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n, a, r) {
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.deposit(n, new Ge.a(a).times(new Ge.a(10).pow(18)).toString()).send({
                                from: r
                            }).on("transactionHash", (function(e) {
                                return console.log(e),
                                e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, a, r) {
                return e.apply(this, arguments)
            }
        }()
          , Ft = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n, a, r) {
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.withdraw(n, new Ge.a(a).times(new Ge.a(10).pow(18)).toString()).send({
                                from: r
                            }).on("transactionHash", (function(e) {
                                return console.log(e),
                                e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, a, r) {
                return e.apply(this, arguments)
            }
        }()
          , Dt = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n, a) {
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", t.methods.withdraw(n, "0").send({
                                from: a
                            }).on("transactionHash", (function(e) {
                                return console.log(e),
                                e.transactionHash
                            }
                            )));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }()
          , Nt = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n, a) {
                var r, i;
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            t.methods.userInfo(n, a).call();
                        case 3:
                            return r = e.sent,
                            i = r.amount,
                            e.abrupt("return", new Ge.a(i));
                        case 8:
                            return e.prev = 8,
                            e.t0 = e.catch(0),
                            e.abrupt("return", new Ge.a(0));
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 8]])
            }
            )));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }()
          , Lt = function() {
            var e = Object(We.a)(He.a.mark((function e(t, n) {
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!((new Date).getTime() / 1e3 >= 1597172400)) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", t.methods.exit().send({
                                from: n
                            }).on("transactionHash", (function(e) {
                                return console.log(e),
                                e.transactionHash
                            }
                            )));
                        case 5:
                            alert("pool not active");
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , zt = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18
              , n = e.dividedBy(new Ge.a(10).pow(t));
            return n.toNumber()
        }
          , Bt = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return e.dividedBy(new Ge.a(10).pow(t)).toFixed()
        };
        function Rt() {
            var e = Object(d.a)(["\n  color: ", ";\n"]);
            return Rt = function() {
                return e
            }
            ,
            e
        }
        var Ut = l.c.div(Rt(), (function(e) {
            return e.theme.color.grey[400]
        }
        ))
          , Ht = function(e) {
            var t = e.text;
            return r.a.createElement(Ut, null, t)
        }
          , Wt = n(65)
          , Vt = n.n(Wt);
        function Gt() {
            var e = Object(d.a)(["\n  font-family: 'Roboto Mono', monospace;\n  color: ", ";\n  font-size: 36px;\n  font-weight: 700;\n"]);
            return Gt = function() {
                return e
            }
            ,
            e
        }
        var Jt = l.c.div(Gt(), (function(e) {
            return e.theme.color.grey[600]
        }
        ))
          , Yt = function(e) {
            var t = e.value
              , n = e.decimals
              , i = Object(a.useState)(0)
              , u = Object(c.a)(i, 2)
              , o = u[0]
              , s = u[1]
              , l = Object(a.useState)(0)
              , p = Object(c.a)(l, 2)
              , d = p[0]
              , f = p[1];
            return Object(a.useEffect)((function() {
                "number" === typeof t && (s(d),
                f(t))
            }
            ), [t]),
            r.a.createElement(Jt, null, "string" == typeof t ? t : r.a.createElement(Vt.a, {
                start: o,
                end: d,
                decimals: void 0 !== n ? n : d < 0 ? 4 : d > 1e5 ? 0 : 3,
                duration: 1,
                separator: ","
            }))
        };
        function Kt() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin-bottom: ", "px;\n"]);
            return Kt = function() {
                return e
            }
            ,
            e
        }
        function qt() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
            return qt = function() {
                return e
            }
            ,
            e
        }
        var Xt = l.c.div(qt())
          , Zt = l.c.div(Kt(), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , Qt = function(e) {
            var t = e.onDismiss
              , n = Object(p.h)()
              , i = n.account
              , u = n.reset
              , c = Object(a.useCallback)((function() {
                t(),
                u()
            }
            ), [t, u])
              , o = Ot()
              , s = $e(Tt(o));
            return r.a.createElement(A, null, r.a.createElement(V, {
                text: "My Balance"
            }), r.a.createElement(U, null, r.a.createElement(_, null), r.a.createElement("div", {
                style: {
                    display: "flex"
                }
            }, r.a.createElement(Zt, null, r.a.createElement(E, null, r.a.createElement("span", null, "\ud83d\udcf7")), r.a.createElement(Xt, null, r.a.createElement(Yt, {
                value: zt(s)
            }), r.a.createElement(Ht, {
                text: "PIC Balance"
            })))), r.a.createElement(_, null), r.a.createElement(x, {
                href: "https://etherscan.io/address/".concat(i),
                text: "Buy PIC",
                variant: "secondary"
            }), r.a.createElement(_, null), r.a.createElement(x, {
                onClick: c,
                text: "Sign out",
                variant: "secondary"
            })), r.a.createElement(z, null, r.a.createElement(x, {
                onClick: t,
                text: "Cancel"
            })))
        };
        function $t() {
            var e = Object(d.a)([""]);
            return $t = function() {
                return e
            }
            ,
            e
        }
        var en = l.c.div($t())
          , tn = function(e) {
            var t = we(r.a.createElement(Qt, null))
              , n = Object(c.a)(t, 1)[0]
              , i = we(r.a.createElement(Re, null), "provider")
              , u = Object(c.a)(i, 1)[0]
              , o = Object(p.h)().account
              , s = Object(a.useCallback)((function() {
                u()
            }
            ), [u]);
            return r.a.createElement(en, null, o ? r.a.createElement(x, {
                onClick: n,
                size: "sm",
                text: "My Balance"
            }) : r.a.createElement(x, {
                onClick: s,
                size: "sm",
                text: "Unlock Wallet"
            }))
        };
        function nn() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-weight: 700;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  text-decoration: none;\n  &:hover {\n    color: ", ";\n  }\n  &.active {\n    color: ", ";\n  }\n  @media (max-width: 400px) {\n    padding-left: ", "px;\n    padding-right: ", "px;\n  }\n"]);
            return nn = function() {
                return e
            }
            ,
            e
        }
        function an() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-weight: 700;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  text-decoration: none;\n  &:hover {\n    color: ", ";\n  }\n  &.active {\n    color: ", ";\n  }\n  @media (max-width: 400px) {\n    padding-left: ", "px;\n    padding-right: ", "px;\n  }\n"]);
            return an = function() {
                return e
            }
            ,
            e
        }
        function rn() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n"]);
            return rn = function() {
                return e
            }
            ,
            e
        }
        var un = l.c.nav(rn())
          , cn = Object(l.c)(o.c)(an(), (function(e) {
            return e.theme.color.grey[400]
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ), (function(e) {
            return e.theme.color.grey[500]
        }
        ), (function(e) {
            return e.theme.color.primary.main
        }
        ), (function(e) {
            return e.theme.spacing[2]
        }
        ), (function(e) {
            return e.theme.spacing[2]
        }
        ))
          , on = l.c.a(nn(), (function(e) {
            return e.theme.color.grey[400]
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ), (function(e) {
            return e.theme.color.grey[500]
        }
        ), (function(e) {
            return e.theme.color.primary.main
        }
        ), (function(e) {
            return e.theme.spacing[2]
        }
        ), (function(e) {
            return e.theme.spacing[2]
        }
        ))
          , sn = function() {
            return r.a.createElement(un, null, r.a.createElement(cn, {
                exact: !0,
                activeClassName: "active",
                to: "/"
            }, "Home"), r.a.createElement(cn, {
                exact: !0,
                activeClassName: "active",
                to: "/farms"
            }, "PhotoStudio"), r.a.createElement(on, {
                href: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xbf9fc1181b65542a552da563ae87a797eae208c0",
                target: "_blank"
            }, "Buy PIC"), r.a.createElement(on, {
                href: "https://app.uniswap.org/#/add/0xbf9fc1181b65542a552da563ae87a797eae208c0/ETH",
                target: "_blank"
            }, "Make PIC-ETH LP"), r.a.createElement(on, {
                href: "https://app.uniswap.org/#/add/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/0xbf9fc1181b65542a552da563ae87a797eae208c0",
                target: "_blank"
            }, "Make PIC-USDC LP"), r.a.createElement(on, {
                href: "https://medium.com/@picfinance/pic-finance-revolution-of-nft-social-network-protocol-2c29e99f138b",
                target: "_blank"
            }, "About"), r.a.createElement(on, {
                href: "https://t.me/picfinance",
                target: "_blank"
            }, "Telegram"))
        };
        function ln() {
            var e = Object(d.a)(["\n  background: none;\n  border: 0;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  display: none;\n  @media (max-width: 400px) {\n    align-items: center;\n    display: flex;\n    height: 44px;\n    justify-content: center;\n    width: 44px;\n  }\n"]);
            return ln = function() {
                return e
            }
            ,
            e
        }
        function pn() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  width: 156px;\n  @media (max-width: 400px) {\n    justify-content: center;\n    width: auto;\n  }\n"]);
            return pn = function() {
                return e
            }
            ,
            e
        }
        function dn() {
            var e = Object(d.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  @media (max-width: 400px) {\n    display: none;\n  }\n"]);
            return dn = function() {
                return e
            }
            ,
            e
        }
        function fn() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  height: ", "px;\n  justify-content: space-between;\n  max-width: ", "px;\n  width: 100%;\n"]);
            return fn = function() {
                return e
            }
            ,
            e
        }
        function mn() {
            var e = Object(d.a)([""]);
            return mn = function() {
                return e
            }
            ,
            e
        }
        function yn() {
            var e = Object(d.a)(["\n  width: 260px;\n  @media (max-width: 400px) {\n    width: auto;\n  }\n"]);
            return yn = function() {
                return e
            }
            ,
            e
        }
        var bn = l.c.div(yn())
          , hn = l.c.div(mn())
          , vn = l.c.div(fn(), (function(e) {
            return e.theme.topBarSize
        }
        ), (function(e) {
            return e.theme.siteWidth
        }
        ))
          , xn = (l.c.div(dn()),
        l.c.div(pn()))
          , wn = (l.c.button(ln()),
        function(e) {
            e.onPresentMobileMenu;
            return r.a.createElement(hn, null, r.a.createElement(ie, {
                size: "lg"
            }, r.a.createElement(vn, null, r.a.createElement(bn, null, r.a.createElement(fe, null)), r.a.createElement(sn, null), r.a.createElement(xn, null, r.a.createElement(tn, null)))))
        }
        )
          , gn = Object(a.createContext)({
            farms: [],
            unharvested: 0
        })
          , En = function(e) {
            var t = e.children
              , n = Object(a.useState)(0)
              , i = Object(c.a)(n, 2)
              , u = i[0]
              , o = (i[1],
            Ot())
              , s = (Object(p.h)().account,
            Ct(o));
            return r.a.createElement(gn.Provider, {
                value: {
                    farms: s,
                    unharvested: u
                }
            }, t)
        }
          , On = Object(a.createContext)({
            transactions: {},
            onAddTransaction: function(e) {}
        })
          , jn = n(27)
          , Tn = function(e) {
            return {
                type: "SET_TRANSACTIONS",
                transactions: e
            }
        }
          , kn = {
            initialized: !1,
            transactions: {}
        }
          , Cn = function(e, t) {
            switch (t.type) {
            case "ADD_TRANSACTION":
                return Object(jn.a)({}, e, {
                    transactions: Object(jn.a)({}, e.transactions, Object(st.a)({}, t.transaction.hash, t.transaction))
                });
            case "RECEIVE_TX_RECEIPT":
                return Object(jn.a)({}, e, {
                    transactions: Object(jn.a)({}, e.transactions, Object(st.a)({}, t.txHash, Object(jn.a)({}, e.transactions[t.txHash], {
                        receipt: t.receipt
                    })))
                });
            case "SET_TRANSACTIONS":
                return Object(jn.a)({}, e, {
                    transactions: t.transactions,
                    initialized: !0
                });
            default:
                return e
            }
        }
          , Mn = function(e) {
            var t = e.children
              , n = Object(a.useReducer)(Cn, kn)
              , i = Object(c.a)(n, 2)
              , u = i[0]
              , o = u.initialized
              , s = u.transactions
              , l = i[1]
              , p = Object(a.useCallback)((function(e) {
                l({
                    type: "ADD_TRANSACTION",
                    transaction: e
                })
            }
            ), [l])
              , d = Object(a.useCallback)(Object(We.a)(He.a.mark((function e() {
                var t, n;
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            try {
                                t = localStorage.getItem("transactions"),
                                n = JSON.parse(t) || {},
                                l(Tn(n))
                            } catch (a) {
                                console.log(a)
                            }
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), [l]);
            return Object(a.useEffect)((function() {
                o && localStorage.setItem("transactions", JSON.stringify(s))
            }
            ), [o, s]),
            Object(a.useEffect)((function() {
                d()
            }
            ), [d]),
            r.a.createElement(On.Provider, {
                value: {
                    transactions: s,
                    onAddTransaction: p
                }
            }, t)
        }
          , Sn = {
            borderRadius: 12,
            breakpoints: {
                mobile: 400
            },
            color: {
                black: "#000",
                grey: {
                    100: "#ffffff",
                    200: "#ffffff",
                    300: "#f0f0f0",
                    400: "#aa9585",
                    500: "#805e49",
                    600: "#5b3926",
                    800: "#2d1e12"
                },
                primary: {
                    light: "#504392",
                    main: "#5043c2"
                },
                secondary: {
                    main: "##00d1810"
                },
                white: "#FFF"
            },
            siteWidth: 1200,
            spacing: {
                1: 4,
                2: 8,
                3: 16,
                4: 24,
                5: 32,
                6: 48,
                7: 64
            },
            topBarSize: 72
        };
        function An() {
            var e = Object(d.a)(["\n  color: ", ";\n  padding-left: ", "px;\n  padding-right: ", "px;\n  text-decoration: none;\n  &:hover {\n    color: ", ";\n  }\n"]);
            return An = function() {
                return e
            }
            ,
            e
        }
        function In() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n"]);
            return In = function() {
                return e
            }
            ,
            e
        }
        var Pn = l.c.nav(In())
          , _n = l.c.a(An(), (function(e) {
            return e.theme.color.grey[400]
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ), (function(e) {
            return e.theme.color.grey[500]
        }
        ))
          , Fn = function() {
            return r.a.createElement(Pn, null, r.a.createElement(_n, {
                target: "_blank",
                href: "https://etherscan.io/address/0xf5786c6cf0116f4886d8229f377536932d6b64f9"
            }, "Director"), r.a.createElement(_n, {
                target: "_blank",
                href: "https://uniswap.info/pair/0x3ff9db9b9cd63dda591978c6a010c2fac8849d0e"
            }, "Uniswap PIC-ETH"), r.a.createElement(_n, {
                target: "_blank",
                href: "https://t.me/picfinance"
            }, "Telegram"), r.a.createElement(_n, {
                target: "_blank",
                href: "https://twitter.com/FinancePic"
            }, "Twitter"))
        };
        function Dn() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: ", "px;\n  max-width: ", "px;\n  width: 100%;\n"]);
            return Dn = function() {
                return e
            }
            ,
            e
        }
        function Nn() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n"]);
            return Nn = function() {
                return e
            }
            ,
            e
        }
        var Ln = l.c.footer(Nn())
          , zn = l.c.div(Dn(), (function(e) {
            return e.theme.topBarSize
        }
        ), (function(e) {
            return e.theme.siteWidth
        }
        ))
          , Bn = function() {
            return r.a.createElement(Ln, null, r.a.createElement(zn, null, r.a.createElement(Fn, null)))
        };
        function Rn() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - ", "px);\n"]);
            return Rn = function() {
                return e
            }
            ,
            e
        }
        function Un() {
            var e = Object(d.a)([""]);
            return Un = function() {
                return e
            }
            ,
            e
        }
        var Hn = l.c.div(Un())
          , Wn = l.c.div(Rn(), (function(e) {
            return 2 * e.theme.topBarSize
        }
        ))
          , Vn = function(e) {
            var t = e.children;
            return r.a.createElement(Hn, null, r.a.createElement(Wn, null, t), r.a.createElement(Bn, null))
        };
        function Gn() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"]);
            return Gn = function() {
                return e
            }
            ,
            e
        }
        function Jn() {
            var e = Object(d.a)(["\n  font-family: 'Kaushan Script', sans-serif;\n  color: ", ";\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n"]);
            return Jn = function() {
                return e
            }
            ,
            e
        }
        function Yn() {
            var e = Object(d.a)(["\n  font-size: 120px;\n  height: 120px;\n  line-height: 120px;\n  text-align: center;\n  width: 120px;\n"]);
            return Yn = function() {
                return e
            }
            ,
            e
        }
        function Kn() {
            var e = Object(d.a)(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: ", "px;\n  padding-top: ", "px;\n  margin: 0 auto;\n"]);
            return Kn = function() {
                return e
            }
            ,
            e
        }
        var qn = l.c.div(Kn(), (function(e) {
            return e.theme.spacing[6]
        }
        ), (function(e) {
            return e.theme.spacing[6]
        }
        ))
          , Xn = l.c.div(Yn())
          , Zn = l.c.h1(Jn(), (function(e) {
            return e.theme.color.grey[600]
        }
        ))
          , Qn = l.c.h3(Gn(), (function(e) {
            return e.theme.color.grey[400]
        }
        ))
          , $n = function(e) {
            var t = e.icon
              , n = e.subtitle
              , a = e.title;
            return r.a.createElement(ie, {
                size: "sm"
            }, r.a.createElement(qn, null, r.a.createElement(Xn, null, t), r.a.createElement(Zn, null, a), r.a.createElement(Qn, null, n)))
        }
          , ea = function(e) {
            return Object(a.useContext)(gn).farms.find((function(t) {
                return t.id === e
            }
            ))
        }
          , ta = function(e) {
            var t = Object(p.h)().account;
            return {
                onRedeem: Object(a.useCallback)(Object(We.a)(He.a.mark((function n() {
                    var a;
                    return He.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                Lt(e, t);
                            case 2:
                                return a = n.sent,
                                console.log(a),
                                n.abrupt("return", a);
                            case 5:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))), [t, e])
            }
        }
          , na = function(e) {
            var t = Object(a.useState)(new Ge.a(0))
              , n = Object(c.a)(t, 2)
              , r = n[0]
              , i = n[1]
              , u = Object(p.h)()
              , o = u.account
              , s = (u.ethereum,
            Ot())
              , l = kt(s)
              , d = Qe()
              , f = Object(a.useCallback)(Object(We.a)(He.a.mark((function t() {
                var n;
                return He.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            St(l, e, o);
                        case 2:
                            n = t.sent,
                            i(new Ge.a(n));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))), [o, l, s]);
            return Object(a.useEffect)((function() {
                o && l && s && f()
            }
            ), [o, d, l, i, s]),
            r
        }
          , aa = function(e) {
            var t = Object(p.h)().account
              , n = Ot()
              , r = kt(n);
            return {
                onReward: Object(a.useCallback)(Object(We.a)(He.a.mark((function n() {
                    var a;
                    return He.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                Dt(r, e, t);
                            case 2:
                                return a = n.sent,
                                console.log(a),
                                n.abrupt("return", a);
                            case 5:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))), [t, e, n])
            }
        };
        function ra() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]);
            return ra = function() {
                return e
            }
            ,
            e
        }
        function ia() {
            var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
            return ia = function() {
                return e
            }
            ,
            e
        }
        function ua() {
            var e = Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n  width: 100%;\n"]);
            return ua = function() {
                return e
            }
            ,
            e
        }
        function ca() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
            return ca = function() {
                return e
            }
            ,
            e
        }
        var oa = l.c.div(ca())
          , sa = l.c.div(ua(), (function(e) {
            return e.theme.spacing[6]
        }
        ))
          , la = (l.c.div(ia(), (function(e) {
            return e.theme.spacing[4]
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        )),
        l.c.div(ra()))
          , pa = function(e) {
            var t = e.pid
              , n = na(t)
              , i = Object(a.useState)(!1)
              , u = Object(c.a)(i, 2)
              , o = u[0]
              , s = u[1]
              , l = aa(t).onReward;
            return r.a.createElement(Ce, null, r.a.createElement(Ae, null, r.a.createElement(la, null, r.a.createElement(oa, null, r.a.createElement(E, null, "\ud83d\udcf7"), r.a.createElement(Yt, {
                value: zt(n)
            }), r.a.createElement(Ht, {
                text: "PIC Earned"
            })), r.a.createElement(sa, null, r.a.createElement(x, {
                disabled: !n.toNumber() || o,
                text: o ? "Collecting PIC" : "Harvest",
                onClick: Object(We.a)(He.a.mark((function e() {
                    return He.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return s(!0),
                                e.next = 3,
                                l();
                            case 3:
                                s(!1);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            })))))
        };
        function da() {
            var e = Object(d.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"]);
            return da = function() {
                return e
            }
            ,
            e
        }
        function fa() {
            var e = Object(d.a)(["\n  align-items: center;\n  background-color: ", ";\n  border: 0;\n  border-radius: 28px;\n  box-shadow: 6px 6px 12px ", ",\n    -12px -12px 24px ", "aa;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ", ";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    background-color: ", ";\n  }\n"]);
            return fa = function() {
                return e
            }
            ,
            e
        }
        var ma = l.c.button(fa(), (function(e) {
            return e.theme.color.grey[200]
        }
        ), (function(e) {
            return e.theme.color.grey[300]
        }
        ), (function(e) {
            return e.theme.color.grey[100]
        }
        ), (function(e) {
            return e.disabled ? e.theme.color.grey[400] : e.theme.color.primary.main
        }
        ), (function(e) {
            return e.disabled ? "none" : void 0
        }
        ), (function(e) {
            return e.theme.color.grey[100]
        }
        ))
          , ya = Object(l.c)(o.b)(da(), (function(e) {
            return -e.theme.spacing[4]
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , ba = function(e) {
            var t = e.children
              , n = e.disabled
              , a = e.onClick
              , i = e.to;
            return r.a.createElement(ma, {
                disabled: n,
                onClick: a
            }, i ? r.a.createElement(ya, {
                to: i
            }, t) : t)
        }
          , ha = function(e) {
            var t = e.color
              , n = e.size
              , i = void 0 === n ? 24 : n
              , u = Object(a.useContext)(l.a).color;
            return r.a.createElement("svg", {
                height: i,
                viewBox: "0 0 24 24",
                width: i
            }, r.a.createElement("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), r.a.createElement("path", {
                d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                fill: t || u.grey[400]
            }))
        }
          , va = function(e) {
            var t = Object(a.useState)(new Ge.a(0))
              , n = Object(c.a)(t, 2)
              , r = n[0]
              , i = n[1]
              , u = Object(p.h)().account
              , o = Ot()
              , s = kt(o)
              , l = Object(a.useCallback)(Object(We.a)(He.a.mark((function t() {
                var n;
                return He.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Xe(e, s, u);
                        case 2:
                            n = t.sent,
                            i(new Ge.a(n));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))), [u, s, e]);
            return Object(a.useEffect)((function() {
                u && s && e && l();
                var t = setInterval(l, 1e4);
                return function() {
                    return clearInterval(t)
                }
            }
            ), [u, s, e]),
            r
        }
          , xa = function(e) {
            var t = Object(p.h)().account
              , n = Ot()
              , r = kt(n);
            return {
                onApprove: Object(a.useCallback)(Object(We.a)(He.a.mark((function n() {
                    var a;
                    return He.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0,
                                n.next = 3,
                                It(e, r, t);
                            case 3:
                                return a = n.sent,
                                n.abrupt("return", a);
                            case 7:
                                return n.prev = 7,
                                n.t0 = n.catch(0),
                                n.abrupt("return", !1);
                            case 10:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[0, 7]])
                }
                ))), [t, e, r])
            }
        }
          , wa = function(e) {
            var t = Object(p.h)().account
              , n = Ot();
            return {
                onStake: Object(a.useCallback)(function() {
                    var a = Object(We.a)(He.a.mark((function a(r) {
                        var i;
                        return He.a.wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    _t(kt(n), e, r, t);
                                case 2:
                                    i = a.sent,
                                    console.log(i);
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )));
                    return function(e) {
                        return a.apply(this, arguments)
                    }
                }(), [t, e, n])
            }
        }
          , ga = function(e) {
            var t = Object(a.useState)(new Ge.a(0))
              , n = Object(c.a)(t, 2)
              , r = n[0]
              , i = n[1]
              , u = Object(p.h)().account
              , o = Ot()
              , s = kt(o)
              , l = Qe()
              , d = Object(a.useCallback)(Object(We.a)(He.a.mark((function t() {
                var n;
                return He.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Nt(s, e, u);
                        case 2:
                            n = t.sent,
                            i(new Ge.a(n));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))), [u, e, o]);
            return Object(a.useEffect)((function() {
                u && o && d()
            }
            ), [u, e, i, l, o]),
            r
        }
          , Ea = function(e) {
            var t = Object(p.h)().account
              , n = Ot()
              , r = kt(n);
            return {
                onUnstake: Object(a.useCallback)(function() {
                    var n = Object(We.a)(He.a.mark((function n(a) {
                        var i;
                        return He.a.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    Ft(r, e, a, t);
                                case 2:
                                    i = n.sent,
                                    console.log(i);
                                case 4:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(), [t, e, n])
            }
        };
        function Oa() {
            var e = Object(d.a)(["\n  background: none;\n  border: 0;\n  color: ", ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);
            return Oa = function() {
                return e
            }
            ,
            e
        }
        function ja() {
            var e = Object(d.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: inset 4px 4px 8px ", ",\n    inset -6px -6px 12px ", ";\n  display: flex;\n  height: 72px;\n  padding: 0 ", "px;\n"]);
            return ja = function() {
                return e
            }
            ,
            e
        }
        var Ta = l.c.div(ja(), (function(e) {
            return e.theme.color.grey[200]
        }
        ), (function(e) {
            return e.theme.borderRadius
        }
        ), (function(e) {
            return e.theme.color.grey[300]
        }
        ), (function(e) {
            return e.theme.color.grey[100]
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ))
          , ka = l.c.input(Oa(), (function(e) {
            return e.theme.color.grey[600]
        }
        ))
          , Ca = function(e) {
            var t = e.endAdornment
              , n = e.onChange
              , a = e.placeholder
              , i = e.startAdornment
              , u = e.value;
            return r.a.createElement(Ta, null, !!i && i, r.a.createElement(ka, {
                placeholder: a,
                value: u,
                onChange: n
            }), !!t && t)
        };
        function Ma() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-weight: 700;\n"]);
            return Ma = function() {
                return e
            }
            ,
            e
        }
        function Sa() {
            var e = Object(d.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);
            return Sa = function() {
                return e
            }
            ,
            e
        }
        function Aa() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n"]);
            return Aa = function() {
                return e
            }
            ,
            e
        }
        function Ia() {
            var e = Object(d.a)(["\n  width: ", "px;\n"]);
            return Ia = function() {
                return e
            }
            ,
            e
        }
        function Pa() {
            var e = Object(d.a)(["\n\n"]);
            return Pa = function() {
                return e
            }
            ,
            e
        }
        var _a = l.c.div(Pa())
          , Fa = l.c.div(Ia(), (function(e) {
            return e.theme.spacing[3]
        }
        ))
          , Da = l.c.div(Aa())
          , Na = l.c.div(Sa(), (function(e) {
            return e.theme.color.grey[400]
        }
        ))
          , La = l.c.span(Ma(), (function(e) {
            return e.theme.color.grey[600]
        }
        ))
          , za = function(e) {
            var t = e.max
              , n = e.symbol
              , a = e.onChange
              , i = e.onSelectMax
              , u = e.value;
            return r.a.createElement(_a, null, r.a.createElement(Na, null, t.toLocaleString(), " ", n, " Available"), r.a.createElement(Ca, {
                endAdornment: r.a.createElement(Da, null, r.a.createElement(La, null, n), r.a.createElement(Fa, null), r.a.createElement("div", null, r.a.createElement(x, {
                    size: "sm",
                    text: "Max",
                    onClick: i
                }))),
                onChange: a,
                placeholder: "0",
                value: u
            }))
        }
          , Ba = function(e) {
            var t = e.max
              , n = e.onConfirm
              , i = e.onDismiss
              , u = e.tokenName
              , o = void 0 === u ? "" : u
              , s = Object(a.useState)("")
              , l = Object(c.a)(s, 2)
              , p = l[0]
              , d = l[1]
              , f = Object(a.useState)(!1)
              , m = Object(c.a)(f, 2)
              , y = m[0]
              , b = m[1]
              , h = Object(a.useMemo)((function() {
                return Bt(t)
            }
            ), [t])
              , v = Object(a.useCallback)((function(e) {
                d(e.currentTarget.value)
            }
            ), [d])
              , w = Object(a.useCallback)((function() {
                d(h)
            }
            ), [h, d]);
            return r.a.createElement(A, null, r.a.createElement(V, {
                text: "Deposit ".concat(o, " Tokens")
            }), r.a.createElement(za, {
                value: p,
                onSelectMax: w,
                onChange: v,
                max: h,
                symbol: o
            }), r.a.createElement(z, null, r.a.createElement(x, {
                text: "Cancel",
                variant: "secondary",
                onClick: i
            }), r.a.createElement(x, {
                disabled: y,
                text: y ? "Pending Confirmation" : "Confirm",
                onClick: Object(We.a)(He.a.mark((function e() {
                    return He.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return b(!0),
                                e.next = 3,
                                n(p);
                            case 3:
                                b(!1),
                                i();
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            })))
        }
          , Ra = function(e) {
            var t = e.onConfirm
              , n = e.onDismiss
              , i = e.max
              , u = e.tokenName
              , o = void 0 === u ? "" : u
              , s = Object(a.useState)("")
              , l = Object(c.a)(s, 2)
              , p = l[0]
              , d = l[1]
              , f = Object(a.useState)(!1)
              , m = Object(c.a)(f, 2)
              , y = m[0]
              , b = m[1]
              , h = Object(a.useMemo)((function() {
                return Bt(i)
            }
            ), [i])
              , v = Object(a.useCallback)((function(e) {
                d(e.currentTarget.value)
            }
            ), [d])
              , w = Object(a.useCallback)((function() {
                d(h)
            }
            ), [h, d]);
            return r.a.createElement(A, null, r.a.createElement(V, {
                text: "Withdraw ".concat(o)
            }), r.a.createElement(za, {
                onSelectMax: w,
                onChange: v,
                value: p,
                max: h,
                symbol: o
            }), r.a.createElement(z, null, r.a.createElement(x, {
                text: "Cancel",
                variant: "secondary",
                onClick: n
            }), r.a.createElement(x, {
                disabled: y,
                text: y ? "Pending Confirmation" : "Confirm",
                onClick: Object(We.a)(He.a.mark((function e() {
                    return He.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return b(!0),
                                e.next = 3,
                                t(p);
                            case 3:
                                b(!1),
                                n();
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            })))
        };
        function Ua() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]);
            return Ua = function() {
                return e
            }
            ,
            e
        }
        function Ha() {
            var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
            return Ha = function() {
                return e
            }
            ,
            e
        }
        function Wa() {
            var e = Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n  width: 100%;\n"]);
            return Wa = function() {
                return e
            }
            ,
            e
        }
        function Va() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
            return Va = function() {
                return e
            }
            ,
            e
        }
        var Ga = l.c.div(Va())
          , Ja = l.c.div(Wa(), (function(e) {
            return e.theme.spacing[6]
        }
        ))
          , Ya = l.c.div(Ha(), (function(e) {
            return e.theme.spacing[4]
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , Ka = l.c.div(Ua())
          , qa = function(e) {
            var t = e.lpContract
              , n = e.pid
              , i = e.tokenName
              , u = Object(a.useState)(!1)
              , o = Object(c.a)(u, 2)
              , s = o[0]
              , l = o[1]
              , p = va(t)
              , d = xa(t).onApprove
              , f = $e(t.options.address)
              , m = ga(n)
              , y = wa(n).onStake
              , b = Ea(n).onUnstake
              , h = we(r.a.createElement(Ba, {
                max: f,
                onConfirm: y,
                tokenName: i
            }))
              , v = Object(c.a)(h, 1)[0]
              , w = we(r.a.createElement(Ra, {
                max: m,
                onConfirm: b,
                tokenName: i
            }))
              , g = Object(c.a)(w, 1)[0]
              , O = Object(a.useCallback)(Object(We.a)(He.a.mark((function e() {
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            l(!0),
                            e.next = 4,
                            d();
                        case 4:
                            e.sent || l(!1),
                            e.next = 11;
                            break;
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(0),
                            console.log(e.t0);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 8]])
            }
            ))), [d, l]);
            return r.a.createElement(Ce, null, r.a.createElement(Ae, null, r.a.createElement(Ka, null, r.a.createElement(Ga, null, r.a.createElement(E, null, "\ud83d\udcfc"), r.a.createElement(Yt, {
                value: zt(m)
            }), r.a.createElement(Ht, {
                text: "".concat(i, " Tokens Staked")
            })), r.a.createElement(Ja, null, p.toNumber() ? r.a.createElement(r.a.Fragment, null, r.a.createElement(x, {
                disabled: m.eq(new Ge.a(0)),
                text: "Unstake",
                onClick: g
            }), r.a.createElement(Ya, null), r.a.createElement(ba, {
                disabled: m.gt(new Ge.a(0)),
                onClick: v
            }, r.a.createElement(ha, null))) : r.a.createElement(x, {
                disabled: s,
                onClick: O,
                text: "Approve ".concat(i)
            })))))
        };
        function Xa() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"]);
            return Xa = function() {
                return e
            }
            ,
            e
        }
        function Za() {
            var e = Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]);
            return Za = function() {
                return e
            }
            ,
            e
        }
        function Qa() {
            var e = Object(d.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]);
            return Qa = function() {
                return e
            }
            ,
            e
        }
        function $a() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);
            return $a = function() {
                return e
            }
            ,
            e
        }
        var er = l.c.div($a())
          , tr = l.c.div(Qa())
          , nr = l.c.div(Za())
          , ar = l.c.h3(Xa(), (function(e) {
            return e.theme.color.grey[400]
        }
        ))
          , rr = function() {
            var e = Object(s.f)().farmId
              , t = ea(e) || {
                pid: 0,
                lpToken: "",
                lpTokenAddress: "",
                tokenAddress: "",
                earnToken: "",
                name: "",
                icon: ""
            }
              , n = t.pid
              , i = t.lpToken
              , u = t.lpTokenAddress
              , c = (t.tokenAddress,
            t.earnToken)
              , o = (t.name,
            t.icon);
            Object(a.useEffect)((function() {
                window.scrollTo(0, 0)
            }
            ), []);
            var l = Ot()
              , d = Object(p.h)().ethereum
              , f = Object(a.useMemo)((function() {
                return qe(d, u)
            }
            ), [d, u])
              , m = (ta(kt(l)).onRedeem,
            Object(a.useMemo)((function() {
                return i.toUpperCase()
            }
            ), [i]))
              , y = Object(a.useMemo)((function() {
                return c.toUpperCase()
            }
            ), [c]);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement($n, {
                icon: o,
                subtitle: "Deposit ".concat(m, " Tokens and earn ").concat(y),
                title: ""
            }), r.a.createElement(er, null, r.a.createElement(tr, null, r.a.createElement(nr, null, r.a.createElement(pa, {
                pid: n
            })), r.a.createElement(_, null), r.a.createElement(nr, null, r.a.createElement(qa, {
                lpContract: f,
                pid: n,
                tokenName: i.toUpperCase()
            }))), r.a.createElement(_, {
                size: "lg"
            }), r.a.createElement(ar, null, "[Locking1] Withdrawal in less than 24hours deposit will be subject to a withdrawal penalty of 50 % of earned PIC"), r.a.createElement(ar, null, "[Locking2] Withdrawal in less than 2days deposit will be subject to a withdrawal penalty of 33 % of earned PIC"), r.a.createElement(ar, null, "[Locking3] Withdrawal in less than 3days deposit will be subject to a withdrawal penalty of 25 % of earned PIC"), r.a.createElement(ar, null, "[Locking4] Withdrawal in less than 4days deposit will be subject to a withdrawal penalty of 20 % of earned PIC"), r.a.createElement(ar, null, "[Locking5] Withdrawal in less than 7days deposit will be subject to a withdrawal penalty of 10 % of earned PIC"), r.a.createElement(ar, null, "[Notice] Non-PIC pool has 0.5% withdrawal fee"), r.a.createElement(ar, null, "Most part of code is from audited safe code. However, this project is experimental. Use at your own risk."), r.a.createElement(_, {
                size: "lg"
            })))
        }
          , ir = n(61);
        n(225);
        function ur() {
            var e = Object(d.a)(["\n  color: ", ";\n"]);
            return ur = function() {
                return e
            }
            ,
            e
        }
        function cr() {
            var e = Object(d.a)(["\n  font-size: 32px;\n  position: relative;\n  animation: 1s ", " infinite;\n"]);
            return cr = function() {
                return e
            }
            ,
            e
        }
        function or() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);
            return or = function() {
                return e
            }
            ,
            e
        }
        function sr() {
            var e = Object(d.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);
            return sr = function() {
                return e
            }
            ,
            e
        }
        var lr = Object(l.d)(sr())
          , pr = l.c.div(or())
          , dr = l.c.div(cr(), lr)
          , fr = l.c.div(ur(), (function(e) {
            return e.theme.color.grey[400]
        }
        ))
          , mr = function(e) {
            var t = e.text;
            return r.a.createElement(pr, null, r.a.createElement(E, null, r.a.createElement(dr, null, "\ud83d\udcf7")), !!t && r.a.createElement(fr, null, t))
        }
          , yr = function() {
            var e = Object(a.useState)([])
              , t = Object(c.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , i = Object(p.h)().account
              , u = Ot()
              , o = Ct(u)
              , s = kt(u)
              , l = function(e) {
                return e && e.contracts && e.contracts.weth
            }(u)
              , d = Qe()
              , f = Object(a.useCallback)(Object(We.a)(He.a.mark((function e() {
                var t, n, a, i;
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = 0,
                            e.next = 3,
                            Promise.all(o.map((function(e, n) {
                                var a = e.pid
                                  , r = e.lpContract
                                  , i = e.tokenContract;
                                return 0 === a && (t = n),
                                At(s, l, r, i, a)
                            }
                            )));
                        case 3:
                            n = e.sent,
                            a = n[t].tokenPriceInWeth,
                            i = n.map((function(e) {
                                return Object(jn.a)({}, e, {
                                    totalWethValue: e.totalWethValue.isZero() || e.totalWethValue.isNaN() ? e.tokenAmount.times(a) : e.totalWethValue
                                })
                            }
                            )),
                            r(i);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), [i, s, u]);
            return Object(a.useEffect)((function() {
                i && s && u && f()
            }
            ), [i, d, s, r, u]),
            n
        }
          , br = function() {
            return [Object(a.useContext)(gn).farms]
        }
          , hr = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return e.dividedBy(new Ge.a(10).pow(t)).toNumber()
        };
        function vr() {
            var e = Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-radius: 8px;\n  background: #fffdfa;\n  color: #aa9584;\n  width: 100%;\n  margin-top: 12px;\n  line-height: 32px;\n  font-size: 13px;\n  border: 1px solid #e6dcd5;\n  text-align: center;\n  padding: 0 12px;\n"]);
            return vr = function() {
                return e
            }
            ,
            e
        }
        function xr() {
            var e = Object(d.a)(["\n  color: ", ";\n"]);
            return xr = function() {
                return e
            }
            ,
            e
        }
        function wr() {
            var e = Object(d.a)(["\n  margin-top: ", "px;\n  text-align: center;\n"]);
            return wr = function() {
                return e
            }
            ,
            e
        }
        function gr() {
            var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
            return gr = function() {
                return e
            }
            ,
            e
        }
        function Er() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
            return Er = function() {
                return e
            }
            ,
            e
        }
        function Or() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-size: 24px;\n  font-weight: 700;\n  margin: ", "px 0 0;\n  padding: 0;\n"]);
            return Or = function() {
                return e
            }
            ,
            e
        }
        function jr() {
            var e = Object(d.a)(["\n  display: flex;\n  width: calc((1100px - ", "px * 2) / 3);\n  position: relative;\n"]);
            return jr = function() {
                return e
            }
            ,
            e
        }
        function Tr() {
            var e = Object(d.a)(["\n  display: flex;\n  margin-bottom: ", "px;\n  flex-flow: row wrap;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]);
            return Tr = function() {
                return e
            }
            ,
            e
        }
        function kr() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n"]);
            return kr = function() {
                return e
            }
            ,
            e
        }
        function Cr() {
            var e = Object(d.a)(["\n  width: 1100px;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);
            return Cr = function() {
                return e
            }
            ,
            e
        }
        function Mr() {
            var e = Object(d.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 0, 0, 1) 10%,\n    rgba(208, 10, 33, 1) 20%,\n    rgba(79, 5, 14, 1) 30%,\n    rgba(63, 5, 20, 1) 40%,\n    rgba(47, 15, 10, 1) 50%,\n    rgba(28, 5, 05, 1) 60%,\n    rgba(95, 20, 5, 1) 70%,\n    rgba(186, 15, 2, 1) 80%,\n    rgba(251, 7, 2, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: ", " 2s linear infinite;\n  border-radius: 12px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);
            return Mr = function() {
                return e
            }
            ,
            e
        }
        function Sr() {
            var e = Object(d.a)(["\n  \n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]);
            return Sr = function() {
                return e
            }
            ,
            e
        }
        var Ar = function(e) {
            var t = e.farm
              , n = Object(a.useState)(0)
              , i = Object(c.a)(n, 2)
              , u = (i[0],
            i[1],
            Object(a.useState)(0))
              , o = Object(c.a)(u, 2)
              , s = (o[0],
            o[1])
              , l = Object(p.h)().account
              , d = t.lpTokenAddress
              , f = Ot();
            Object(a.useEffect)((function() {
                function e() {
                    return (e = Object(We.a)(He.a.mark((function e() {
                        var t;
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!f) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    St(kt(f), d, l);
                                case 4:
                                    t = e.sent,
                                    s(hr(t));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                f && l && function() {
                    e.apply(this, arguments)
                }()
            }
            ), [f, d, l, s]);
            return r.a.createElement(Nr, null, "PIC" === t.tokenSymbol && r.a.createElement(Pr, null), "PIC2" === t.tokenSymbol && r.a.createElement(Pr, null), r.a.createElement(Ce, null, r.a.createElement(Ae, null, r.a.createElement(zr, null, r.a.createElement(E, null, t.icon), r.a.createElement(Lr, null, t.name), r.a.createElement(Rr, null, r.a.createElement(Ur, null, "Deposit ", t.lpToken.toUpperCase()), r.a.createElement(Ur, null, "Earn ", t.earnToken.toUpperCase())), r.a.createElement(_, null), r.a.createElement(x, {
                disabled: !1,
                text: "Shoooot",
                to: "/farms/".concat(t.id)
            }, !1), r.a.createElement(Hr, null, r.a.createElement("span", null, "PIC" === t.tokenSymbol && "85% of new PIC", "PIC2" === t.tokenSymbol && "9% of new PIC", "USDT" === t.tokenSymbol && "3% of new PIC", "USDC" === t.tokenSymbol && "3% of new PIC"), r.a.createElement("span", null, "APY"), r.a.createElement("span", null, t.apy ? "".concat(t.apy.times(new Ge.a(100)).toNumber().toLocaleString("en-US").slice(0, -1), "%") : "Loading ..."))))))
        }
          , Ir = Object(l.d)(Sr())
          , Pr = l.c.div(Mr(), Ir)
          , _r = l.c.div(Cr())
          , Fr = l.c.div(kr())
          , Dr = l.c.div(Tr(), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , Nr = l.c.div(jr(), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , Lr = l.c.h4(Or(), (function(e) {
            return e.theme.color.grey[600]
        }
        ), (function(e) {
            return e.theme.spacing[2]
        }
        ))
          , zr = l.c.div(Er())
          , Br = l.c.div(gr(), (function(e) {
            return e.theme.spacing[4]
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , Rr = l.c.div(wr(), (function(e) {
            return e.theme.spacing[2]
        }
        ))
          , Ur = l.c.div(xr(), (function(e) {
            return e.theme.color.grey[500]
        }
        ))
          , Hr = l.c.div(vr())
          , Wr = function() {
            var e = br()
              , t = Object(c.a)(e, 1)[0]
              , n = (Object(p.h)().account,
            yr())
              , a = t.findIndex((function(e) {
                return "PIC" === e.tokenSymbol
            }
            ))
              , i = 0 == a && n[a] ? n[a].tokenPriceInWeth : new Ge.a(0)
              , u = new Ge.a(2336e3)
              , o = new Ge.a(1)
              , s = t.reduce((function(e, t, a) {
                var r = Object(jn.a)({}, t, {}, n[a], {
                    apy: n[a] ? i.times(o).times(u).times(n[a].poolWeight).div(n[a].totalWethValue) : null
                })
                  , c = Object(ir.a)(e);
                return 3 === c[c.length - 1].length ? c.push([r]) : c[c.length - 1].push(r),
                c
            }
            ), [[]]);
            return r.a.createElement(_r, null, s[0].length ? s.map((function(e, t) {
                return r.a.createElement(Dr, {
                    key: t
                }, e.map((function(e, t) {
                    return r.a.createElement(r.a.Fragment, {
                        key: t
                    }, r.a.createElement(Ar, {
                        farm: e
                    }), (0 === t || 1 === t) && r.a.createElement(Br, null))
                }
                )))
            }
            )) : r.a.createElement(Fr, null, r.a.createElement(mr, {
                text: "Film shooooot ..."
            })))
        }
          , Vr = function() {
            var e = Object(s.g)().path
              , t = Object(p.h)().account
              , n = we(r.a.createElement(Re, null))
              , a = Object(c.a)(n, 1)[0];
            return r.a.createElement(s.c, null, r.a.createElement(Vn, null, t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(s.a, {
                exact: !0,
                path: e
            }, r.a.createElement($n, {
                icon: r.a.createElement("img", {
                    src: ce.a,
                    height: "120"
                }),
                subtitle: "PIC farming LIVE! Please clear cache if you didn't done it after launch date. [next halving coming soon]"
            }), r.a.createElement(Wr, null)), r.a.createElement(s.a, {
                path: "".concat(e, "/:farmId")
            }, r.a.createElement(rr, null))) : r.a.createElement("div", {
                style: {
                    alignItems: "center",
                    display: "flex",
                    flex: 1,
                    justifyContent: "center"
                }
            }, r.a.createElement(x, {
                onClick: a,
                text: "\ud83d\udd13 Unlock Wallet"
            }))))
        }
          , Gr = n(54)
          , Jr = function(e) {
            var t = e.size
              , n = void 0 === t ? 36 : t
              , a = e.v1;
            e.v2,
            e.v3;
            return r.a.createElement("span", {
                role: "img",
                style: {
                    fontSize: n,
                    filter: a ? "saturate(0.5)" : void 0
                }
            }, "\ud83d\udcf7")
        }
          , Yr = function() {
            var e = Object(a.useState)([])
              , t = Object(c.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , i = Object(p.h)().account
              , u = Ot()
              , o = Ct(u)
              , s = kt(u)
              , l = Qe()
              , d = Object(a.useCallback)(Object(We.a)(He.a.mark((function e() {
                var t;
                return He.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all(o.map((function(e) {
                                var t = e.pid;
                                return St(s, t, i)
                            }
                            )));
                        case 2:
                            t = e.sent,
                            r(t);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), [i, s, u]);
            return Object(a.useEffect)((function() {
                i && s && u && d()
            }
            ), [i, l, s, r, u]),
            n
        }
          , Kr = function(e) {
            var t = Object(a.useState)(new Ge.a(0))
              , n = Object(c.a)(t, 2)
              , r = n[0]
              , i = n[1]
              , u = Object(p.h)()
              , o = u.account
              , s = u.ethereum
              , l = Qe()
              , d = Object(a.useCallback)(Object(We.a)(He.a.mark((function t() {
                var n;
                return He.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Ze(s, e, "0xf5786c6cf0116f4886d8229f377536932d6b64f9");
                        case 2:
                            n = t.sent,
                            i(new Ge.a(n));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))), [o, s, e]);
            return Object(a.useEffect)((function() {
                o && s && d()
            }
            ), ["0xf5786c6cf0116f4886d8229f377536932d6b64f9", s, i, l, e]),
            r
        }
          , qr = function(e) {
            var t = Object(a.useState)(new Ge.a(0))
              , n = Object(c.a)(t, 2)
              , r = n[0]
              , i = n[1]
              , u = Object(p.h)()
              , o = u.account
              , s = u.ethereum
              , l = Qe()
              , d = Object(a.useCallback)(Object(We.a)(He.a.mark((function t() {
                var n;
                return He.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Ze(s, e, "0x17eFea3724a04A3b5A9827fF35Ffc3c1043A873F");
                        case 2:
                            n = t.sent,
                            i(new Ge.a(n));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))), [o, s, e]);
            return Object(a.useEffect)((function() {
                o && s && d()
            }
            ), ["0x17eFea3724a04A3b5A9827fF35Ffc3c1043A873F", s, i, l, e]),
            r
        };
        function Xr() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);
            return Xr = function() {
                return e
            }
            ,
            e
        }
        function Zr() {
            var e = Object(d.a)(["\n  display: flex;\n"]);
            return Zr = function() {
                return e
            }
            ,
            e
        }
        function Qr() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: stretch;\n  }\n"]);
            return Qr = function() {
                return e
            }
            ,
            e
        }
        function $r() {
            var e = Object(d.a)(["\n  font-family: 'Roboto Mono', monospace;\n  float: right;\n"]);
            return $r = function() {
                return e
            }
            ,
            e
        }
        function ei() {
            var e = Object(d.a)(["\n  font-size: 14px;\n  padding: 8px 20px;\n  color: ", ";\n  border-top: solid 1px ", ";\n"]);
            return ei = function() {
                return e
            }
            ,
            e
        }
        var ti = function() {
            var e, t = Object(a.useState)(0), n = Object(c.a)(t, 2), i = n[0], u = n[1], o = Object(a.useState)(0), s = Object(c.a)(o, 2), l = s[0], p = s[1], d = Object(a.useState)(1), f = Object(c.a)(d, 2), m = f[0], y = f[1], b = Yr(), h = 0, v = Object(Gr.a)(b);
            try {
                for (v.s(); !(e = v.n()).done; ) {
                    var x = e.value;
                    h += new Ge.a(x).div(new Ge.a(10).pow(18)).toNumber()
                }
            } catch (O) {
                v.e(O)
            } finally {
                v.f()
            }
            var w = br()
              , g = Object(c.a)(w, 1)[0]
              , E = yr();
            if (E && E.length)
                g.reduce((function(e, t, n) {
                    t.id;
                    return e + (E[n].totalWethValue.toNumber() || 0)
                }
                ), 0);
            return Object(a.useEffect)((function() {
                u(l),
                p(h)
            }
            ), [h]),
            r.a.createElement("span", {
                style: {
                    transform: "scale(".concat(m, ")"),
                    transformOrigin: "right bottom",
                    transition: "transform 0.5s",
                    display: "inline-block"
                }
            }, r.a.createElement(Vt.a, {
                start: i,
                end: l,
                decimals: l < 0 ? 4 : l > 1e5 ? 0 : 3,
                duration: 1,
                onStart: function() {
                    y(1.25),
                    setTimeout((function() {
                        return y(1)
                    }
                    ), 600)
                },
                separator: ","
            }))
        }
          , ni = l.c.div(ei(), (function(e) {
            return e.theme.color.grey[400]
        }
        ), (function(e) {
            return e.theme.color.grey[300]
        }
        ))
          , ai = l.c.div($r())
          , ri = l.c.div(Qr())
          , ii = l.c.div(Zr())
          , ui = l.c.div(Xr())
          , ci = function() {
            var e = Object(a.useState)()
              , t = Object(c.a)(e, 2)
              , n = t[0]
              , i = t[1]
              , u = Ot()
              , o = $e(Tt(u))
              , s = Kr(Tt(u))
              , l = qr(Tt(u))
              , d = ($e("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
            Object(p.h)())
              , f = d.account;
            d.ethereum;
            return Object(a.useEffect)((function() {
                function e() {
                    return (e = Object(We.a)(He.a.mark((function e() {
                        var t;
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Pt(u);
                                case 2:
                                    t = e.sent,
                                    i(t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                u && function() {
                    e.apply(this, arguments)
                }()
            }
            ), [u, i]),
            r.a.createElement(ri, null, r.a.createElement(Ce, null, r.a.createElement(Ae, null, r.a.createElement(ii, null, r.a.createElement(ui, null, r.a.createElement(Jr, null), r.a.createElement(_, null), r.a.createElement("div", {
                style: {
                    flex: 1
                }
            }, r.a.createElement(Ht, {
                text: "Your PIC Balance"
            }), r.a.createElement(Yt, {
                value: f ? zt(o) : "Locked"
            }))))), r.a.createElement(ni, null, "Pending harvest", r.a.createElement(ai, null, r.a.createElement(ti, null), " PIC"))), r.a.createElement(_, null), r.a.createElement(Ce, null, r.a.createElement(Ae, null, r.a.createElement(Ht, {
                text: "Total PIC Supply"
            }), r.a.createElement(Yt, {
                value: n ? zt(n.minus(s).minus(l)) : "Locked"
            })), r.a.createElement(ni, null, "New PIC per block", r.a.createElement(ai, null, "Only 0.25 PIC"))))
        };
        function oi() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);
            return oi = function() {
                return e
            }
            ,
            e
        }
        function si() {
            var e = Object(d.a)(["\n  display: flex;\n"]);
            return si = function() {
                return e
            }
            ,
            e
        }
        function li() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: stretch;\n  }\n"]);
            return li = function() {
                return e
            }
            ,
            e
        }
        function pi() {
            var e = Object(d.a)(["\n  font-family: 'Roboto Mono', monospace;\n  float: right;\n"]);
            return pi = function() {
                return e
            }
            ,
            e
        }
        function di() {
            var e = Object(d.a)(["\n  font-size: 14px;\n  padding: 8px 20px;\n  color: ", ";\n  border-top: solid 1px ", ";\n"]);
            return di = function() {
                return e
            }
            ,
            e
        }
        l.c.div(di(), (function(e) {
            return e.theme.color.grey[400]
        }
        ), (function(e) {
            return e.theme.color.grey[300]
        }
        )),
        l.c.div(pi());
        var fi = l.c.div(li())
          , mi = l.c.div(si())
          , yi = l.c.div(oi())
          , bi = function() {
            var e = Object(a.useState)()
              , t = Object(c.a)(e, 2)
              , n = (t[0],
            t[1])
              , i = Ot()
              , u = $e("0x825Add9F83C27bc52d8AF33C12755B6C7D70dE9f")
              , o = Object(p.h)()
              , s = o.account;
            o.ethereum;
            return Object(a.useEffect)((function() {
                function e() {
                    return (e = Object(We.a)(He.a.mark((function e() {
                        var t;
                        return He.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Pt(i);
                                case 2:
                                    t = e.sent,
                                    n(t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                i && function() {
                    e.apply(this, arguments)
                }()
            }
            ), [i, n]),
            r.a.createElement(fi, null, r.a.createElement(Ce, null, r.a.createElement(Ae, null, r.a.createElement(mi, null, r.a.createElement(yi, null, r.a.createElement(_, null), r.a.createElement("div", {
                style: {
                    flex: 1
                }
            }, r.a.createElement(Ht, {
                text: "Your picFEE Balance"
            }), r.a.createElement(Yt, {
                value: s ? zt(u) : "Locked"
            })))))), r.a.createElement(_, null), r.a.createElement(Ce, null, r.a.createElement(Ae, null, r.a.createElement(Ht, {
                text: "picFEE Generation rate"
            }), r.a.createElement(Yt, {
                value: "5%"
            }))))
        };
        function hi() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n\n  > b {\n    color: ", ";\n  }\n"]);
            return hi = function() {
                return e
            }
            ,
            e
        }
        var vi = l.c.h3(hi(), (function(e) {
            return e.theme.color.grey[500]
        }
        ), (function(e) {
            return e.theme.color.grey[600]
        }
        ))
          , xi = function() {
            return r.a.createElement(Vn, null, r.a.createElement($n, {
                icon: r.a.createElement("img", {
                    src: ce.a,
                    height: 120
                }),
                subtitle: "PIC.finance protocol is personal picture based NFT project, with sustainable yield-farming features."
            }), r.a.createElement(ie, null, r.a.createElement(ci, null), r.a.createElement(bi, null)), r.a.createElement(_, {
                size: "lg"
            }), r.a.createElement(vi, null, r.a.createElement("h2", null, "PIC.finace [PIC token]")), r.a.createElement(vi, null, r.a.createElement("h4", null, "Hard cap supply: 76,000 (approximately 30,000 left after buring mechanism)")), r.a.createElement(vi, null, "Zero presale, Zero team premine, 70% liquidity+lockup (700), 30% early 10 influencers (300)"), r.a.createElement(vi, null, "Yield-farming Stage1:: First 30,000 blocks (1PIC/block)"), r.a.createElement(vi, null, "Yield-farming Stage2:: Next 40,000 blocks (0.25PIC/block) [NOW!]"), r.a.createElement(vi, null, "Yield-farming Stage3:: Next 100,000 blocks (0.1PIC/block)"), r.a.createElement(vi, null, "Yield-farming Stage4:: Halving every 100,000 blocks"), r.a.createElement(vi, null, "\ud83d\udcf7"), r.a.createElement(vi, null, "[RULE1] Every time you transfer, trade PIC, some amount of PIC is burned, and the same amount of picFEE is given to you. picFEE is currently useless. but will use in farming in the next stage, and picFEE is our base currency in NTF dApp"), r.a.createElement(vi, null, "[RULE2] NFT dApp: make NFT based on your own picture, and you can sell, trade, etc. All transactions will be done through picFEE there."), r.a.createElement(vi, null, "[RULE3] Charged fee from picFEE-based trade on dApp will be distributed to PIC holders. Therefore, PIC is deflationary, and PIC holders can profit long after the platform is on LIVE."), r.a.createElement(vi, null, "[Deflanationary feature of PIC] Unlike usual clone sushi, it will find equilibrium in 2-3 weeks. When the burning rate goes over the emission rate, supply in the market is limited and if there is an economic return for each PIC from the dApp, then see what happens there!"), r.a.createElement(vi, null, "$PIC.finance has two token burning mechanism to overcome over emission problem in yield-farming. [1] Transaction-based burning. PIC token burned at a specific rate, generate the same amount of picFEE. [2] Reward-farming duration-based burning. Farm, in a longer stance, gets more reward."), r.a.createElement(vi, null, "\ud83d\udcf7"), r.a.createElement(vi, null, r.a.createElement("h2", null, "[picFEE token]")), r.a.createElement(vi, null, r.a.createElement("h4", null, "Fee Generated for every PIC transaction. The current burning rate is 5% of each transaction.")), r.a.createElement(_, {
                size: "lg"
            }), r.a.createElement("div", {
                style: {
                    margin: "0 auto"
                }
            }, r.a.createElement(x, {
                text: "\ud83d\udcfc Go To PhotoStudio",
                to: "/farms",
                variant: "secondary"
            })))
        };
        function wi() {
            var e = Object(d.a)(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"]);
            return wi = function() {
                return e
            }
            ,
            e
        }
        function gi() {
            var e = Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]);
            return gi = function() {
                return e
            }
            ,
            e
        }
        function Ei() {
            var e = Object(d.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]);
            return Ei = function() {
                return e
            }
            ,
            e
        }
        function Oi() {
            var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);
            return Oi = function() {
                return e
            }
            ,
            e
        }
        l.c.div(Oi()),
        l.c.div(Ei()),
        l.c.div(gi()),
        l.c.h3(wi(), (function(e) {
            return e.theme.color.grey[400]
        }
        ));
        var ji = function() {
            var e = Object(p.h)().account
              , t = we(r.a.createElement(Re, null))
              , n = Object(c.a)(t, 1)[0];
            Object(a.useEffect)((function() {
                window.scrollTo(0, 0)
            }
            ), []);
            Ot(),
            Object(p.h)().ethereum;
            return r.a.createElement(Vn, null, e ? r.a.createElement(r.a.Fragment, null, r.a.createElement($n, {
                icon: r.a.createElement("img", {
                    src: ce.a,
                    height: "120"
                }),
                title: "Stake Sushi Tokens & Earn Fees",
                subtitle: "0.05% of all SushiSwap trades are rewarded to SUSHI stakers"
            }), r.a.createElement("div", null, "TBD")) : r.a.createElement("div", {
                style: {
                    alignItems: "center",
                    display: "flex",
                    flex: 1,
                    justifyContent: "center"
                }
            }, r.a.createElement(x, {
                onClick: n,
                text: "\ud83d\udd13 Unlock Wallet"
            })))
        }
          , Ti = function(e) {
            var t = e.children;
            return r.a.createElement(l.b, {
                theme: Sn
            }, r.a.createElement(p.a, {
                chainId: 1,
                connectors: {
                    walletconnect: {
                        rpcUrl: "https://mainnet.eth.aragon.network/"
                    }
                }
            }, r.a.createElement(Et, null, r.a.createElement(Mn, null, r.a.createElement(En, null, r.a.createElement(xe, null, t))))))
        }
          , ki = function() {
            var e = Object(a.useCallback)((function() {
                localStorage.setItem("disclaimer", "seen")
            }
            ), [])
              , t = we(r.a.createElement(G, {
                onConfirm: e
            }));
            Object(c.a)(t, 1)[0];
            return Object(a.useEffect)((function() {}
            ), []),
            r.a.createElement("div", null)
        }
          , Ci = function() {
            var e = Object(a.useState)(!1)
              , t = Object(c.a)(e, 2)
              , n = t[0]
              , i = t[1]
              , u = Object(a.useCallback)((function() {
                i(!1)
            }
            ), [i])
              , l = Object(a.useCallback)((function() {
                i(!0)
            }
            ), [i]);
            return r.a.createElement(Ti, null, r.a.createElement(o.a, null, r.a.createElement(wn, {
                onPresentMobileMenu: l
            }), r.a.createElement(ne, {
                onDismiss: u,
                visible: n
            }), r.a.createElement(s.c, null, r.a.createElement(s.a, {
                path: "/",
                exact: !0
            }, r.a.createElement(xi, null)), r.a.createElement(s.a, {
                path: "/farms"
            }, r.a.createElement(Vr, null)), r.a.createElement(s.a, {
                path: "/staking"
            }, r.a.createElement(ji, null)))), r.a.createElement(ki, null))
        };
        n(507);
        u.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(Ci, null)), document.getElementById("root"))
    }
}, [[231, 2, 3]]]);
