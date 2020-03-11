var React = require('react');

var Layout = require('../layout');

class Login extends React.Component {
  render() {
    return (
        <Layout>
        <link rel="stylesheet" type="text/css" href="/login.css"/>
          <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Regify</h5>
            <form class="form-signin" method="POST" action="/login">
              <div class="form-label-group">
                <input type="name" id="inputName" class="form-control" placeholder="Username" name="name" required autofocus/>
                <label for="inputName">Username</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" name="password" required/>
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
        </Layout>
    );
  }
}

module.exports = Login;