import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.page.html',
  styleUrls: ['./page6.page.scss'],
})
export class Page6Page implements OnInit {

  constructor(private navController: NavController) {

  }
  
  goToPage(gparam: string){
    this.navController.navigateRoot(gparam)

  }

  ngOnInit() {
  }

}
