import { Component, OnInit } from '@angular/core';
import { GnomeService } from 'src/app/service/gnome.service';



@Component({
  selector: 'app-gnome-list',
  templateUrl: './gnome-list.component.html',
  styleUrls: ['./gnome-list.component.scss']
})
export class GnomeListComponent implements OnInit {
  currentPage: number = 1;
  itemsPerPage: number = 10;
  gnomes: any[] = [];
  professions: any[] = [];
  selectedProfession: string;
  gnomesFiltered: any[] = [];
  constructor(private gnomeService: GnomeService) {
  }

  ngOnInit(): void {
    this.getGnomesList();
  }

  getGnomesList() {
    this.gnomeService.getJSON().then(response => {
      this.gnomes = response.Brastlewark;
      this.gnomesFiltered = this.gnomes;
      this.getProfessions();
    }).catch(error => { throw error });
  }

  numberOfPages() {
    return Math.ceil(this.gnomesFiltered.length / this.itemsPerPage);
  }

  getProfessions() {
    this.gnomes.map(gnome => {
      gnome.professions.forEach(profession => {
        if (!this.professions.includes(profession)) {
          this.professions.push(profession);
        }
      })
    })
  }

  onSelect($event) {
    const profession = $event.target.value;
    if (profession === "all") {
      this.gnomesFiltered = this.gnomes;
    } else if (profession === "unemployed") {
      this.gnomesFiltered = this.gnomes.filter(gnome => gnome.professions.length === 0)
    } else {
      this.gnomesFiltered = this.gnomes.filter(gnome => gnome.professions.includes(profession));
    }
  }

}
