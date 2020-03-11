var React = require("react");

import Layout from '../layout';

class Scan extends React.Component {
    render() {
        let backURL = `/events/${this.props.eventID}`
        return (
            <Layout>
            <div>
            <h1 className="p-4">
            <a href={backURL}>Scan Attendees</a>
            </h1>
            <div className="mt-5">
            <input type="text" name="scan" maxLength="9" autoComplete="off" id="scanForm" style={{border: "0", outline: "none" }} autoFocus/>
            </div>
            <div className="showAttendees mt-5">
            </div>
            </div>
            <script src="/attendees.js"></script>
            </Layout>
        );
    }
}

module.exports = Scan