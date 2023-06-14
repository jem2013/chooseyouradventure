import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {

  constructor(private navController: NavController) {

  }
  
  goToPage(gparam: string){
    this.navController.navigateRoot(gparam)

  }

  ngOnInit() {
  }

}
