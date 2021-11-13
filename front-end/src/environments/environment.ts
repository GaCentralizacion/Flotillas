// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  notificationURL: 'http://192.168.20.123:5007/api/',
  utl: 'http://localhost:5100/api/v1/',
  login: 'http://192.168.20.123:4901',
  And_Prod: 'http://192.168.20.89:4030',
  And_Doc: 'http://192.168.20.89:4060/?employee=',
  And_Dig: 'http://192.168.20.123:3200/?employee='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
