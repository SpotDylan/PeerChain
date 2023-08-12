// SPDX-License-Identifier: GNU AGPLv3 
pragma solidity ^0.8.0;
// TODO: make it so that there are separate contracts- one for each paper and one that keeps track of papers 

import './Paper.sol';

contract Publications {
    PaperContract[] public papers;

    function createPaper(string[] memory _authors, string memory _institution, address[] memory _citations, address[] memory _citedBy, string memory _category) public {
        PaperContract paper = new PaperContract(_authors, _institution, _citations, _citedBy, _category);
        papers.push(paper);
    }

    // make a function that handles if papers cite eachother -> update citation list
    function cite(address _paper) public {
        PaperContract paperCited = PaperContract(_paper); // gets the paper specified by address
        paperCited.updateCitedBy(msg.sender);
    }

}