import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LinkComponent } from './link/link.component';



@NgModule({
  declarations: [MenuComponent, LinkComponent],
  imports: [
    CommonModule,   
    
  ],
  exports: [    
    MenuComponent,LinkComponent
  ]
})
export class ComponentsModule { }
