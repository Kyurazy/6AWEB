import { Routes } from '@angular/router';
import  {HomeComponent} from './admin/home/home.component';
import {UserComponent} from './admin/user/user.component';
import {PostComponent} from './admin/post/post.component';

export const routes: Routes = [
{path: 'admin/user', component : UserComponent},
{path: 'admin/post', component : PostComponent},
{path: 'admin/home', component : HomeComponent}
]
