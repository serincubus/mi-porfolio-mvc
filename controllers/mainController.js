const path=require("path");
const home = {
    home: (req,res)=> {
        res.sendFile(path.join(__dirname, "../views/home.html"))
        
        
    }
}

module.exports = home;


