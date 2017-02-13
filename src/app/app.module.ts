import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FrontsiteComponent} from './frontsite/frontsite.component';
import { ShoeDataService } from './shared/data-service';
import { FooterComponent} from './footer/footer.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot([
                      {path: 'home', component:FrontsiteComponent},
                      {path: 'footer', component:FooterComponent},
                     // {path: 'recipe/:id', component:RecipeDetailsComponent},
                      {path: '', redirectTo: 'home', pathMatch: 'full'},
                      {path: '**', redirectTo: 'home', pathMatch: 'full'}
                    
                  ])
                  ],
  
  providers:    [ShoeDataService],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, FrontsiteComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
