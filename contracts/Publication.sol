// SPDX-License-Identifier: GNU AGPLv3 
pragma solidity ^0.8.0;
// TODO: make it so that there are separate contracts- one for each paper and one that keeps track of papers 
contract Publication {
    struct Paper {
        string[] authors;
        string institution;
        address[] citations;
        address[] citedBy;
        string category;
    }
   
    Paper public paper;
    address[] public citedBy;
    constructor(string[] memory _authors, string memory _institution, address[] memory _citations, address[] memory _citedBy, string memory _category) {
        paper = Paper({authors: _authors, institution: _institution, citations: _citations, citedBy: _citedBy, category: _category});
        citedBy = _citedBy;
    }

    function updateCitedBy(address citingPaper) public {
        paper.citedBy.push(citingPaper);
    }

    // make a function that handles if papers cite eachother -> update citation list
    function cite(address _paper) public {
        Publication paperCited = Publication(_paper); // gets the paper specified by address
        paperCited.updateCitedBy(msg.sender);
    }

     // testing purposes
    function revealData() public view returns(address[] memory)  {
        return paper.citedBy;
    }
}