import { expect } from "@jest/globals";
import superagent, { Response } from "superagent"
import { BASE_URL, NUMBER_OF_USERS_ON_PAGE, userForPutMethod, nonExistingUserId, existingUserId, userCreated, userForPatchMethod, invalidLoginCredentials, loginErrorMessage } from "../constants/constants";



let response: Response;

describe("Test HTTp methods (GET)", () => {
  test("Should correctly read GET the list of users", async () => {
    try {
      response = await superagent.get(`${BASE_URL}users`)
    } catch (err: any) {
      throw new Error(err.message)
    }
    expect(response.status).toBe(200)
    expect(response.body.data.length).toBe(NUMBER_OF_USERS_ON_PAGE)
  })

  test(`Should correctly GET posts with definite userId ${existingUserId}`, async () => {
    try {
      response = await superagent.get(`${BASE_URL}users`)
        .query({ id: existingUserId })
    } catch (err: any) {
      throw new Error(err.message)
    }
    expect(response.status).toBe(200)
    expect(response.body.data.id).toBe(existingUserId)
  })

  test(`Should correctly handle GETting non-existing user`, async () => {
    try {
      response = await superagent.get(`${BASE_URL}users/${nonExistingUserId}`)
    } catch (err: any) {
      expect(err.status).toBe(404)
    }
  })
})


describe("Test HTTP methods (DELETE)", () => {
  test("Should delete existing user", async () => {
    try {
      response = await superagent.delete(`${BASE_URL}users/${existingUserId}`)
    } catch (err: any) {
      throw new Error(err.message)
    }
    expect(response.status).toBe(204)
  })
})


describe("Test HTTP methods (POST)", () => {
  test("Should create a new post with POST method", async () => {
    try {
      response = await superagent.post(`${BASE_URL}users`)
        .set("Content-Type", "application/json")
        .send(userCreated)
    } catch (err: any) {
      throw new Error(err.message)
    }
    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(userCreated)
  })

  test("Should correctly handle case when user try to log in not providing a password", async () => {
    try {
      response = await superagent.post(`${BASE_URL}login`)
        .set("Content-Type", "application/json")
        .send(invalidLoginCredentials)
    } catch (err: any) {
      expect(err.status).toBe(400)
      expect(err.response.body.error).toEqual(loginErrorMessage)
    }
  })
})


describe("Test HTTP methods (PUT)", () => {
  test("Should update a post with PUT method", async () => {
    try {
      response = await superagent.put(`${BASE_URL}users/${nonExistingUserId}`)
        .set("Content-Type", "application/json")
        .send(userForPutMethod)
    } catch (err: any) {
      throw new Error(err.message)
    }
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('updatedAt')
    expect(response.body).toMatchObject(userForPutMethod)
  })
})


describe("Test HTTP methods (PATCH)", () => {
  test("Should update a user with PATCH method", async () => {
    try {
      response = await superagent.patch(`${BASE_URL}users/${nonExistingUserId}`)
        .set("Content-Type", "application/json")
        .send(userForPatchMethod)
    } catch (err: any) {
      throw new Error(err.message)
    }
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject(userForPatchMethod)
  })
})



