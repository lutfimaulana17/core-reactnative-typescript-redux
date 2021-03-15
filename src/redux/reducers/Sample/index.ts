import {
    SampleState,
    SampleActionTypes,
    CLEAR_SAMPLE_LIST,
    SET_SAMPLE_LIST
  } from '../../types'
  
  const initialState: SampleState = {
    sampleList: []
  }

const Sample = ( state = initialState, action: SampleActionTypes): SampleState => {
  switch (action.type) {
    case CLEAR_SAMPLE_LIST:
        return {
          sampleList: action.payload
        }
    case SET_SAMPLE_LIST:
      return {
        sampleList: [...state.sampleList, action.payload]
      }
    default:
      return state
  }
}

export default Sample