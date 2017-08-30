let Routines = require('../models/routine')
let Steps = require('../models/step')

export default {
    getStepsByRoutineId: {
        path:'routines/:routineId/steps',
        reqType: 'get',
        method(req, res, next){
            let action = 'return routine and associated steps'
            Routines.findById(req.params.routineId)
                .then(routine => {
                    Steps.find({ routineId: req.params.routineId })
                        .then(steps => {
                            routine.steps = steps
                            res.send(handleResponse(action, routine.steps))
                        }).catch(error => {
                            return next(handleResponse(action, null, error))
                        })
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    }
}