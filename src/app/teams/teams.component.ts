import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],

})
export class TeamsComponent implements OnInit {

  public teams = [
    {"name":"Mumbai Indians"},
    {"name":"Chennai Super Kings"},
    {"name":"Royal Challengers Bangalore"},
    {"name":"Kolkata Knight Riders "},
    {"name":"Sunrisers Hyderbad"},
    {"name":"Punjab Kings"},
    {"name":"Rajasthan Royals"},
    {"name":"Lucknow Super Gaints"},
    {"name":"Delhi Capitals"},
    {"name":"Gujarat Titans"}
  
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
