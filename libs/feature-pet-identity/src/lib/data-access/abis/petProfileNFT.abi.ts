export const petProfileNFTAbi = {
    "network": "bsc_testnet",
    "contract": {
      "address": "0x15FB2DD14694a3A04061f8B525Cda92F626419B1",
      "signerAddress": "0x8C42A81Aa4C05212668b3064D7bd8b8e52Cf3b06",
      "abi": [
        "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
        "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
        "event Initialize(address indexed owner, address indexed backendService, string name, string symbol)",
        "event Initialized(uint8 version)",
        "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
        "event Paused(address account)",
        "event PetProfileCreated(address indexed owner, uint256 indexed petProfileId, string indexed chipId, string name, string metadataURI)",
        "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
        "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
        "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
        "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
        "event Unpaused(address account)",
        "function BACKEND_ROLE() view returns (bytes32)",
        "function DEFAULT_ADMIN_ROLE() view returns (bytes32)",
        "function approve(address, uint256) pure",
        "function balanceOf(address owner) view returns (uint256)",
        "function burn(uint256 tokenId)",
        "function changeService(address backendService)",
        "function createPetProfile(tuple(string name, string chipId, string metadataUri) data) returns (uint256)",
        "function getApproved(uint256 tokenId) view returns (address)",
        "function getOwnedPetProfiles(address owner) view returns (uint256[])",
        "function getProfileIdByChipId(string chipId) view returns (uint256)",
        "function getProfileIdByName(string name) view returns (uint256)",
        "function getRoleAdmin(bytes32 role) view returns (bytes32)",
        "function grantRole(bytes32 role, address account)",
        "function hasRole(bytes32 role, address account) view returns (bool)",
        "function initialize(address owner, address service, string name, string symbol)",
        "function isApprovedForAll(address owner, address operator) view returns (bool)",
        "function name() view returns (string)",
        "function owner() view returns (address)",
        "function ownerOf(uint256 tokenId) view returns (address)",
        "function pause(bool toPause)",
        "function paused() view returns (bool)",
        "function renounceOwnership()",
        "function renounceRole(bytes32 role, address account)",
        "function revokeRole(bytes32 role, address account)",
        "function safeTransferFrom(address, address, uint256) pure",
        "function safeTransferFrom(address, address, uint256, bytes) pure",
        "function setApprovalForAll(address, bool) pure",
        "function supportsInterface(bytes4 interfaceId) view returns (bool)",
        "function symbol() view returns (string)",
        "function tokenURI(uint256 tokenId) view returns (string)",
        "function totalBurned() view returns (uint256)",
        "function totalMinted() view returns (uint256)",
        "function totalSupply() view returns (uint256)",
        "function transferFrom(address, address, uint256) pure",
        "function transferOwnership(address newOwner)",
        "function updatePetProfileMetadata(uint256 profileId, address owner, string metadataURI)"
      ]
    }
  }