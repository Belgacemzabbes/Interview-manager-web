export class MenuModel {
    iD_MENU: number;
    iD_USER: number;
    iD_MENU_USER: number;
    liB_MENU: string;
    parenT_MENU: number;
    urL_MENU: string;
    icoN_MENU: string;
    ordrE_MENU: number;
    iS_AUTORIZED: boolean;
    noM_USER: string;
    prenoM_USER: string;
    menuAdded: boolean;
    constructor() {
      this.menuAdded = false;
    }
}