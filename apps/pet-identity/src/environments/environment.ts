// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// **** IMPORTANT - After you add another property please add this also in AppConfig interface ***
export const environment = {
  debug: true,
  production: false,
  externalUrl: 'http://localhost:4200/',
  baseUrl: '',
  //rpcUrl: "http://localhost:8545/",
  rpcChainId: '0x539',
  rpcUrlBinance: 'https://data-seed-prebsc-2-s3.binance.org:8545',
  chainIdNumber: 97, //Binance Smart Chain
  chainIdHex: '0x61', //Binance Smart Chain
  networkId: '', //Binance Smart Chain
  metamaskDeepLink:'',
  chainApiUrl: 'https://api-testnet.bscscan.com/api',
  petNftContractAddress: '0x2d8f5dd22a5ba26a8713ebf01e086e56984bdbea'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
