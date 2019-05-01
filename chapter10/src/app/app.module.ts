 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreventUnsavedChangesGuard } from './log-in/prevent-unsaved-changes-guard';
import { GitHubModule } from './git-hub/git-hub.module';
import { LogInModule } from './log-in/log-in.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GitHubModule,
    LogInModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
