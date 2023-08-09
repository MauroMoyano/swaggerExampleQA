import {Handler} from "express";
import {getConnection} from "../db";
import {nanoid} from "nanoid";

export const getTasks: Handler = (req, res) => {
    const data = getConnection().get('tasks').value()
    return res.json(data)
}

export const createTask: Handler = (req, res) => {

    const {name, description} = req.body

    const newTask = {
        name,
        description,
        id: nanoid()
    }
    try {
        getConnection().get('tasks').push(newTask).write()

        res.json(newTask)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getTask: Handler = (req, res) => {

    const taskFound = getConnection().get('tasks').find({id: req.params.id}).value()

    if(!taskFound) return res.status(404).json({ msg: "Task was not Found" })

    res.json(taskFound)
}
