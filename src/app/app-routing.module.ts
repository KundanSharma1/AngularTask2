import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveModule } from './active/active.module';
import { ActiveComponent } from './active/active/active.component';
import { AppComponent } from './app.component';
import { DeletedModule } from './deleted/deleted.module';
import { DeletedComponent } from './deleted/deleted/deleted.component';
import { HomeComponent } from './home/home.component';
import { ManageModule } from './manage/manage.module';
import { ManageComponent } from './manage/manage/manage.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'active', component: ActiveComponent },
  { path: 'deleted', component: DeletedComponent },
  {
    path: 'manage',
    component: ManageComponent,
    loadChildren: () =>
      import('./manage/manage.module').then((mod) => mod.ManageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
