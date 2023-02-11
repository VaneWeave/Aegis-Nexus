// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

contract AegisNexus 
{
    address public owner;

    struct Doctor
    {
        uint regNum;
        string regState;
    }

    modifier onlyOwner() {
        if (msg.sender != owner) {
        revert("Caller is not the owner"); }_; }

    constructor() 
    {
        owner = msg.sender; 
    }

}
