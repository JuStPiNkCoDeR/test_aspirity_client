const TRAINING_API_URL = 'https://nameless-harbor-51966.herokuapp.com/api';

/**
 * @description Sends a request to receive training list
 * @param {'ALL'|'WALKING'|'RUN'|'SKIING'|'BICYCLE'} filter
 * @return {Promise<any>}
 */
export const getTrainings = async (filter) => {
  const response = await fetch(`${TRAINING_API_URL}/?activityType=${filter}`);
  const json = await response.json();

  return json;
};

/**
 * @description Sends a request to save new training note
 * @param {{
 *   date: number,
 *   fullName: string,
 *   activityType: string,
 *   distance: number,
 *   comment: string,
 * }} data
 * @return {Promise<any>}
 */
export const saveTraining = async (data) => {
  const response = await fetch(`${TRAINING_API_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

  if (response.status !== 200) {
    throw new Error('Unable to create new training note');
  }

  const json = await response.json();

  return json;
};

/**
 * @description Sends a request to modify existed data
 * @param {{
 *  ID: string,
 *  data: {
 *    date: number?,
 *    comment: number?,
 *    activityType: string?,
 *    distance: number?,
 *  }
 * }} data
 * @return {Promise<void>}
 */
export const updateTraining = async (data) => {
  const response = await fetch(`${TRAINING_API_URL}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if (response.status !== 200) {
    throw new Error(`Unable to modify the training note\n${json}`);
  }

  return json;
};

/**
 * @description Sends a request to delete training note with the given ID
 * @param {String} ID
 * @return {Promise<void>}
 */
export const deleteTraining = async (ID) => {
  const response = await fetch(`${TRAINING_API_URL}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ID}),
  });

  const json = await response.json();

  if (response.status !== 200) {
    throw new Error(`Unable to delete the training note\n${json}`);
  }

  return json;
};
