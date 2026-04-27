exports.main = (req, res) => {
    res.render('index')
}

exports.sobre = (req, res) => {
    
    const id = req.params.id
    
    res.render("sobre", { id })
}

exports.sobrePost = (req, res) => { 

    const nome = req.body.nome
    
    res.render("profile", { nome })

}