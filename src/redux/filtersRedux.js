/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addTags = payload => ({ payload, type: ADD_TAGS });
export const removeTags = payload => ({ payload, type: REMOVE_TAGS });
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_TAGS:
      //console.log('payload', payload);
      return {
        ...statePart,
        tags: [...statePart.tags,action.payload],
      };
    case REMOVE_TAGS:
      const tags = [...statePart.tags];
      const removeTag = tags.indexOf(action.payload);
      tags.splice(removeTag, 1);
      return {
        ...statePart,
        tags,
      };
    case CHANGE_DURATION:
      const duration = { ...statePart.duration };
      duration[action.payload.type] = parseInt(action.payload.value);
      return {
        ...statePart,
        duration,
      };
    default:
      return statePart;
  }
}
