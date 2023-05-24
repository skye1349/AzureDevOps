import { LogLevel, PublicClientApplication } from '@azure/msal-browser'

// Browser check variables
// If you support IE, our recommendation is that you sign-in using Redirect APIs
// If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
const ua = window.navigator.userAgent
const msie = ua.indexOf('MSIE ')
const msie11 = ua.indexOf('Trident/')
const msedge = ua.indexOf('Edge/')
const firefox = ua.indexOf('Firefox')
const isIE = msie > 0 || msie11 > 0
const isEdge = msedge > 0
const isFirefox = firefox > 0 // Only needed if you need to support the redirect flow in Firefox incognito

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
  names: {
    signUpSignIn: 'B2C_1_SignUpSignIn',
    editProfile: 'B2C_1_ProfileEdit',
  },
  authorities: {
    signUpSignIn: {
      authority:
        'https://cyberayb2c.b2clogin.com/cyberayb2c.onmicrosoft.com/B2C_1_SignUpSignIn',
    },
    editProfile: {
      authority:
        'https://cyberayb2c.b2clogin.com/cyberayb2c.onmicrosoft.com/B2C_1_ProfileEdit',
    },
  },
  authorityDomain: 'cyberayb2c.b2clogin.com',
}

// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: '5edffb2d-b312-4ad9-a368-552e94c1e2b8',
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: '/',
    postLogoutRedirectUri: '/',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: isIE || isEdge || isFirefox,
  },
  system: {
    allowNativeBroker: false, // Disables WAM Broker
    loggerOptions: {
      loggerCallback: (
        level: LogLevel,
        message: string,
        containsPii: boolean
      ) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            console.info(message)
            return
          case LogLevel.Verbose:
            console.debug(message)
            return
          case LogLevel.Warning:
            console.warn(message)
            return
          default:
            return
        }
      },
    },
  },
}

export const msalInstance = new PublicClientApplication(msalConfig)

// Scopes you add here will be prompted for consent during login
export const loginRequest = {
  scopes: ['https://msidlabb2c.onmicrosoft.com/msidlabb2capi/read'],
}

/**
 * Enter here the coordinates of your web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig = {
  scopes: ['https://msidlabb2c.onmicrosoft.com/msidlabb2capi/read'],
  uri: 'https://msidlabb2c.onmicrosoft.com/msidlabb2capi',
}
