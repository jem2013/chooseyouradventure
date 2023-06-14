import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page11',
  templateUrl: './page11.page.html',
  styleUrls: ['./page11.page.scss'],
})
export class Page11Page implements OnInit {

  constructor(private navController: NavController) { }

  goToPage(gparam: string){
    this.navController.navigateRoot(gparam)
  }
  ngOnInit() {
  }

}
