export interface AppConfig {
  debug: boolean;
  production: boolean;
  externalUrl: string;
  baseUrl: string;
  rpcChainId: string;
  defaultAsset: string;
  rpcUrlBinance: string;
  chainIdNumber: number;
  chainIdHex: string;
  networkId: string;
  metamaskDeepLink: string;
  chainApiUrl: string;
  proxyContractAddress: string;
  pieceIssuerProxyContractAddress: string;
  pinataJWT: string;
  operator: string;
}
