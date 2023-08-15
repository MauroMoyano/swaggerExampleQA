"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_controller_1 = require("../controllers/tasks.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *  schema:
 *      Task:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated id of task
 *              name:
 *                  type: string
 *                  description: the name of the task
 *              description:
 *                  type: string
 *                  description: the description of the task
 *          required:
 *              - name
 *              - description
 *          example:
 *              id: gIBtGpM_G1Fvrn-aCsvlE
 *              name: My first task
 *              description: I have to do something.
 *      TaskNotFound:
 *          type: object
 *          properties:
 *              msg:
 *                  type: string
 *                  description: a message for the not found task
 *          example:
 *              msg: Task was not found
 *  parameters:
 *      taskId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: the task id
 * */
/**
 * @swagger
 * tags:
 *  name:Tasks
 *  descriptions: Tasks endpoint
 */
/**
 * @swagger
 * /tasks:
 *   get:
 *       summary: Return a Task list
 *       tags: [Tasks]
 *       responses:
 *          200:
 *              description: the list of tasks
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schema/Task'
 */
router.get('/tasks', tasks_controller_1.getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get total task count
 *      tags: [Tasks]
 *      responses:
 *          200:
 *              description: The total number of tasks
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: integer
 *                          example: 15
 */
router.get('/tasks/count', tasks_controller_1.count);
/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: create a new task
 *      tags: [Tasks]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Task'
 *      responses:
 *          200:
 *              description: the task succesfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schema/Task'
 *          500:
 *              description: some server error
 */
router.post('/tasks', tasks_controller_1.createTask);
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *      summary: get a task by id
 *      tags: [Tasks]
 *      parameters:
 *          - $ref: '#/components/parameters/taskId'
 *      responses:
 *          200:
 *              description: the task was found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schema/Task'
 *          404:
 *              description: the task was not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schema/TaskNotFound'
 */
router.get('/tasks/:id', tasks_controller_1.getTask);
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *      summary: delete a task by id
 *      tags: [Tasks]
 *      parameters:
 *          - $ref: '#/components/parameters/taskId'
 *      responses:
 *          200:
 *              description: the task was deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schema/Task'
 *          404:
 *              description: the task was not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schema/TaskNotFound'
 */
router.delete('/tasks/:id', tasks_controller_1.deleteTask);
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *      summary: update a task by id
 *      tags: [Tasks]
 *      parameters:
 *          - $ref: '#/components/parameters/taskId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Task'
 *      responses:
 *          200:
 *              description: The updated task
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schema/Task'
 *          404:
 *              description: The task was not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schema/TaskNotFound'
 */
router.put('/tasks/:id', tasks_controller_1.updateTask);
exports.default = router;
