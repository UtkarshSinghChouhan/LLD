class Address{
    constructor(zip, state){
        this.zip = zip
        this.state = state        
    }
}


class User{
    constructor(name, age, phone, address){
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

class UserBuilder{

    constructor(name){
        this.user = new User(name)
    }

    setAge(age){
        this.user.age = age
        return this
    }

    setPhone(phone){
        this.user.phone = phone
        return this
    }

  
    setAddress(address){
        this.user.address = address
        return this
    }
    
    build(){
        return this.user
    }

}

let user = new UserBuilder('Bob').build()
console.log(user)


let user2 = new UserBuilder('Utkarsh Singh Chouhan').setAge(10).build()
console.log(user2)