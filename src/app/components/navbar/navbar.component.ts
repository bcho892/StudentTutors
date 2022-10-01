import { Component, NgModule, OnInit } from '@angular/core';
import { LinkItem } from 'src/app/types/util';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor() { }
  links: LinkItem[] =
    [
      { name: "Home", link: "" },
      { name: "About", link: "/About" },
      { name: "Tutors", link: "/Tutors" },
      { name: "Contact", link: "/Contact" }
    ];
  opened: boolean = false;
  ngOnInit(): void {
  }
  toggleMenu() {
    this.opened = !this.opened;
  }

}
