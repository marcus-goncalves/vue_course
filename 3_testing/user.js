class User {
    constructor(details) {
        const {firstName, lastName} = details

        this.firstName = firstName
        this.lastName = lastName
    }

    get name() {
        return `${this.firstName} ${this.lastName}`
    }
}

const nameTest = () => {
    const userDetails = {
        firstName: 'Mark',
        lastName: 'TryIt'
    }

    const testUser = new User(userDetails)

    console.log('Username is: ', testUser.name === 'Mark TryIt')
}

// nameTest()

export default User