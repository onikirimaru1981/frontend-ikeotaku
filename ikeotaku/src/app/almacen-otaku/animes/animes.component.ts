import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { OtakuService } from 'src/app/services/otaku.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  arrayAnimes: any[];

  constructor(private otakuService: OtakuService) { }

  async ngOnInit() {
    this.arrayAnimes = await this.otakuService.getAllAnimes();

    console.log(this.arrayAnimes);
  }

}
