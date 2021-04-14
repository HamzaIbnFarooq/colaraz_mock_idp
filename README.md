### Description

This is a mock identity provider (IdP) used for local development of colaraz platform.


### Installation

* Clone this repo
```sh
git clone git@github.com:HamzaIbnFarooq/colaraz_mock_idp.git
```

* Install packages in it
```sh
cd colaraz_mock_idp
npm install
```

* Run IdP through nodemon (the default port is set to 3000)
```sh
nodemon idp.js
```

After running the application, go to http://localhost:3000 to check if the server is running or not.


### Integration with Open edX

* Create a `OAuth2 Provider Configuration` through admin panel of edX (at `/admin/third_party_auth/oauth2providerconfig/`).
* Set backend-name and slug to `colarazIdentityServer`.
* Set any random value to `Client-Id` and `Client-Secret`.
* Get `ip-address` of your machine which is running `colaraz-mock-idp`, you should be able to acess the server using that ip (e.g: `http://YOUR-MACHINE-IP:3000`).
* In `OAuth2 Provider Configuration` add the following values to `Other Settings` field:
```
{
    "token_url": "http://YOUR-MACHINE-IP:3000/connect/token",
    "auth_url": "http://YOUR-MACHINE-IP:3000/connect/authorize",
    "user_info_url": "http://YOUR-MACHINE-IP:3000/UserInformationApi"
}
```
* Now save the `OAuth2 Provider Configuration`.
* Set the following variables in your edX environment:
```
ENABLE_THIRD_PARTY_AUTH = True
COLARAZ_ENABLE_AUTH_MIDDLEWARE = True
COLARAZ_AUTH_PROVIDER_BACKEND_NAME = "colarazIdentityServer"
COLARAZ_APP_LINKS_API_URL = "http://YOUR-MACHINE-IP:3000/COLARAZ_APP_LINKS_API"
```
* Go `idp.js` file of `colaraz-mock-idp` and change the user information according to your need under `/UserInformationApi` route.
* As a final test, open the following urls in your browser to check if the IdP is functioning properly or not:
```
"http://YOUR-MACHINE-IP:3000/connect/token"
"http://YOUR-MACHINE-IP:3000/connect/authorize"
"http://YOUR-MACHINE-IP:3000/UserInformationApi"
```
* Now try logging into edX platform, you will be redirected to IdP and then automatically registered and logged-in.


### If the ip-address doesn't work
In some cases the machine's ip-address might not connect to IdP as expected, and you will not be able to access the IdP urls through ip-address. In that case you need to look into `ngrok` and other services like these to serve your server and chagne the urls throughout the integration process accordingly.
