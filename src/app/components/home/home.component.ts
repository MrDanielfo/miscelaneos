import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <br>
    <app-css></app-css>
    <br>
    <app-clases></app-clases>
    <br>
    <p [appResaltado]="'crimson'">Hola Mundo</p>
    <br>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,
AfterContentChecked, AfterContentInit, AfterViewChecked,
AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

 ngOnChanges() {
    console.log('ngOnChanges');
 }
 ngDoCheck() {
    console.log('ngDoCheck');
 }

 ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
 }
 ngAfterContentInit() {
    console.log('ngOnContentInit');
 }
 ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
 }

 ngAfterViewInit() {
    console.log('ngAfterViewInit');
 }
 ngOnDestroy() {
    console.log('ngOnDestroy');
 }

}
