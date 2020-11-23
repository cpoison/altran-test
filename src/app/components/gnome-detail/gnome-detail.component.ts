import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.scss']
})
export class GnomeDetailComponent implements OnInit {

  gnome;

  constructor(
    private httpService: HttpClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getGnomeDetails();
  }

  getGnomeDetails() {
    this.activatedRoute.params.subscribe(async params => {
      const gnomeId = parseInt(params.id)
      try {
        const gnomes = await this.httpService.getGnomes();
        this.gnome = gnomes.Brastlewark.find(gnome => gnome.id === gnomeId);
        // console.log("hola", this.gnome);
      } catch (error) {
        throw error
      }
    })
  }

}
