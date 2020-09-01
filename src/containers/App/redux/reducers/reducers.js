import {
  activityTypes,
  RECEIVE_ADD_TRAINING,
  RECEIVE_DELETE_TRAINING,
  RECEIVE_FETCH_TRAININGS,
  RECEIVE_UPDATE_TRAINING,
  SET_ACTIVITY_TYPE_FILTER,
  SET_SORT,
  sortableParams,
  sortDirections,
} from '../actions';

/**
 * @typedef {activityTypes} ActivityTypeFilterState
 * @typedef {{type: string, filter: activityTypes}} ActivityTypeFilterAction
 * @typedef {{param: sortableParams, direction: sortDirections}} SortsState
 * @typedef {{
 *  type: string,
 *  payload: SortsState,
 * }} SortsAction
 * @typedef {{
 *  ID: string,
 *  date: string,
 *  fullName: string,
 *  activityType: string,
 *  distance: string,
 *  comment: ?string
 * }} Training
 * @typedef {Training[]} TrainingsState
 * @typedef {{
 *  type: string,
 *  payload: {
 *    trainings: Training[],
 *  }
 * }} TrainingsAction
 */

/**
 * @type {ActivityTypeFilterState}
 */
const initActivityTypeFilter = activityTypes.ALL;

/**
 * @type {SortsState}
 */
const initSorts = {
  param: sortableParams.DATE,
  direction: sortDirections.DESC,
};

/**
 * @type {TrainingsState}
 */
const initTrainings = [];

/**
 * @param {ActivityTypeFilterState} state
 * @param {ActivityTypeFilterAction} action
 * @return {ActivityTypeFilterState}
 */
export function activityTypeFilter(state = initActivityTypeFilter, action) {
  switch (action.type) {
    case SET_ACTIVITY_TYPE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

/**
 * @param {SortsState} state
 * @param {SortsAction} action
 * @return {SortsState}
 */
export function sorts(state = initSorts, action) {
  switch (action.type) {
    case SET_SORT:
      return action.payload;
    default:
      return state;
  }
}

/**
 * @param {TrainingsState} state
 * @param {TrainingsAction} action
 * @return {TrainingsState}
 */
export function trainings(state = initTrainings, action) {
  switch (action.type) {
    case RECEIVE_FETCH_TRAININGS:
      return action.payload.trainings;
    case RECEIVE_UPDATE_TRAINING:
      return action.payload.trainings;
    case RECEIVE_DELETE_TRAINING:
      return action.payload.trainings;
    case RECEIVE_ADD_TRAINING:
      return action.payload.trainings;
    default:
      return state;
  }
}
