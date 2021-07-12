const parseProps = (context) => {
  const newContext = {}
  const allowedFields = ['user', 'headers', 'requestId', 'ip']

  for (const prop in context) {
    if (Object.prototype.hasOwnProperty.call(context, prop) && allowedFields.includes(prop)) {
      newContext[prop] = context[prop]
    }
  }

  return newContext
}

const parseHeaders = (headers = {}) => {
  const newHeaders = {}
  const allowedHeaderFields = ['x-requestid']

  for (const prop in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, prop) && allowedHeaderFields.includes(prop)) {
      newHeaders[prop] = headers[prop]
    }
  }

  return newHeaders
}

export function serializeContext (ctx) {
  try {
    const newContext = {
      ...parseProps(ctx),
      headers: parseHeaders(ctx.headers)
    }

    return newContext
  } catch (err) { // dont cause side effects on error
    return ctx
  }
}
