import { AnyAction } from 'redux'
import { combineEpics, StateObservable } from 'redux-observable'
import { catchError, Observable } from 'rxjs'
import accountEpic from './accountEpic'

const rootEpic = (
  action$: Observable<AnyAction>,
  store$: StateObservable<unknown>,
  dependencies: unknown
) =>
  combineEpics(accountEpic)(action$, store$, dependencies).pipe(
    catchError((_error, source) => source)
  )

export default rootEpic
