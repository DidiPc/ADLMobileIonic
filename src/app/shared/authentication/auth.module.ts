import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SinginComponent} from './singin/singin.component';
import {AuthRouting} from './auth.routing';
import {IonicModule} from '@ionic/angular';
import {Facebook} from '@ionic-native/facebook/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {SignupComponent} from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [SinginComponent, SignupComponent],
    imports: [IonicModule, AuthRouting, IonicStorageModule, CommonModule, FormsModule, ReactiveFormsModule],
    providers: [Facebook],
    entryComponents: []
})
export class AuthModule {
}
