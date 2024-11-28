const HomeController = (req, res) =>{
    res.render('Home', {'title': 'Dashboard'} )
}

export { HomeController };