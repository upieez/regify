module.exports = (db) => {

    const loginForm = (request,response) => {
            response.render('entry/login');
    }

    const login = (request,response) => {

        let data = {
            user: request.body.name,
            password: request.body.password
        }

        let callBack = (error, result, username) => {
            if (error){
                response.send(error);
            } else{
                if (result === null){
                    response.send('WRONG USERNAME/EMAIL/PASSWORD');
                } else {
                    response.cookie('userid',result.id);
                    response.cookie('username',result.name);
                    response.redirect('/events');
                }
            }
        }
        db.entry.loginUser(callBack,data);
    }

    return {
        loginForm: loginForm,
        login: login,
    };
}