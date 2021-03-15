import { Sample, CLEAR_SAMPLE_LIST, SET_SAMPLE_LIST, SampleActionTypes } from '../../types'

export const clearSample = (): SampleActionTypes => {
  return {
    type: CLEAR_SAMPLE_LIST,
    payload: []
  }
}

export const setSample = (newSample: Sample): SampleActionTypes => {
  return {
    type: SET_SAMPLE_LIST,
    payload: newSample
  }
}