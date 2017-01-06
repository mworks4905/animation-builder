'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema


var schema = new Schema({
  animations: [{type: Schema.Types.ObjectId}]
  username: {type: String, required: true, ref: 'Users'},


})
schema.plugin(mongooseUniVal)

module.exports = mongoose.model('Animations', schema)
