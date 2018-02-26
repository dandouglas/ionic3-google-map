# Ionic 3 Google Map
An example Ionic app containing a google map component with on-line and off-line connectivity listener.  Works for both Ionic 2 and 3.

## Setup
Clone the repository, add the geolocation plugin and install the ionic native geolocation and network providers.

``` shell
$ git clone 'https://github.com/dandouglas/ionic3-google-map.git'

$ cd ionic3-google-map

$ npm install

$ ionic cordova plugin add cordova-plugin-geolocation

$ npm install --save @ionic-native/geolocation

$ npm install --save @ionic-native/network
```
Update gmap.ts with your google map api key.

```
 apiKey: string = 'YOUR_API_KEY_HERE';
 ```

Run the app
```
$ ionic serve
```
