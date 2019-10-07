import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MultiStepFormComponent } from "./components/multi-step-form/multi-step-form.component";
import { FormatTitlePipe } from "./pipes/format-title.pipe";

@NgModule({
  declarations: [AppComponent, MultiStepFormComponent, FormatTitlePipe],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
