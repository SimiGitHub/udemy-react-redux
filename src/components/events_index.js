import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.id}
          </Link>
          </td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ events : state.events })

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

/*
Componentはそれ単体でStore内のstateやReducerのいる世界へ繋げることはできない。
お互いの世界を繋げるために使用するのがreact-reduxの提供するconnect()である。
しかしconnect()の生成にはmapStateToPropsとmapDispatchToPropsが必要だ。
mapStatePropsとはstateをpropsへ擬態化させるアイテムであり、
大元のstateの中でReducerを指定し、propsとしてComponentへ渡したい値を返り値として指定する。これによりComponent引数として渡されるpropsが使用可能となる。
mapDispatchToPropsとはdipatchをpropsへ擬態化させるアイテムであり、
dispatch()に発火させるactionを指定する。これにより発火時にReducerに向けて通知が行われるようになる。
*/ 