import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { 
    
  }  

  ngOnInit() {
    this.initMap();
  }

  // Initialize and add the map
  initMap() {
    // The location of Uluru
    var uluru = {lat: 18.510850, lng: -69.849097};
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

}
