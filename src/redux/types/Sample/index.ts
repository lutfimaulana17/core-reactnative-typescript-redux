export interface Sample {
    firstname: string
    lastname: string
    age: number
}
  
export interface SampleState {
    sampleList: Sample[]
}

export const CLEAR_SAMPLE_LIST = 'CLEAR_SAMPLE_LIST'
export const SET_SAMPLE_LIST = 'SET_SAMPLE_LIST'

interface SampleClearAction {
    type: typeof CLEAR_SAMPLE_LIST
    payload: []
}

interface SampleSetAction {
    type: typeof SET_SAMPLE_LIST
    payload: Sample
}

export type SampleActionTypes = SampleClearAction | SampleSetAction 