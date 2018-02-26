# Ionic 3 Google Map
An example Ionic app containing a google map component with on-line and off-line connectivity listener.  Works for both Ionic 2 and 3.

## Setup
Clone the repository, run `npm install` to setup the dependencies and add the geolocation plugin.

``` shell
$ git clone 'https://github.com/dandouglas/ionic3-google-map.git'

$ cd ionic3-google-map

$ npm install

$ ionic cordova plugin add cordova-plugin-geolocation

```
Update gmap.ts with your google map api key.

```
 apiKey: string = 'YOUR_API_KEY_HERE';
 ```

Run the app
``` shell
$ ionic serve
```
