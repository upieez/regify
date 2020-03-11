var React = require("react");

import Layout from '../layout';

class Draw extends React.Component {
  render() {
    return (
      <Layout>
      <link rel="stylesheet" type="text/css" href="/fireworks.css"/>
      <h1 className="p-5"><a href="/events">Lucky Draw</a></h1>
      <hr/>
      <button className="btn btn-warning btn-lg mt-3" id="drawButton">DRAW</button>
      <div className="showWinner display-1 mt-5"></div>
      <script src="/draw.js"></script>
      </Layout>
    );
  }
}

module.exports = Draw