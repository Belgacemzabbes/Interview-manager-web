
export class RouteInfo {
    designation: string;
    path: string;
    icon: string;
    class: string;
    order: number;
    parent: number;
    isCollapsed: boolean;
    isActive: boolean;
    submenu: RouteInfo[];
    constructor() {
        this.isActive = false;
        this.isCollapsed = true;
        this.submenu = [];
    }
}