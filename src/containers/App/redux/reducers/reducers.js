import {
  activityTypes,
  SET_ACTIVITY_TYPE_FILTER,
  SET_DATE_SORT_DIRECTION,
  SET_DISTANCE_SORT_DIRECTION, SET_TRAININGS, sortableParams, sortDirections,
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
    case SET_DATE_SORT_DIRECTION:
      return action.payload;
    case SET_DISTANCE_SORT_DIRECTION:
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
    case SET_TRAININGS:
      return action.payload.trainings;
    default:
      return state;
  }
}
