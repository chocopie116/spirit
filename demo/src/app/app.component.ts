import {
  Component,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import * as ons from 'onsenui';

@Component({
  selector: 'app',
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="center">{{title}}</div>
      <div class="right">
        <ons-toolbar-button>
          <ons-icon icon="ion-navicon, material:md-menu"></ons-icon>
        </ons-toolbar-button>
      </div>
    </ons-toolbar>
    <div class="content">
      <p style="text-align: center">
        <ons-button (click)="alert()">Click me!</ons-button>
      </p>
    </div>
  </ons-page>
  `
})
export class AppComponent {
  title:string = 'My app';

  alert() {
    ons.notification.alert('Hello, world!');
  }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
