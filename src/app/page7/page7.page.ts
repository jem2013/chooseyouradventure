import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.page.html',
  styleUrls: ['./page7.page.scss'],
})
export class Page7Page implements OnInit {

  constructor(private navController: NavController) {

  }
  
  goToPage(gparam: string){
    this.navController.navigateRoot(gparam)

  }

  ngOnInit() {
  }

}
