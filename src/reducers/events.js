import _ from 'lodash'
import{ 
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data}
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  } 
}

/*
reducerはstoreの管理者のようなもの。
1.引数に新しくするstateの初期値と既に定義したactionを設定する。
2.switch()を使ってactionのtypeに応じて処理を分ける
3.各actionの返り値は新しいstateのプロパティを変更させたものにする。

*/