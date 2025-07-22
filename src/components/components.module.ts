import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// import { NgxPaginationModule } from 'ngx-pagination';
import { AppMaterialModule } from 'src/app/app.material.module';

import { BoxWhiteComponent } from 'src/components/box-white/box-white.component';
import { TabsComponent } from 'src/components/tabs/tabs.component';


@NgModule({
  declarations: [
    BoxWhiteComponent,
    TabsComponent
  ],
  imports: [
    RouterModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    // NgxPaginationModule,
    AppMaterialModule
  ],
  exports: [
    BoxWhiteComponent,
    TabsComponent
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-CR' }]
})

export class ComponentsModule {}
