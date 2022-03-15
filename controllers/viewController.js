const RESOURCE_PATH = '/products'

const viewController = {
    index(req, res, next){
        console.log("view controller Index")
        res.render('Index', res.locals.data)
      },
    new(req, res, next){
        console.log("view controller New")
        res.render('New')
      },
    show(req, res, next){
        console.log("view controller Show")
        // console.log(res.locals.data)
        res.render('Show', res.locals.data)
    },
    edit(req, res, next){
        console.log("view controller Edit")
        res.render('Edit', res.locals.data)
    },
    redirectHome(req, res, next){
        console.log("view controller Redirect Home")
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next){
        console.log("view controller Redirect Show")
        res.redirect(RESOURCE_PATH + `/${req.params.id}`)
    }
}

module.exports = viewController