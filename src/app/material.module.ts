import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule ({
  imports: [MatSidenavModule,
           MatToolbarModule,
           MatIconModule,
           MatButtonModule,
           MatListModule,
           MatBadgeModule,
           MatTabsModule
           ],
  exports: [MatSidenavModule,
          MatToolbarModule,
          MatIconModule,
          MatButtonModule,
          MatListModule,
          MatBadgeModule,
          MatTabsModule
           ]
})

export class MaterialModule {}
