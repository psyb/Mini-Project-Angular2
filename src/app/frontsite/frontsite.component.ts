import { Component, OnInit } from '@angular/core';
import { ISHOE } from '../product/shoes';
import { ShoeDataService } from '../shared/data-service';
@Component({
    selector: 'frontsitecomponent',
	template: `
            <section class="image-slider">
                <div class="row">
                   <div class="col s12 l12">
                    <img src="./Images/banner.png">
                   </div>
                </div>
                 </section>
            <section class="products">
                <div class="container">
                <div class="row right">
                    <div class="col s12 l4">
                        <img src="Images/Product1.jpg" alt="">
                        <h5>FOOTBALL SHOE</h5>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicng, vivamus congue nulla leo, quis imperdiet magna</h6>
                       
                    </div>
                    <div class="col s12 l4">
                        <img src="Images/Product1.jpg" alt="">
                        <h5>FOOTBALL SHOE</h5>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicng, vivamus congue nulla leo, quis imperdiet magna</h6>
                       
                    </div>
                    <div class="col s12 l4">
                        <img src="Images/Product1.jpg" alt="">
                        <h5>FOOTBALL SHOE</h5>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicng, vivamus congue nulla leo, quis imperdiet magna</h6>
                       
                    </div>
                    
                </div>
                </div>
                
                </section>
            
            <section class="popular-products">
                <div class="container">
                    <h4 class="center">SHOES</h4>
                <div class="row">
                    
                    <div class="col center s12 l3" *ngFor="let shoe of shoes">
                        <div class="popular-products-border">
                            <img [src]="'../Images/' + shoe.image[0]" alt="">
                            <div style="border: 1px solid lightgray;">
                            <h6>{{shoe.name}}</h6>
                            <b>
                                {{shoe.type}}
                            </b>
                            <p>
                              {{shoe.description}}
                            </p>
                            </div>
                            <a class="btn">button</a>
                        </div>
                    </div>
                    
                   
                </div>
                </div>
             
                </section>
            
            
 
	`
})

export class FrontsiteComponent implements OnInit{
   shoes:ISHOE[];


   constructor(private ShoeDataService: ShoeDataService){

   }
    ngOnInit(){
        this.shoes = this.ShoeDataService.getDemoData();
    }
    

	}
