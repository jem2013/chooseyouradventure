import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page14',
  templateUrl: './page14.page.html',
  styleUrls: ['./page14.page.scss'],
})
export class Page14Page implements OnInit {

  constructor(private navController: NavController) { }

  goToPage(gparam: string){
    this.navController.navigateRoot(gparam)
  }
  ngOnInit() {
  }

}
