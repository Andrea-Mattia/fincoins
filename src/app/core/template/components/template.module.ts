import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, TemplateComponent],
  exports: [HeaderComponent, TemplateComponent],
  bootstrap: [],
})
export class TemplateModule {}
