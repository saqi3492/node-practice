export const successResponseHandler = (
  message: any,
  data?: any,
) => {
  return {
    status: true,
    message,
    ...(data && { data }),
  }
}

export const failResponseHandler = (
  message: any,
  logLabel?: string,
  e?: any
) => {
  if (logLabel)
    console.log(logLabel);

  if (e instanceof Error) {
    console.log(e)
  } else {
    console.log(JSON.stringify(e, null, 4));
  }

  return {
    status: false,
    message: message,
    errors: e?.messages?.errors
  }
}