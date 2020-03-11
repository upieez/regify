var React = require("react");

import Layout from '../layout';

class Scan extends React.Component {
    render() {
        let actionURL = '/events/' + this.props.event_id + '/attendees';
        let backURL = `/events/${this.props.event_id}`
        let allAttendees;
        let totalAttendees = 0;
        let registeredAttendees = 0;
        let percentageAttendees;

        if (this.props.attendeesResult === null){
            allAttendees =
            <tr>
            <th scope="row">-</th>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>
        } else {
            allAttendees = this.props.attendeesResult.map((attendee,index)=> {
                totalAttendees += 1;
                let attended;
                if (attendee.has_attended === true) {
                    attended = "Yes";
                    registeredAttendees += 1;
                } else {
                    attended = "No";
                }
                return (
                    <tr>
                    <th scope="row">{attendee.attendee_id}</th>
                    <td>{attendee.name}</td>
                    <td>{attendee.table_number}</td>
                    <td>{attended}</td>
                    </tr>
                );
            });
        };

        return (
            <Layout>
            <h1><a href={backURL}>Attendees</a></h1>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalCenter">Add attendees</button>
            <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Add Attendees</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form method="POST" action={actionURL}>
                  <div class="modal-body">
                  <p>ID <input type="number" name="attendee_id" required/></p>
                  <p>Name <input type="text" name="name"/></p>
                  <p>Table No. <input type="text" name="table_number"/></p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success">Add</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-around mt-5">
                <h2>
                Total: <strong>{totalAttendees}</strong>
                </h2>
                <h2>
                Registered: <strong>{registeredAttendees}</strong>
                </h2>
                <h2>
                Percentage: <strong>{percentageAttendees = (totalAttendees === 0) ? 0 : Math.round((registeredAttendees/totalAttendees) * 100)}%</strong>
                </h2>
            </div>
            <hr/>
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Table Number</th>
                    <th scope="col">Attended</th>
                  </tr>
                </thead>
                <tbody>
                  {allAttendees}
                </tbody>
              </table>
            </Layout>
        );
    }
}

module.exports = Scan