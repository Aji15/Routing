import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],

})
export class TeamsComponent implements OnInit {

  public team_name = [
    "Mumbai Indians",
    "Chennai Super Kings",
    "Royals Challenger Bangalore",
    "Kolkata Knight Riders ",
    "Sunrisers Hyderbad",
    "Punjab Kings",
    "Rajasthan Royals",
    "Lucknow Super Gaints",
    "Gujarat Titans"
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
