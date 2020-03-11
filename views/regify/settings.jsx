var React = require("react");

import Layout from '../layout';

class Settings extends React.Component {
  render() {
    let actionUrl = `/events/${this.props.eventResult[0].id}/settings?_method=put`;
    return (
      <Layout>
      <div>
      <h1>Settings</h1>
        <form method="POST" action={actionUrl}>
          <div className="form-group">
            <label for="name">Event Name</label>
            <input type="text" name="name" className="form-control" id="eventName" value={this.props.eventResult[0].name}/>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
      </Layout>
    );
  }
}

module.exports = Settings;