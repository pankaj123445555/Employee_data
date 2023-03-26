
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     description: Creates a new task in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the task
 *                 example: Buy groceries
 *               email:
 *                 type: string
 *                 description: The email of the person assigned to the task
 *                 example: john.doe@example.com
 *               contact:
 *                 type: string
 *                 description: The contact number of the person assigned to the task
 *                 example: 1234567890
 *               id:
 *                 type: integer
 *                 description: The ID of the person assigned to the task
 *                 example: 1
 *               address:
 *                 type: string
 *                 description: The address of the person assigned to the task
 *                 example: 123 Main St, Anytown USA
 *             required:
 *               - name
 *               - email
 *               - contact
 *               - id
 *               - address
 *     responses:
 *       '201':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the new task
 *                 name:
 *                   type: string
 *                   description: The name of the new task
 *                 email:
 *                   type: string
 *                   description: The email of the person assigned to the task
 *                 contact:
 *                   type: string
 *                   description: The contact number of the person assigned to the task
 *                 id:
 *                   type: integer
 *                   description: The ID of the person assigned to the task
 *                 address:
 *                   type: string
 *                   description: The address of the person assigned to the task
 *                 completed:
 *                   type: boolean
 *                   description: Whether the new task is completed or not
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: The error message
 */

// its the time to get the data from the database

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get an employee by ID
 *     description: Retrieve an employee record from the database using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the employee to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the employee
 *                 name:
 *                   type: string
 *                   description: The name of the employee
 *                 email:
 *                   type: string
 *                   description: The email of the employee
 *                 contact:
 *                   type: string
 *                   description: The contact number of the employee
 *                 address:
 *                   type: string
 *                   description: The address of the employee
 *       '404':
 *         description: Employee not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: The error message
 */

// update the employee

/**
 * @swagger
 * /updateEmp/{id}:
 *   put:
 *     summary: Create a new task
 *     description: Creates a new task in the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the employee to retrieve
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the task
 *                 example: Buy groceries
 *               email:
 *                 type: string
 *                 description: The email of the person assigned to the task
 *                 example: john.doe@example.com
 *               contact:
 *                 type: string
 *                 description: The contact number of the person assigned to the task
 *                 example: 1234567890
 *               id:
 *                 type: integer
 *                 description: The ID of the person assigned to the task
 *                 example: 1
 *               address:
 *                 type: string
 *                 description: The address of the person assigned to the task
 *                 example: 123 Main St, Anytown USA
 *             required:
 *               - name
 *               - email
 *               - contact
 *               - id
 *               - address
 *     responses:
 *       '201':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the new task
 *                 name:
 *                   type: string
 *                   description: The name of the new task
 *                 email:
 *                   type: string
 *                   description: The email of the person assigned to the task
 *                 contact:
 *                   type: string
 *                   description: The contact number of the person assigned to the task
 *                 id:
 *                   type: string
 *                   description: The ID of the person assigned to the task
 *                 address:
 *                   type: string
 *                   description: The address of the person assigned to the task
 *                 completed:
 *                   type: boolean
 *                   description: Whether the new task is completed or not
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: The error message
 */

// delete the employee

/**
 * @swagger
 * /delete_emp/{id}:
 *   delete:
 *     summary: delete an employee by ID
 *     description: Retrieve an employee record from the database using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the employee to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the employee
 *                 name:
 *                   type: string
 *                   description: The name of the employee
 *                 email:
 *                   type: string
 *                   description: The email of the employee
 *                 contact:
 *                   type: string
 *                   description: The contact number of the employee
 *                 address:
 *                   type: string
 *                   description: The address of the employee
 *       '404':
 *         description: Employee not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: The error message
 */

  