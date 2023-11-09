//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol"

countract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;     

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 listingPrice = 0.025 ether 

    address payable owner;

    mapping(uint256 =>MarketItem) private idToMarketItem; 

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        addres payable owner;
        uint256 price;
        bool sold;

    }

    event MarketItemCreated(
           uint256 indexed tokenId,
        address  seller,
        address   owner,
        uint256 price,
        bool sold,


    );

    constructor(){
owner = payable (msg.sender);

    }
    function updateListingPrice(uint_listingPrice) public payable {
         require (owner ==msg.sender , "Only Marketplace Owner Can Update The Listing Price");

            listingPrice = _listingPrice;

    }
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }
    

}


