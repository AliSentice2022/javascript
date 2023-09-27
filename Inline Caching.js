function findUser(user) {
    console.log(`found ${user.firstName} ${user.lastName}`);
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: 'Brittney',
    lastName: 'Postma'
}

findUser(userData)

// if this findUser(userData) is called multiple times,
// then it will be optimized (inline cached) to just be 'found Brittney Postma'