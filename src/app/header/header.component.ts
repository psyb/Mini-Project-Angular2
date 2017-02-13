import { Component } from '@angular/core';
@Component({
     selector: 'headercomponent',
	template: `

        <nav class="container">
            <div class="row">
                <div class="col s9 l9">
                    <img  src="images/logosupersports.png" alt="">
                </div>
                <div class="center">
                    <div style="color: black;" class="col s3 l3 center">
                        
                    </div>
                </div>
            <div class="col s10 md12 l12">
                <div class="spaceline"></div>
                    <ul>
                        <li><a [routerLink]="['home']">HOME</a></li>
                        <li><a [routerLink]="['footer']">MEN</a></li>
                        <li><a href="#contact">WOMEN</a></li>
                        <li><a href="#about">KIDS</a></li>
                        <li><a href="#about">SALE</a></li>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#about">SUPPORT</a></li>
                    </ul>
                    <input id="nav_input_search" class="valign"  type="text" name="" value="">
                </div>
            </div>
        </nav>
	
	`
})

export class HeaderComponent{

	}
