# A simple app for planning inspections onsite
### based on the other NodeJS CRUD in my repository

#### Tech specs of this app
- Node JS version 9.5.0
- Postgresql version 10.0
- Knex JS version 0.14.3

- `npm install` to get all the packages
- `nodemon` to run the app in development mode


### Problems

- Knex wanted to overwrite existing primary id when posting a new entry. 
Solution: Need to set up latest id number for each table in Sequences.
Used Pg Admin4 to easily set up these numbers.
a query to do it from command line is:
`SELECT setval('public.clients_id_seq', 4, true);`
`clients_id_seq` means the targeting table id and `4` is the latest id in the database.