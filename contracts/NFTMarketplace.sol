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
        address payable owner;
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
    
function createToken(string memory tokenURI , uint256 price) public payable returns (uint){
    _tokenIds.increment();

    uint newTokenId=_tokenIds.current();


    _mint(msg.sender , newTokenId);
    _setTokenURI(newTokenId , _tokenURI);
    createMarketItem(newTokenId , price);

    return newTokenId;
}
// Create Market Item
    function createMarketItem(uint256 tokenId , uint256 price) private {
            require(price>0 , "Price Must Be Atleast One")
            require(msg.value==listingPrice ,  , "Price Must Be Equal To Listing Price")
        idToMarketItem [tokenId] = MarketItem(
            tokenId , 
            payable(msg.sender),
            payable(adress(this)),
            price,
            false,

        );
        _transfer( msg.sender , address(this) , tokenId);

        emit MarketItemCreated(tokenId , msg.sender , adress(this) , price , false);

    }
        function resellToken(uint256 tokenId , uint256 price) public payable {

            require(idToMarketItem[tokenId].owner==msg.sender ,"Only Item Owner Can Perform This Operation" );
            require(msg.value ==listingPrice , "Price Must Be Equal To Listing Price");
            idToMarketItem[tokenId].sold = false;
            idToMarketItem[tokenId].price = price;
            idToMarketItem[tokenId].seller = payable(msg.sencer);
            idToMarketItem[tokenId].owner = payable(address(this));
            _itemsSold.decrement();
            _transfer(msg.sender , address(this),tokenId);

        }
        function createMarketSale(uint256 tokenId) public payable {
                uint pruce = idToMarketItem[tokenId].price;
                require(msg.value==price , "Please Submit The Asking Price In Order To Complete The Purchase");

                idToMarketItem[tokenId].owner = payable(msg.seller);                
                idToMarketItem[tokenId].sold = ture;                
                idToMarketItem[tokenId].seller =payable(address(0));
                _itemsSold.increment();
                _transfer(address(this),msg.sender , tokenId);
                payable(owner).trasfer(listingPrice);

                payable(idToMarketItem[tokenId].seller).transfer(msg.value);                

        }


}



