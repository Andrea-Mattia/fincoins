import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from './components/template.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TemplateModule],
  exports: [TemplateModule],
})
export class CoreModule {}
