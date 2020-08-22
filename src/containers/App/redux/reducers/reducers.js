import {
    SET_ACTIVITY_TYPE_FILTER,
    SET_DATE_SORT_DIRECTION,
    SET_DISTANCE_SORT_DIRECTION, SET_TRAININGS,
} from "../actions";


export function activityTypeFilter(state = null, action) {
    switch (action.type) {
        case SET_ACTIVITY_TYPE_FILTER:
            return action.filter
        default:
            return state
    }
}

export function sortDirections(state = null, action) {
    switch (action.type) {
        case SET_DATE_SORT_DIRECTION:
            return action.direction
        case SET_DISTANCE_SORT_DIRECTION:
            return action.direction
        default:
            return state
    }
}

export function trainings(state = [], action) {
    switch (action.type) {
        case SET_TRAININGS:
            return action.trainings
        default:
            return state
    }
}