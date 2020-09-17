import { Component, OnInit } from '@angular/core';
import { OtakuService } from 'src/app/services/otaku.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {
  arrayMangas: any[];

  constructor(private otakuService: OtakuService) { }

  ngOnInit() {
    this.arrayMangas = this.otakuService.get//tengo pendiente crear los metodos para mangas

  }

}
