import * as t from './types'

import {createAction} from '@reduxjs/toolkit'

// https://redux-toolkit.js.org/api/createAction
export const increment = createAction(t.COUNTER_INCREMENTED)
export const decrement = createAction(t.COUNTER_DECREMENTED)
