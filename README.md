# Ionic 3 Google Map
A google map component for Ionic 2/3 with on-line and off-line connectivity listener

## Setup
Clone the repository, add the geolocation plugin and install the ionic native geolocation and network providers.

``` shell
$ git clone 'https://github.com/dandouglas/ionic3-google-map.git'

$ ionic plugin add cordova-plugin-geolocation

$ npm install --save @ionic-native/geolocation

$ npm install --save @ionic-native/network
```
Update gmap.ts with your google map api key.

```
 apiKey: string = 'YOUR_API_KEY_HERE';
 ```
