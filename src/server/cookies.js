import fs from 'fs'
import jwt from 'jsonwebtoken'
import yaml from 'js-yaml'

let fileContents = fs.readFileSync('config/cfg.yml', 'utf8');
const config = yaml.load(fileContents);
const tokenConfig = config.tokenConfig;
import { createPublicKey } from 'crypto';

let rawPublicKey = fs.readFileSync(`${config.publicJwtKeyPath}`, 'utf-8')
let publicKey = createPublicKey(rawPublicKey);
let tokenPublicKey = publicKey

export async function getCookieToken(req) {
  if (!req.cookies) {
    return null
  }

  let yifferCookie = req.cookies[tokenConfig.cookieName]
  if (!yifferCookie) {
    return null
  }

  try {
    let yifferToken = await verifyToken(yifferCookie, tokenPublicKey, tokenConfig)
    return yifferToken
  }
  catch (err) {
    return null
  }
}

async function verifyToken(token) {
  let tokenOptions = {
    algorithms: [tokenConfig.algorithm]
  }

  return new Promise((resolve) => {
    jwt.verify(token, tokenPublicKey, tokenOptions, (err, body) => {
      if (err) {
        console.log('Token verifying error: ', err)
        resolve(null)
      }
      resolve(body)
    })
  })
}