module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let index = (request, response) => {
      db.regify.getAll((error, allCompanies) => {
        if (error) {
            response.send("error in index");
        } else {
            response.render('regify/index', {allCompanies} );
        }
      });
  };

  let events = (request, response) => {
        let data = {
            userid: request.cookies.userid
        }
        console.log("-----------------")
        let callBack = (error,result) => {
            if (error) {
                response.send("error in events")
            } else {
                let showAllEvents = {
                    events: result,
                    username: request.cookies.username
                }
                response.render('regify/events', showAllEvents)
            }
        }
        db.regify.getAllEvents(callBack,data)
  };

  let addEvent = (request,response) => {

    let data = {
        name: request.body.name,
        userid: request.cookies.userid
    }
    let callBack = (error,result) => {
        if (error) {
            response.send("error in addEvent");
        } else {
            response.redirect("/events/" + result.rows[0].id)
        }
    }
    db.regify.addEvent(callBack,data)
  }

  let viewEvent = (request,response) => {
    const data = {
        id: request.params.id
    }
    let callBack = (error,eventResult) => {
        if (error) {
            response.send("error in callBack");
        } else {
            response.render('regify/view', {eventResult} )
        }
    }
    db.regify.getEvent(callBack,data)
  };

  let scan = (request,response) => {
    let data = {
        eventID: request.params.id
    }
    response.render('regify/scan',data);
  };

  const attendees = (request,response) => {
    const data = {
        event_id: request.params.id
    }
    const callBack = (error,attendeesResult) => {
        if (error) {
            response.send("error in attendees Callback");
        } else {
            let data = {
                attendeesResult: attendeesResult,
                event_id: request.params.id,
            }
            response.render('regify/attendees', data);
        }
    }
    db.regify.getAllAttendees(callBack,data);
  }

  const attendeesJSON = (request,response) => {
    const data = {
        event_id: request.params.id
    }
    db.regify.getAllAttendees((error,attendees)=>{
        response.json({attendees})
    },data);
  }

  let addAttendee = (request,response) => {
    let data = {
        event_id: request.params.id,
        attendee_id: request.body.attendee_id,
        name: request.body.name,
        table_number: request.body.table_number
    }

    let callBack = (error,result) => {
        if (error) {
            response.send("error in addAttendee callBack");
        } else {
            response.redirect(`/events/${request.params.id}/attendees`)
        }
    }
    db.regify.addAttendee(callBack,data)
  }

  let scanAttendee = (request,response) => {
    const eventID = request.params.id;
    const attendeeID = request.body.scan;
    db.regify.scanAttendee((error, result) => {
        if (error){
            response.send(error);
        } else {
            response.send(result);
            }
        },eventID,attendeeID);
    };

    let settings = (request,response) => {
        response.render('regify/settings')
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: index,
    events: events,
    attendees: attendees,
    attendeesJSON: attendeesJSON,
    scan: scan,
    settings: settings,
    addEvent: addEvent,
    viewEvent: viewEvent,
    addAttendee: addAttendee,
    scanAttendee: scanAttendee,
  };

}