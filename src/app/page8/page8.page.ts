import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.page.html',
  styleUrls: ['./page8.page.scss'],
})
export class Page8Page implements OnInit {

  constructor(private navController: NavController) { }

  goToPage(gparam: string){
    this.navController.navigateRoot(gparam)
  }
  ngOnInit() {
  }

}
