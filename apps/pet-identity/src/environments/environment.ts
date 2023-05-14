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
  proxyContractAddress: '0x38F5fAC5d967a9DE4Fe17eBE1c0F4Ca5A22480Ab',
  pieceIssuerProxyContractAddress: '0xe0CCF0D85B8427dAf1Cef290dFC1F1e3CD2B0E4c',
  pinataJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0NTRlMTBjZi01NDhkLTRiOGUtYTcyZi01ZmZiZjRhZDkzYTIiLCJlbWFpbCI6ImNoYWJhc2luc2tpLnByemVteXNsYXdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjU1MDQ4OTYzMmVhYWQ4ZDkzMzhiIiwic2NvcGVkS2V5U2VjcmV0IjoiM2UwMjQwZTlmZTI1NjJlOWJmYWI2NWI0MDk4NTM2NTc1MzQ1YmM0NGEwMTM5MTIwMjdjZTU0MGEzMjhhNjg1ZSIsImlhdCI6MTY4MjA3NTAzM30.cHtzWEfhCZpeIbOhFf-t1f8qTBl0KWse1h16T4k9OkQ',
  operator: '0xd20A336057A940BCae44554B1B5CbC2C716bED5d'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
