// module.exports = (req, res, next) => {
//   res.header('Content-Range', 'houses 0-10/20')
//   res.headers['X-Total-Count'] = '30'
//   res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
//   next()
// }

module.exports = (req, res, next) => {
  res.header('Content-Range', 'posts 0-24/319')
  next()
}
