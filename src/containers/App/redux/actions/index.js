/**
 * @typedef {'ALL'|'WALKING'|'RUN'|'BICYCLE'|'SKIING'} ActivityType
 * @typedef {'DESC'|'ASC'} SortDirections
 * @typedef {'DATE'|'DISTANCE'} Sortable
 * @typedef {{type: string}} Action
 */

import {deleteTraining, getTrainings, updateTraining} from '../../../../lib/api/requests';

// ==============
// |    GET     |
// ==============
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

// ==============
// |   UPDATE   |
// ==============
export const RECEIVE_UPDATE_TRAINING = 'RECEIVE_UPDATE_TRAINING';

/**
 * @param {Object} json
 * @return {Action}
 */
export function receiveUpdateTraining(json) {
  return {
    type: RECEIVE_UPDATE_TRAINING,
    payload: {
      trainings: json.data,
    },
  };
}

/**
 * @param {{
 *  ID: string,
 *  data: {
 *    date: number?,
 *    comment: number?,
 *    activityType: string?,
 *    distance: number?,
 *  }}} data
 * @return {function}
 */
export function modifyTraining(data) {
  return function(dispatch) {
    try {
      return updateTraining(data)
          .then((json) => dispatch(receiveUpdateTraining(json)));
    } catch (error) {
      console.error(error);
    }
  };
}

// ==============
// |   DELETE   |
// ==============
export const RECEIVE_DELETE_TRAINING = 'RECEIVE_DELETE_TRAINING';

/**
 * @param {Object} json
 * @return {Action}
 */
export function receiveDeleteTraining(json) {
  return {
    type: RECEIVE_DELETE_TRAINING,
    payload: {
      trainings: json.data,
    },
  };
}

/**
 * @param {string} ID
 * @return {function}
 */
export function removeTraining(ID) {
  return function(dispatch) {
    try {
      return deleteTraining(ID)
          .then((json) => dispatch(receiveDeleteTraining(json)));
    } catch (error) {
      console.error(error);
    }
  };
}

// ==============
// |   FILTER   |
// ==============
export const SET_ACTIVITY_TYPE_FILTER = 'SET_ACTIVITY_TYPE_FILTER';
/**
 * @param {ActivityType} filter
 * @return {Action}
 */
export function setActivityTypeFilter(filter) {
  return {type: SET_ACTIVITY_TYPE_FILTER, filter};
}

// ==============
// |    SORT    |
// ==============
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
