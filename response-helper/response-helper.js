class Response {

  response(res, status, data){
      return res.status(status).json({
      status: true,
      data: data,
      error: {}
    })
  }

  responseLogin(res, status, data){
    return res.status(status).json({
    status: true,
    token: data,
    error: {}
  })
}
}

module.exports = Response