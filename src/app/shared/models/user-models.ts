export class UserLoginModel {
    userName: string;
    password: string;
}
export class UserModel {
    iD_USER: number;
    prenoM_USER: string;
    noM_USER: string;
    nomComplet:string
    emaiL_USER: string;
    logiN_USER: string;
    pwD_USER: string;
    pwD_USER_CLAIR: string;
    iD_ROLE: number;
    esT_FORMATEUR: boolean;
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
    liB_ROLE: string;
}