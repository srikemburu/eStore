const RESOURCE_PATH = '/'

const viewController = {
    index(req, res, next){
        console.log("view controller Index")
        res.render('Index', res.locals.data)
      },
      new(req, res, next){
        console.log("view controller New")
        res.render('New')
      },
      redirectHome(req, res, next){
        console.log("view controller Redirect Home")
        res.redirect(RESOURCE_PATH)
      }
}



module.exports = viewController