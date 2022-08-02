import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../models/menu-models';
import { AuthService } from '../services/auth.service';
import { RouteInfo } from './sidebar.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public gestionSessionCollapsed = false;
  public samplePagesCollapsed = false;
  public gestionEntretienCollapsed = false;
  public gestionCandidatCollapsed = false;
  public menuItems: RouteInfo[] = [];
  public menuUtilisateur: MenuModel[] = [];
  activeTitles: string[] = [];
  nav_collapsed_open = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body?.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body?.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
    this.getMenuByUserId();
  }
  private async getMenuByUserId() {
    (await this.authService.GetAllMenuByUSerId()).subscribe((data) => {
      this.menuUtilisateur = data;
      this.menuItems = [];
      const sideBarMenus: RouteInfo[] = [];
      this.menuUtilisateur.forEach((menu: MenuModel) => {
        if (!menu.menuAdded) {
          sideBarMenus.push(this.addMenuToNode(menu));
        }
      });
      this.menuItems = sideBarMenus;
    });
  }
  private addMenuToNode(menu: MenuModel) {
    const node = new RouteInfo();
    menu.menuAdded = true;

    if (menu.urL_MENU === null) {
      node.path = '';
    } else {
      node.path = menu.urL_MENU;
    }
    node.designation = menu.liB_MENU;
    node.icon = menu.icoN_MENU;
    if (node.icon === null) {
      node.icon = '';
    }
    node.class = '';
    node.parent = menu.parenT_MENU;
    if (node.path !== '') {
      node.isActive = true;
    }

    node.submenu = [];
    const childrens: MenuModel[] = this.getChildrenMenu(menu.iD_MENU);
    if (childrens.length === 0) {
      node.class = '';
    } else {
      node.class = 'has-sub';

      childrens.forEach((menuChild: MenuModel) => {
        const nodeChild: RouteInfo = this.addMenuToNode(menuChild);
        node.submenu.push(nodeChild);
      });
    }
    return node;
  }
  public collapseMenu(menu: RouteInfo) {
    if (!menu.isCollapsed) {
      this.menuItems.map((m) => (m.isCollapsed = true));
    } else if (menu.isCollapsed && menu.submenu.length !== 0) {
      menu.isCollapsed = false;
      this.menuItems
        .filter((m) => m != menu)
        .map((m) => (m.isCollapsed = true));
    }
  }

  private getChildrenMenu(menuId: number) {
    return this.menuUtilisateur.filter(
      (menu: MenuModel) => menu.parenT_MENU === menuId
    );
  }
}
