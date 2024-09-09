// import { logPrettifyData } from 'App/Helpers/LogHelper'

// export const successResponseHandler = async (
//   message: any,
//   data?: any,
//   type?: any
// ) => {
//   return {
//     status: true,
//     message,
//     ...(data && { data }),
//     ...(type && { type }),
//   }
// }

// export const failResponseHandler = async (
//   message: any,
//   logLabel?: string,
//   e?: any
// ) => {
//   if (e && logLabel) {
//     console.log(logLabel)
//     logPrettifyData(e) && console.log(logPrettifyData(e))
//   }

//   return {
//     status: false,
//     message: message,
//     errors: e?.messages?.errors,
//   }
// }
