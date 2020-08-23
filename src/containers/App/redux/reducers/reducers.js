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
  // TODO sorts change logic
  switch (action.type) {
    case SET_DATE_SORT_DIRECTION:
      return state;
    case SET_DISTANCE_SORT_DIRECTION:
      return state;
    default:
      return state;
  }
}

// TODO cool JSDoc
/**
 * @param state
 * @param action
 * @return {Validator<NonNullable<((InferPropsInner<any> & Partial<InferPropsInner<Pick<{date: Validator<NonNullable<string>>, distance: Validator<NonNullable<number>>, fullName: Validator<NonNullable<string>>, comment: Requireable<string>, ID: Validator<NonNullable<string>>, activityType: Validator<NonNullable<string>>}, "date" | "distance" | "fullName" | "comment" | "ID" | "activityType">>>) | undefined | null)[]>>|Array|*[]}
 */
export function trainings(state = [], action) {
  switch (action.type) {
    case SET_TRAININGS:
      return action.trainings;
    default:
      return state;
  }
}
