import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ConfirmotpComponent } from './component/confirmotp/confirmotp.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'confirmotp',component:ConfirmotpComponent},
    {path:'resetpassword',component:ResetpasswordComponent},
    {path:'forgetpassword',component:ForgetpasswordComponent},
];
