import { Component, OnInit } from '@angular/core';
import { TempleService } from '../../temple.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'suggestion-div',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  constructor(
    private myTempleService: TempleService,
    private myAuthService: AuthService,
  ) { }

  ngOnInit() {

  }

}
