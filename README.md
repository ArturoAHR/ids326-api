**INS326 CRUD API**

**Setup**

1. Clone the repository.
2. Install the packages

  * `npm install`

3. Copy the .env.example and rename it .env and fill the database details.
4. Run the migrations

  * `npm run migration:run`

5. Run the seeders

  * `npm run seed:run`

6. Run the project

  * `npm run start`


**Routes**

* Person
  * `GET /person` - Get All Person records.
  * `GET /person/:id` - Get a Person by ID.
  * `POST /person` - Create a Person record.
  * `PATCH /person/:id` - Update a Person record.
  * `DELETE /person` - Delete a Person record.
* Role
  * `GET /role` - Get All Role records.
  * `GET /role/:id` - Get a Role by ID.
  * `POST /role` - Create a Role record.
  * `PATCH /role/:id` - Update a Role record.
  * `DELETE /role` - Delete a Role record.
* Contact Type
  * `GET /contact-type` - Get All Contact Type records.
  * `GET /contact-type/:id` - Get a Contact Type by ID.
  * `POST /contact-type` - Create a Contact Type record.
  * `PATCH /contact-type/:id` - Update a Contact Type record.
  * `DELETE /contact-type` - Delete a Contact Type record.
* Company
  * `GET /company` - Get All Company records.
* Department
  * `GET /department` - Get All Department records.