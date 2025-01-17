// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenCreator {
    event TokenCreated(address indexed tokenAddress, string name, string symbol, uint256 initialSupply);

    function createToken(string memory name, string memory symbol) public returns (address) {
        ERC20Token newToken = new ERC20Token(name, symbol, 1000000 * 10 ** 18, msg.sender);
        emit TokenCreated(address(newToken), name, symbol, 1000000 * 10 ** 18);
        return address(newToken);
    }
}

contract ERC20Token is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner
    ) ERC20(name, symbol) {
        _mint(owner, initialSupply);
    }
}
