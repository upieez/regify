module.exports = (dbPoolInstance) => {

  const getAll = (callback) => {

    let query = 'SELECT * FROM companies';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        callback(error, null);
      }else{
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  const getAllEvents = (callback, data) => {
    let query = 'SELECT * FROM events WHERE company_id = $1 ';

    let values = [data.userid]

        dbPoolInstance.query(query, values, (error, queryResult) => {
          if( error ){
            callback(error, null);
          }else{
            if( queryResult.rows.length > 0 ){
              callback(null, queryResult.rows);
            }else{
              callback(null, null);
            }
        }
    });
  }

  const addEvent = (callback, data) => {
    let query = 'INSERT INTO events (name, company_id) VALUES ($1, $2) RETURNING *';

    const values = [data.name, data.userid];

    dbPoolInstance.query(query, values,(error, queryResult) => {
        if (error) {
            callback(null,null);
        } else {
            if (queryResult.rows) {
                callback(null, queryResult);
            } else {
                callback(null, null);
                }
            }
        });
  }

  const getEvent = (callback,data) => {

    const values = [data.id];

    let query = 'SELECT * FROM events WHERE id = $1';

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error){
        callback(error, null);
      } else {
        if ( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
        } else {
            callback(null, null);
        }
      }
    });
  };

    const getAllAttendees = (callback,data) => {

    let query = 'SELECT * FROM attendees WHERE event_id = $1 ORDER BY id ASC';

    let values = [parseInt(data.event_id)]

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if( error ){
        callback(error, null);
      } else {
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

    const addAttendee = (callback,data) => {

        let query = 'INSERT INTO attendees (event_id,attendee_id,name,table_number,has_attended,eligibility) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';

        let values = [parseInt(data.event_id),data.attendee_id,data.name,data.table_number,false,false]

        dbPoolInstance.query(query, values, (error,queryResult) => {
            if ( error ){
                callback(error,null);
            } else {
                if( queryResult.rows.length > 0){
                    callback(null,queryResult);
                } else {
                    callback(null,null);
                }
            }
        });
    };

    const scanAttendee = (callback,eventID,attendeeID) => {

        let query = 'UPDATE attendees SET has_attended = $1 WHERE attendee_id = $2 AND event_id = $3 RETURNING *'

        let values = [true, parseInt(attendeeID), parseInt(eventID)]

        dbPoolInstance.query(query, values, (error,queryResult) => {
            if (error){
                callback(error,null);
            } else {
                if (queryResult.rows.length > 0){
                    callback(null,queryResult);
                } else {
                    callback(null,null);
                }
            }
        });
    };

    const changeSettings = (callback,data) => {

        let query = 'UPDATE events SET name = $1 WHERE id = $2 RETURNING *'

        let values = [data.name,parseInt(data.id)]

        dbPoolInstance.query(query, values, (error,queryResult) => {
            if (error){
                callback(error,null);
            } else {
                if (queryResult.rows.length > 0){
                    callback(null,queryResult);
                } else {
                    callback(null,null);
                }
            }
        });
    };

  return {
    getAll: getAll,
    getAllEvents: getAllEvents,
    addEvent: addEvent,
    getEvent: getEvent,
    getAllAttendees: getAllAttendees,
    addAttendee: addAttendee,
    scanAttendee: scanAttendee,
    changeSettings: changeSettings,
  };
};