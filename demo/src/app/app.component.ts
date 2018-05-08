import {
  Component,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
}

@NgModule({
  imports: [OnsenModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
