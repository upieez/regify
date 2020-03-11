var React = require("react");

import Layout from '../layout';

class Events extends React.Component {
  render() {
    let eventList;
    if (!this.props.events){
        eventList = "CREATE NEW EVENTS"
    } else {
        eventList = this.props.events.map((event) =>{
            let eventLink = `/events/${event.id}`
            return (
                <a href={eventLink} class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{event.name}</h5>
                  <medium><i class="fas fa-calendar-alt"></i></medium>
                </div>
                <p class="mb-1">___________________________________________________________________________________</p>
              </a>
            );
        });
    }
    return (
      <Layout>
      <h1 className="mt-5">Welcome to Regify</h1>
      <small>logged in as {this.props.username}</small>
      <br/>

        <div className="modal fade" id="modalCenter" tabindex="-1">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Events</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form method="POST" action="/events">
              <div className="modal-body">
                  <span>Name: </span>
                <input type="text" name="name"/>
              </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" value="submit" className="btn btn-success">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr/>
      <div className="container">
          <div className="d-flex justify-content-around mb-4">
              <h2><u>Events</u></h2>
              <button type="button" class="btn btn-success btn-large" data-toggle="modal" data-target="#modalCenter"><i class="fas fa-plus"></i></button>
          </div>
          <div class="list-group d-inline-flex">{eventList}</div>
      </div>
        <script src="/hover.js"></script>
      </Layout>
    );
  }
}

module.exports = Events;