import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
    follow: { type: String, required: true },
    difficulty: { type: String, required: true},
	created: { type: Number, default: Date.now() },
	// Relations
	routineId: { type: ObjectId, ref: models.routine, required: true }
});

module.exports = mongoose.model(models.step.name, schema);