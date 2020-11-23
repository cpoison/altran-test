import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';



@Component({
  selector: 'app-gnome-list',
  templateUrl: './gnome-list.component.html',
  styleUrls: ['./gnome-list.component.scss']
})
export class GnomeListComponent implements OnInit {

  gnomes: any[];
  professions: any[]
  selectedProfession: string;
  gnomesList: any[];
  gnomesPaginated: any[];
  constructor(private httpService: HttpClientService) {

    // this.professions = ['Metalworker', 'Stonecarver', 'Woodcarver', 'Tinker', 'Tailor', 'Potter', 'Brewer', 'Medic', 'Prospector', 'Gemcutter', 'Mason', 'Cook', 'Baker', 'Miner', 'Carpenter', 'Farmer', 'Tax inspector', 'Smelter', 'Butcher', 'Blacksmith', 'Sculptor']
    
  }
  
  ngOnInit(): void {
    this.getGnomesList();
  }
  
  async getGnomesList() {

    this.httpService.getGnomes()
      .then(response => {
        
        this.gnomes = response.Brastlewark
        this.paginate()
        this.gnomesList = this.gnomesPaginated;
        this.getProfessions();
        console.log(response);
      })
      .catch(error => {
      
      }) 

    // try {
    //   const response = await this.httpService.getGnomes()
    //   this.gnomes = response.Brastlewark
    //   this.gnomesList = this.gnomes;
    //   this.getProfessions();
    //   console.log(response);
    // } catch (error) {
    //   throw error;
    // } 
  }


  paginate() {
    const currentPage = 1;
    const itemsPerPage = 15;
    const numberOfPages = Math.ceil(this.gnomes.length / itemsPerPage);

    const begin = ((currentPage - 1) * itemsPerPage);
    const end = begin + itemsPerPage;
    this.gnomesPaginated = this.gnomes.slice(begin, end);
    console.log(this.gnomesPaginated);
    
  }

  getProfessions() {

    const allprofessions = []
    this.gnomesPaginated.map(gnome => {
      allprofessions.push(gnome.professions);
    })
    
    console.log([...new Set(allprofessions.flat(1))]);
    this.professions = [...new Set(allprofessions.flat(1))]
  }

  onSelect($event) {
    const profession = $event.target.value;
    if (profession === "all") {
      this.gnomesList = this.gnomesPaginated;
    } else if (profession === "unemployed"){
      this.gnomesList = this.gnomesPaginated.filter(gnome => gnome.professions.length === 0)
    } else {
      this.gnomesList = this.gnomesPaginated.filter(gnome => gnome.professions.includes(profession));
    }
    console.log(this.gnomesList);
  }

}
