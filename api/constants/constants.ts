export const NUMBER_OF_USERS_ON_PAGE = 6;
export const existingUserId= Math.floor(Math.random() * NUMBER_OF_USERS_ON_PAGE*2) + 1
export const nonExistingUserId = Math.floor(Math.random() * NUMBER_OF_USERS_ON_PAGE*2) + 12
export const BASE_URL = 'https://reqres.in/api/'


export const userCreated = {
    "name": "Uladzimir",
    "job": "QA"
}

export const userForPutMethod = {
    "name": "Ivan",
    "job": "Developer"
}
  
export const userForPatchMethod = {
    "name": "Nina",
    "job": "Teacher"
}

export const invalidLoginCredentials = {
    "email": "someemail@gmail.com",  
}

export const loginErrorMessage = "Missing password"
