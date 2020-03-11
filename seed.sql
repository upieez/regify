INSERT INTO companies (name, password) VALUES ('axios', '123');
INSERT INTO companies (name, password) VALUES ('finalevent', '123');
INSERT INTO companies (name, password) VALUES ('goodeventcompany', '123');
INSERT INTO companies (name, password) VALUES ('charityorganisation', '123');
INSERT INTO companies (name, password) VALUES ('besteventcompany', '123');
INSERT INTO companies (name, password) VALUES ('admin','admin');

INSERT INTO events (company_id,name) VALUES (6, "Graduation D&D 2020");

INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8000, 'Malcom', '1', false, true);
INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8001, 'Peter', '1', false, true);
INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8002, 'Jacob', '2', false, true);
INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8003, 'Johnny', '2', false, true);
INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8004, 'Peter', '3', false, true);
INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8005, 'Chris', '3', false, true);
INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8006, 'Ron', '4', false, true);
INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8007, 'Sam', '4', false, true);
INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8008, 'Ben', '5', false, true);
INSERT INTO attendees (event_id, attendee_id, name, table_number, has_attended, eligibility) VALUES (1, 8009, 'Robert', '5', false, true);