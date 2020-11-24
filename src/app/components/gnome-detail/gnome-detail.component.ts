import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GnomeService } from 'src/app/service/gnome.service';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.scss']
})
export class GnomeDetailComponent implements OnInit {

  gnome;

  constructor(
    private http: GnomeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getGnomeDetails();
  }

  getGnomeDetails() {
    this.activatedRoute.params.subscribe(async params => {
      const gnomeId = parseInt(params.id)
      try {
        const gnomes = await this.http.getJSON();
        this.gnome = gnomes.Brastlewark.find(gnome => gnome.id === gnomeId);
      } catch (error) {
        throw error
      }
    })
  }

}
