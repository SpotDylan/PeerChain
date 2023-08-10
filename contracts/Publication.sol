// SPDX-License-Identifier: GNU AGPLv3 
pragma solidity ^0.8.0;

contract Publication {
    struct Paper {
        string[] authors;
        string institution;
        address[] citations;
        address[] cited_by;
    }
   
    Paper paper;
    constructor(string[] memory _authors, string memory _institution, address[] memory _citations, address[] memory _cited_by) {
        paper = Paper({authors: _authors, institution: _institution, citations: _citations, cited_by: _cited_by});
    }

    // make a function that handles if papers cite eachother -> update citation list
    function cites() internal {}
}