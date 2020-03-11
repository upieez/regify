CREATE TABLE IF NOT EXISTS companies (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    company_id INTEGER REFERENCES companies(id),
    name TEXT
);

CREATE TABLE IF NOT EXISTS attendees (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id),
    attendee_id INTEGER NOT NULL UNIQUE,
    name TEXT NOT NULL,
    table_number TEXT,
    has_attended BOOLEAN,
    eligibility BOOLEAN
);