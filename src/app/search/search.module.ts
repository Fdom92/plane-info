import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchPage } from './search.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchPage
      }
    ])
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
