import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })

/*
このindex.jsは全てのReducerを管理する者。
大規模なプロジェクトでReducer達を細かく配置する場合はcombineReducers()を用いることができ、カンマ区切りで引数に渡す。
*/