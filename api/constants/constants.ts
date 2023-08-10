export const NUMBER_OF_USERS_ON_PAGE = 6;
export const existingUserId = Math.floor(Math.random() * NUMBER_OF_USERS_ON_PAGE * 2) + 1
export const nonExistingUserId = Math.floor(Math.random() * NUMBER_OF_USERS_ON_PAGE * 2) + 12
export const BASE_URL = 'https://reqres.in/api/'


type User = {
    name: string;
    job: string;
  };

export const userCreated:User = {
    name: "Uladzimir",
    job: "QA"
}

export const userForPutMethod:User = {
    name: "Ivan",
    job: "Developer"
}

export const userForPatchMethod:User = {
    name: "Nina",
    job: "Teacher"
}

export const invalidLoginCredentials = {
    email: "someemail@gmail.com",
}

export const loginErrorMessage = "Missing password"
