import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule],
  exports: [MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class MaterialModule { }
