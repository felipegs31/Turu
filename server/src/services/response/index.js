import httpStatus from 'http-status'

export const success = (res, status) => (entity) => {
  if (entity) {
    res.status(status || httpStatus.OK).json(entity)
  }
  return null
}

export const error = (res, next) => (err) => {
  if (err.message) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: err.message,
      code: err.code
    })
  } else {
    next(err)
  }
}

export const notFound = (entity) => {
  if (entity) {
    return entity
  }
  return Promise.reject({
    status: '404'
  })
}