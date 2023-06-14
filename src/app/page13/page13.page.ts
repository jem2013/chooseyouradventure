import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page13',
  templateUrl: './page13.page.html',
  styleUrls: ['./page13.page.scss'],
})
export class Page13Page implements OnInit {

  constructor(private navController: NavController) { }

  goToPage(gparam: string){
    this.navController.navigateRoot(gparam)
  }
  ngOnInit() {
  }

}
