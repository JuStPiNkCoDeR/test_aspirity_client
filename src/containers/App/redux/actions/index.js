/**
 * @typedef {'ALL'|'WALKING'|'RUN'|'BICYCLE'|'SKIING'} ActivityType
 * @typedef {'DESC'|'ASC'} SortDirections
 * @typedef {'DATE'|'DISTANCE'} Sortable
 * @typedef {{type: string}} Action
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
  ALL: 'ALL',
  WALKING: 'WALKING',
  RUN: 'RUN',
  BICYCLE: 'BICYCLE',
  SKIING: 'SKIING',
};
/**
 * @enum {SortDirections}
 */
export const sortDirections = {
  DESC: 'DESC',
  ASC: 'ASC',
};
/**
 * @enum {Sortable}
 */
export const sortableParams = {
  DATE: 'DATE',
  DISTANCE: 'DISTANCE',
};
// Action creators
/**
 * @param {Array} trainings
 * @return {Action}
 */
export function setTrainings(trainings) {
  return {type: SET_TRAININGS, trainings};
}
/**
 * @param {ActivityType} filter
 * @return {Action}
 */
export function setActivityTypeFilter(filter) {
  return {type: SET_ACTIVITY_TYPE_FILTER, filter};
}
/**
 * @param {SortDirections} direction
 * @return {Action}
 */
export function setDateSortDirection(direction) {
  return {type: SET_DATE_SORT_DIRECTION, direction};
}
/**
 * @param {SortDirections} direction
 * @return {Action}
 */
export function setDistanceSortDirection(direction) {
  return {type: SET_DISTANCE_SORT_DIRECTION, direction};
}
