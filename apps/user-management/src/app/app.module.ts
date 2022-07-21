import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
 declarations: [AppComponent],
 imports: [
   BrowserModule,
   RouterModule.forRoot([{
     path: '',
     loadChildren: () => import('./remote-entry/entry.module').then(m => m.RemoteEntryModule)
   }], { initialNavigation: 'enabledBlocking' }),
   PagesModule,
 ],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}