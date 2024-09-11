class User{
    constructor(id, name){
        this.is = id
        this.name = name
    }

    hasAccess(){
        return this.name === 'Bob'
    }
}

class NullUser{
    constructor(){
        this.is = -1
        this.name = `Guest`
    }

    hasAccess(){
        return false;
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'John'),
]


function getUser(id){
    const user =  users.find(user => user.id === id)

    if(user){
        return user
    }else{
        return new NullUser()
    }
}

function printUser(id){
    const user = getUser(id);


    console.log('Hello' + name)


    /*
        This will throw an error if we don't first check that the user
        object has this fucntion available and isn't null.

        This is a lot of extra code to add in every time we want to check
        user access, and could cause bugs that are easy to miss
        if we forget to do the null checks.
    */

    if(user.hasAccess()){
        console.log("You have acess")
    }else{
        console.log('You are not allowed here')
    }

}