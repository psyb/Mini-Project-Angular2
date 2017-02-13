import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<headercomponent></headercomponent>
            <router-outlet></router-outlet>
            <footercomponent></footercomponent>
  `,

})
export class AppComponent  {  }
