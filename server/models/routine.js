import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	difficulty: { type: String, required: true },
	created: { type: Number, default: Date.now() },
	creatorId: {type: ObjectId, ref: models.user.name, required: true},
	// Relations
	steps: [{ type: ObjectId, ref: models.step }]
});

module.exports = mongoose.model(models.routine.name, schema);