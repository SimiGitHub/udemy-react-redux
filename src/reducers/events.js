import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
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