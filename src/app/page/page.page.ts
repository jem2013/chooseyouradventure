import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  goToPage(gparam: string){
    this.navController.navigateRoot(gparam)

  }

}
