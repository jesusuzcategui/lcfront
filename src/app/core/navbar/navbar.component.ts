import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() show : Boolean = true;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if(!this.show)
      this.el.nativeElement.remove();
  }

}
