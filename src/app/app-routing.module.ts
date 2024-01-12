import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'contact',component:ContactComponent},
  { path: 'wishlist', component: WishlistComponent },
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
