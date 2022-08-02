import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit(): void {
  }

  setLayouts(){
    this.renderer.addClass(this.document.body, "navbar");
    this.renderer.addClass(this.document.body, "sidebar");
    this.renderer.addClass(this.document.body, "footer");
  }

}
