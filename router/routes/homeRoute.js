export const renderHome = async (req, res) =>{
    res.render('index',{
        css : "/styles/style.css"
    })
}