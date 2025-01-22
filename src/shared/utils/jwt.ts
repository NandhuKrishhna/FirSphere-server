import mongoose from "mongoose"
import { SessionDocument } from "../../infrastructure/models/session.model"
import { SignOptions, VerifyOptions } from "jsonwebtoken"
import jwt from "jsonwebtoken"
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env"
import { verify } from "node:crypto"

export type RefreshTokenPayload  = {
    sessionId : mongoose.Types.ObjectId
}

export type AccessTokenPayload = {
    userId : string,
    sessionId : mongoose.Types.ObjectId
}

type SignOptionsAndSecret = SignOptions & {
    secret : string
}
const defaults : SignOptions = {
    audience : ["user"]
}

export const accessTokenOptions : SignOptionsAndSecret = {
    expiresIn : "15m",
    secret : JWT_SECRET
}
export  const refreshTokenSignOptions : SignOptionsAndSecret = {
    expiresIn : "30d",
    secret : JWT_REFRESH_SECRET
 }


export const signToken = (
    payload : AccessTokenPayload | RefreshTokenPayload,
    options? : SignOptionsAndSecret
) => {
   const { secret, ...signOpts } = options || accessTokenOptions ;
   return jwt.sign(payload, secret, {
         ...defaults,
         ...signOpts
   });
}

export const  verfiyToken = <TPayload extends object = AccessTokenPayload >(
  token : string,
  options? : VerifyOptions & { secret : string }
)=> {
    const {secret=JWT_SECRET, ...verifyOpts} = options || {} 
  try {
     const payload = jwt.verify(token, secret, {
        ...defaults,
        ...verifyOpts
  }) as TPayload
  return {
    payload
  }

  } catch (error:any) {
    return {
        error: error.message
    }
  }
}

