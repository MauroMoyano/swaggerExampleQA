"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTasks = void 0;
const db_1 = require("../db");
const {nanoid} = require("nanoid");
const {getConnection} = require("../db");
const getTasks = (req, res) => {
    const data = (0, db_1.getConnection)().get('tasks').value();
    return res.json(data);
};
exports.getTasks = getTasks;
const createTask = (req, res) => {
    const { name, description } = req.body;
    const newTask = {
        name,
        description,
        id: nanoid()
    };



    res.json(newTask);
};
exports.createTask = createTask;
