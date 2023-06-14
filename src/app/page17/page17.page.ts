import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page17',
  templateUrl: './page17.page.html',
  styleUrls: ['./page17.page.scss'],
})
export class Page17Page implements OnInit {

  constructor(private navController: NavController) { }

  goToPage(gparam: string){
    this.navController.navigateRoot(gparam)
  }
  ngOnInit() {
  }

}
