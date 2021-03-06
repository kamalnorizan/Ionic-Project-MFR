import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { LoginPage } from '../auth/login/login.page';
import { RegisterPage } from '../auth/register/register.page';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private authService: AuthService,
    private navCtrl: NavController,
    private menu: MenuController
  ) {
    this.menu.enable(false);
    console.log('Landing : Constructor');
  }

  ngOnInit() {
    console.log('Landing : NgOnInit');
  }

  ionViewCanEnter() {
    console.log('Landing : ionViewCanEnter');
  }

  ionViewDidLoad() {
    console.log('Landing : ionViewDidLoad');
  }

  ionViewWillEnter() {
    this.authService.getToken().then(
      () => {
        if (this.authService.isLoggedIn) {
          this.navCtrl.navigateRoot('/recipes');
        }
    });
  }

  ionViewDidEnter() {
    console.log('Landing : ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('Landing : ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('Landing : ionViewDidLeave');
  }

  ionViewCanLeave() {
    console.log('Landing : ionViewCanLeave');
  }

  ionViewWillUnload() {
    console.log('Landing : ionViewWillUnload');
  }

  async login() {
    const loginModal = await this.modalController.create({
      component: LoginPage
    });
    return await loginModal.present();
  }

  async register() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

}
