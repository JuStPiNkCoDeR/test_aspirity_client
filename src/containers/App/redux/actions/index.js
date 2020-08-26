/**
 * @typedef {'ALL'|'WALKING'|'RUN'|'BICYCLE'|'SKIING'} ActivityType
 * @typedef {'DESC'|'ASC'} SortDirections
 * @typedef {'DATE'|'DISTANCE'} Sortable
 * @typedef {{type: string}} Action
 */
import {getTrainings} from '../../../../lib/api/requests';

// Action types
// export const REQUEST_FETCH_TRAININGS = 'REQUEST_FETCH_TRAININGS';
// /**
//  * @param {string} filter
//  * @return {Action}
//  */
// export function requestFetchTrainings(filter) {
//   return {type: REQUEST_FETCH_TRAININGS, filter};
// }

export const RECEIVE_FETCH_TRAININGS = 'RECEIVE_FETCH_TRAININGS';
/**
 * @param {Object} json
 * @return {Action}
 */
export function receiveFetchTrainings(json) {
  return {
    type: RECEIVE_FETCH_TRAININGS,
    payload: {
      trainings: json.data,
    },
  };
}
/**
 *  @param {'ALL'|'WALKING'|'RUN'|'SKIING'|'BICYCLE'} filter
 *  @return {function}
 */
export function fetchTrainings(filter) {
  return function(dispatch) {
    try {
      return getTrainings(filter)
          .then((json) => dispatch(receiveFetchTrainings(json)));
    } catch (error) {
      console.error(error);
    }
  };
}

export const SET_ACTIVITY_TYPE_FILTER = 'SET_ACTIVITY_TYPE_FILTER';
/**
 * @param {ActivityType} filter
 * @return {Action}
 */
export function setActivityTypeFilter(filter) {
  return {type: SET_ACTIVITY_TYPE_FILTER, filter};
}

export const SET_SORT = 'SET_SORT';
/**
 * @param {{param: sortableParams, direction: sortDirections}} sortData
 * @return {Action}
 */
export function setSort(sortData) {
  return {type: SET_SORT, payload: sortData};
}

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
