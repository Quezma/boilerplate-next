import { AnyAction } from 'redux'
import { combineEpics, Epic, ofType } from 'redux-observable'
import { mergeMap, map, catchError, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { loginAction } from 'store/actions/accountActions'
import { setActiveAccount } from 'store/reducers/accountSlice'

const login: Epic<AnyAction> = (action$) =>
  action$.pipe(
    ofType(loginAction),
    mergeMap((action: AnyAction) =>
      ajax({
        url: 'http://localhost:1337/auth/local',
        body: action.payload,
        method: 'POST',
        crossDomain: true,
      }).pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map((response: any) => setActiveAccount(response.response)),
        catchError((error) =>
          of({
            type: '/api/error',
            payload: error.response,
          })
        )
      )
    )
  )

const accountEpic = combineEpics(login)

export default accountEpic
