export class UserLoginModel {
    userName: string;
    password: string;
}
export class UserModel {
    iD_USER: number;
    pRENOM_USER: string;
    noM_USER: string;
    eMAIL_USER: string;
    lOGIN_USER: string;
    pWD_USER: string;
    pWD_USER_CLAIR: string;
    iD_ROLE: number;
}

export class CurrentUserModel {
    user: UserModel;
    token: string;
    constructor(){
        this.user = new UserModel();
    }
}

export class UserRoleModel {
    iD_ROLE: number;
    lIB_ROLE: string;
}