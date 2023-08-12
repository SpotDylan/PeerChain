// SPDX-License-Identifier: GNU AGPLv3
pragma solidity ^0.8.0;

contract PaperContract {
    string[] public authors;
    string public institution;
    address[] public citations;
    address[] public citedBy;
    string public category;

    constructor(
        string[] memory _authors,
        string memory _institution,
        address[] memory _citations,
        address[] memory _citedBy,
        string memory _category
    ) {
        authors = _authors;
        institution = _institution;
        citations = _citations;
        citedBy = _citedBy;
        category = _category;
    }

    function updateCitedBy(address citingPaper) public returns (bool) {
        citedBy.push(citingPaper);
        return true;
    }

    function cite(address _paper) public {
        require(_paper != address(this), "You can't cite yourself.");
        // TODO: require that citation doesn't already exist
        PaperContract paperCited = PaperContract(_paper); // gets the paper specified by address
        require(
            paperCited.updateCitedBy(address(this)),
            "Could not access that paper!"
        );
        citations.push(_paper); // Update this paper's citation list to reflect that it cited new one
    }
}
