let Routines = require('../models/routine')

export default {
  userRoutines: {
    path: '/userroutines',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Routines'
      Routines.find({creatorId: req.session.uid})
        .then(routines => {
          res.send(handleResponse(action, routines))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },

  sharedSteps: {
    path: '/sharedsteps',
    reqType: 'get',
    method(req, res, next){
      Steps.find({collaborators: { $in: req.session.uid}})
        .then(steps => {
          res.send(handleResponse(action, steps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}


function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }