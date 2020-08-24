/**
 * @typedef {'ALL'|'WALKING'|'RUN'|'BICYCLE'|'SKIING'} ActivityType
 * @typedef {'DESC'|'ASC'} SortDirections
 * @typedef {'DATE'|'DISTANCE'} Sortable
 * @typedef {{type: string}} Action
 */

// Action types
export const SET_TRAININGS = 'SET_TRAININGS';
export const SET_ACTIVITY_TYPE_FILTER = 'SET_ACTIVITY_TYPE_FILTER';
export const SET_SORT = 'SET_SORT';
// Other data constants
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
 * @param {{param: sortableParams, direction: sortDirections}} sortData
 * @return {Action}
 */
export function setSort(sortData) {
  return {type: SET_SORT, payload: sortData};
}
