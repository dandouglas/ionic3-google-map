import { Component, ElementRef, ViewChild } from '@angular/core';
import { Network } from "@ionic-native/network";
import { Geolocation } from '@ionic-native/Geolocation';
import { Subscription } from 'rxjs/Subscription';

declare var google;

@Component({
  selector: 'gmap',
  templateUrl: 'gmap.html',
})
export class Gmap {

  @ViewChild('map') mapElement: ElementRef;

  private map: Object;
  private apiKey: string = 'YOUR_API_KEY_HERE';
  private connectionStatus: string = networkStatus.online;
  private connected: Subscription;
  private disconnected: Subscription;
  private showMap: boolean = false;

  constructor(private network: Network) { }

  ngOnInit() {
    this.connected = this.network.onConnect().subscribe(
      data => {
        this.connectionStatus = data.type;
        this.loadGoogleMaps();
      },
      error => console.error('Network error: %o', error));

    this.disconnected = this.network.onDisconnect().subscribe(
      data => {
        this.connectionStatus = data.type;
        this.showMap = false;
      },
      error => console.error('Network error: %o', error));

    this.loadGoogleMaps();

  }

  ngOnDestroy() {
    this.connected.unsubscribe();
    this.disconnected.unsubscribe();
  }

  loadGoogleMaps() {
    if (typeof google == 'undefined' || typeof google.maps == 'undefined') {

      this.showMap = false;

      if (this.connectionStatus === networkStatus.online) {

        //Load the Google Maps SDK
        window['mapInit'] = () => {
          this.initMap();
          this.showMap = true;
        }

        const script = document.createElement('script');
        script.id = 'googleMaps';
        script.src = this.apiKey ? `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places&callback=mapInit` : 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
        document.body.appendChild(script);
        this.showMap = true;
      }
    }
    else {
      if (this.connectionStatus === networkStatus.online) {
        this.initMap();
        this.showMap = true;
      }
      else {
        this.showMap = false;
      }
    }
  }

  initMap() {
    Geolocation.prototype.getCurrentPosition().then(
      (position) => {
        const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        const mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      },
      (error) => {
        console.error('Geolocation error, %o', error);
      });
  }
}

const networkStatus = {
  online: 'online'
}