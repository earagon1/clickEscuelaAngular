import { Session } from './../../../models/session';
import { COMMONS } from 'src/app/enums/commons';
import { SnackBarService } from './../../../services/snack-bar.service';
import { AuthService } from './../../../services/auth.service';
import { Token } from './../../../models/token';
import { IconGeneratorService } from 'src/app/services/icon-generator.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [IconGeneratorService],
})
export class LoginComponent implements OnInit {
  welcomeMessage = 'Bienvenidos';
  load = false;
  validCredentials: boolean;
  // Variables para animar a clicky
  yesAnimate = false;
  help = false;
  checkLogin = false;
  countErrors = 0;
  // Fin de variables de animacion
  selectedProfile = '';

  currentSession: Session;

  @ViewChild ('tooltip') tooltip: MatTooltip;

  sessions: Session[];
  login: any;

  profiles = [
    {name: 'Profesores', value: '/teacher/menu/'},
    {name: 'Estudiantes', value: '/student/menu/'},
    {name: 'Padres', value: '/parent/menu/'},
    {name: 'Administradores', value: '/admin/register/'},


  ];

  clickyMessage: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbar: SnackBarService
  ) { this.clickyMessage = 'Bienvenidos';

      this.sessions = [];
      this.sessions.push(new Session('maria12345', 'Maria', 'http://click-escuela-develop.herokuapp.com/assets/images/teachers/maria.jpg?'));
      this.sessions.push(new Session('marcos12345', 'Roberto', 'http://click-escuela-develop.herokuapp.com/assets/images/teachers/roberto.jpg?'));

      this.login = {
        user: '',
        password: '',
        profile: '/admin/register/',
      };


}

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {


    this.checkCredentials();

    setTimeout(() => {
    this.yesAnimate = true;
    this.tooltip.show();
   }, 1000);

    setTimeout(() => {
    this.yesAnimate = false;
    this.tooltip.hide();
    this.clickyMessage = '¿Necesitas ayuda?';
   }, 4000);




  }

  toggleHelp() {
    this.help = !this.help;
  }

  checkCredentials() {

    if (localStorage.getItem('token')) {
    const credential = JSON.parse(localStorage.getItem('token'));
    const authDate = moment(credential.expiration);

    this.currentSession = this.sessions.filter(a => a.token === credential.id)[0];



    if (authDate.isBefore(new Date(), 'minutes')) {

      this.validCredentials = false;

      setTimeout(() => {
        this.snackbar.showSnackBar(
        'Las credenciales han expirado. Inicie sesion nuevamente',
        COMMONS.SNACK_BAR.ACTION.ACCEPT,
        COMMONS.SNACK_BAR.TYPE.ERROR
      );
      }, 500);

      localStorage.clear();

    } else {
      this.validCredentials = true;
      setTimeout(() => {
        this.snackbar.showSnackBar(
        'Bienvenido Nuevamente',
        COMMONS.SNACK_BAR.ACTION.ACCEPT,
        COMMONS.SNACK_BAR.TYPE.SUCCES
      );
      }, 500);

    }
    }
  }

  closeSession() {
    localStorage.clear();
    this.validCredentials = false;
  }

  setSessionToken() {

    let credential;

    if (localStorage.getItem('token'))
    {
    credential = JSON.parse(localStorage.getItem('token'));
    }

    this.load = true;
    this.checkLogin = true;

    setTimeout(() => {
        this.load = false;

        this.router.navigate([ credential.profileUrl]);
      }, 3000);

  }

  setSession() {
    this.checkLogin = true;
    let token:Token;
    let session = null;

    if (this.login.user === 'maria' && this.login.password === '12345') {
      session = this.sessions[0];
      session.profile = this.login.profile;
      token = this.authService.getToken(session);
      token.setProfile(session.profile)

    } else if (this.login.user === 'roberto' && this.login.password === '67890') {
      session = this.sessions[1];
      session.profile = this.login.profile;
      token = this.authService.getToken(session);
      token.setProfile(session.profile)
    }

    localStorage.setItem('token', JSON.stringify(token));


    if (session !== null) {
    this.load = true;

    setTimeout(() => {
      this.load = false;
      
      this.router.navigate([ this.login.profile ]);
    }, 3000);
  } else {
    this.checkLogin = false;
    this.countErrors++;
    if (this.countErrors%2 === 0) {
      this.tooltip.show();
    }
    this.snackbar.showSnackBar('Revise el usario y la contraseña', COMMONS.SNACK_BAR.ACTION.CLOSE, COMMONS.SNACK_BAR.TYPE.ERROR);
  }


    }

}
