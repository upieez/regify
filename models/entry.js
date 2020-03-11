module.exports = (dbPoolInstance) => {

    let loginUser = (callback,data) => {

        let values = [data.user,data.password];
        const query = "SELECT * FROM companies WHERE (name = $1 AND password = $2)";

        dbPoolInstance.query(query,values,(error, queryResult) => {
            if (error) {
                callback(null, null);
            } else {
                if (queryResult.rows[0] === undefined) {
                    callback(null, null);
                } else {
                    callback(null,queryResult.rows[0]);
                }
            }
        });
    }

    return {
        loginUser: loginUser,
    };
};