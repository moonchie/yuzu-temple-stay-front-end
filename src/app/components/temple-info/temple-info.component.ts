import { Component, OnInit } from '@angular/core';
import { TempleService, Temple } from '../../temple.service';

@Component({
  selector: 'section-temple-info',
  templateUrl: './temple-info.component.html',
  styleUrls: ['./temple-info.component.css']
})
export class TempleInfoComponent implements OnInit {
  // import Temple service here
  temples: Array<Temple> = [];

  constructor(private yuzuTempleService: TempleService) { }

  ngOnInit() {
    this.fetchTemples()
  }

  fetchTemples() {
    this.yuzuTempleService.getList()
      .then((response: Array<Temple>) => {
        this.temples = response;
      })
      .catch((err) => {
        alert("There is so;ething wrong we cant get the list of our temples");
        console.log(err)
      })
  }
}
