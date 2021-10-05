import reducer, {
  changeAccountUserName,
  setActiveAccount,
} from '../accountSlice'
import faker from 'faker'

describe('Test of AccountSlice', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual({
      jwt: '',
      user: {
        email: '',
        username: '',
        id: '',
        name: '',
        phone: '',
        lastname: '',
      },
    })
  })

  describe('when call setActiveAccount action', () => {
    it('changes jwt and state with data passed', () => {
      const accountData = {
        jwt: faker.datatype.number().toString(),
        user: {
          id: faker.datatype.number().toString(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          name: faker.name.firstName(),
          phone: faker.phone.phoneNumber(),
          lastname: faker.name.lastName(),
        },
      }

      expect(reducer(undefined, setActiveAccount(accountData))).toEqual(
        accountData
      )
    })
  })

  describe('when call changeAccountUserName action', () => {
    it('changes name of state', () => {
      const name = faker.name.firstName()
      expect(reducer(undefined, changeAccountUserName(name))).toEqual({
        jwt: '',
        user: {
          id: '',
          username: '',
          email: '',
          name,
          phone: '',
          lastname: '',
        },
      })
    })
  })
})
