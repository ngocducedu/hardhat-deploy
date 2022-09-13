// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Token is Initializable {
    address payable private _owner;
    string greeting;

    function initialize(string memory _greeting) public initializer {
        _owner = payable(msg.sender);
        greeting = _greeting;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    function setGreeting2(string memory _greeting)
        public
        returns (string memory)
    {
        return greeting = _greeting;
    }

    function getGreeting2() public view returns (string memory) {
        return greeting;
    }
}
