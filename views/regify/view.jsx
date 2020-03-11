var React = require("react");

import Layout from '../layout';

class View extends React.Component {
    render() {
        const eventName =  this.props.eventResult[0].name
        const scanUrl = "/events/" + this.props.eventResult[0].id + "/scan";
        const attendeesURL = "/events/" + this.props.eventResult[0].id + "/attendees";
        const settingsURL = '/events/' + this.props.eventResult[0].id + '/settings'
        return (
            <Layout>
            <br/>
            <h1 className="p-3">
            <a href="/events">{eventName}</a>
            </h1>
            <hr className="mb-5"/>
            <div class="row">
              <div class="col">
                <div class="card bg-success">
                  <div class="card-body">
                    <h4 class="card-title">Scan <br/> <i class="fas fa-barcode"></i></h4>
                    <p class="card-text">Register attendees here during event day. Make sure they have their scan card ready</p>
                    <a href={scanUrl} class="stretched-link"></a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-warning">
                  <div class="card-body">
                    <h4 class="card-title">Luck Draw <br/> <i class="fas fa-dice"></i> </h4>
                    <p class="card-text">Main stage lucky draw during event day here. Make sure to setup before starting</p>
                    <a href="#" class="stretched-link"></a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-info">
                  <div class="card-body">
                    <h4 class="card-title">Attendees <br/> <i class="fas fa-users"></i> </h4>
                    <p class="card-text">View all the attendees information here. Edit their information here</p>
                    <a href={attendeesURL} class="stretched-link"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4">
                <div class="card bg-danger">
                    <div class="card-body">
                        <h4 class="card-title">Stats <br/> <i class="fas fa-chart-bar"></i></h4>
                        <p class="card-text">View all statistics of the event information here</p>
                        <a href="#" class="stretched-link"></a>
                    </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card bg-primary">
                    <div class="card-body">
                        <h4 class="card-title">Forms <br/> <i class="fab fa-wpforms"></i></h4>
                        <p class="card-text">Generate PDF and CSV versions of the event details here. </p>
                        <a href="#" class="stretched-link"></a>
                    </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card bg-secondary">
                    <div class="card-body">
                        <h4 class="card-title">Settings <br/> <i class="fas fa-cog"></i></h4>
                        <p class="card-text">Edit the settings of the event such as event name, copying the event or deleting it </p>
                        <a href={settingsURL} class="stretched-link"></a>
                    </div>
                </div>
              </div>
            </div>
            <script src='/hover.js'></script>
            </Layout>
        );
    }
}

module.exports = View