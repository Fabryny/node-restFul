const {validationResult } = require('express-validator');

module.exports ={
    user: (app, req, res) => {
        const errors = validationResult(req);
    
        if(!errors.isEmpty()){
            app.utils.error.send(errors, req, res);
            return false
        } else {
            return true
        }
    }

}