// import React from 'react'
import axios from 'axios'
import { LoginRequest } from '../models/LoginRequest'
import { JWTResponse } from "../models/JWTResponse";

export class AuthApi {

static signIn = async (request: LoginRequest) => await axios.post<JWTResponse>('/auth/signin',request)


}