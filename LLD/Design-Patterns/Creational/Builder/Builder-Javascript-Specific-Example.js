class Address{
    constructor(zip, state){
        this.zip = zip
        this.state = state        
    }
}


class User{
    constructor(name, {age, phone = '123434', address } = {}){
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

const user1 =  new User('Bob')
const user2 =  new User('Bob',{ address :  new Address(495001, 'Chhattisgarh')})


console.log(user1)
console.log(user2)