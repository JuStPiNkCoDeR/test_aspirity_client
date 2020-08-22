/**
 * @typedef {'WALKING'|'RUN'|'BICYCLE'|'HIIT'} ActivityType
 * @typedef {'DESC'|'ASC'} SortDirections
 */

// Action types
export const SET_TRAININGS = 'SET_TRAININGS';
export const SET_ACTIVITY_TYPE_FILTER = 'SET_ACTIVITY_TYPE_FILTER';
export const SET_DATE_SORT_DIRECTION = 'SET_DATE_SORT_DIRECTION';
export const SET_DISTANCE_SORT_DIRECTION = 'SET_DISTANCE_SORT_DIRECTION';
// Other
/**
 * @enum {ActivityType}
 */
export const activityTypes = {
    WALKING: 'WALKING',
    RUN: 'RUN',
    BICYCLE: 'BICYCLE',
    HIIT: 'HIIT', // High Intensity Interval Training
};
/**
 * @enum {SortDirections}
 */
export const sortDirections = {
    DESC: 'DESC',
    ASC: 'ASC',
}
// Action creators
/**
 *
 * @param {Array} trainings
 */
export function setTrainings(trainings) {
    return { type: SET_TRAININGS, trainings };
}
/**
 * @param {ActivityType} filter
 */
export function setActivityTypeFilter(filter) {
    return { type: SET_ACTIVITY_TYPE_FILTER, filter };
}
/**
 * @param {SortDirections} direction
 */
export function setDateSortDirection(direction) {
    return { type: SET_DATE_SORT_DIRECTION, direction };
}
/**
 * @param {SortDirections} direction
 */
export function setDistanceSortDirection(direction) {
    return { type: SET_DISTANCE_SORT_DIRECTION, direction };
}