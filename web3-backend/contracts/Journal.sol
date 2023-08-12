// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Journal {
    // Journal will be deployed once and then can be called to create Paper contracts + keep track of existing papers

    address[] papers;
    address owner;

    constructor() {
        owner = msg.sender; // sets owner of journal
    }
}
