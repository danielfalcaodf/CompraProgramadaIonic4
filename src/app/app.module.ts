import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
