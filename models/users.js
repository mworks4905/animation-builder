'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var mongooseUniVal = require('mongoose-unique-validator')

var schema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  animations: [{type: Schema.Types.ObjectId, ref: 'Animations'}]

})
schema.plugin(mongooseUniVal)

module.exports = mongoose.model('Users', schema)
