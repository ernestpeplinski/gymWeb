
export class Users{
private static availableUsers: Array<User>;
public static loggedUser: User = null;
public static getUsers(){
    if(this.availableUsers === undefined){
        this.availableUsers = new Array();
        this.availableUsers.push(new User( 'User', 'Password' ));
    }
    return this.availableUsers;
}
}
export class User{
    constructor(public login,public password){
    }
}