import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  /* {
    path: "/dashboard",
    title: "Dashboard",
        icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
       icon: "icon-atom",
    class: ""
  },
  {
    path: "/user",
    title: "User Profile",
        icon: "icon-wallet-43",
    class: ""
  },*/
  {
    path: "/tienda",
    title: "Tienda",
        icon: "icon-cart",
    class: ""
  },
  {
    path: "/historia",
    title: "Historia",
        icon: "icon-satisfied",
    class: ""
  },
  
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
