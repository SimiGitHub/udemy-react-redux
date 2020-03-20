import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

// import { postEvent } from '../actions'

class EventsNew extends Component {
  renderField(field) {
    const { input, label, type, meta: { touched, error }} = field
    return (<div></div>)
  }
  render() {
    return (
      <from>
        <div><Field label="Title" name="title" type="text" component={this.renderField}/></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField}/></div>

        <div>
          <Field type="submit" value="Submit" disabled={false}/>
          <Link to="/">Cancel</Link>
        </div>
      </from>
    );
  }
}

const validate = values => {
  const errors = {}

  return errors
}

// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)

/*
Componentはそれ単体でStore内のstateやReducerのいる世界へ繋げることはできない。
お互いの世界を繋げるために使用するのがreact-reduxの提供するconnect()である。
しかしconnect()の生成にはmapStateToPropsとmapDispatchToPropsが必要だ。
mapStatePropsとはstateをpropsへ擬態化させるアイテムであり、
大元のstateの中でReducerを指定し、propsとしてComponentへ渡したい値を返り値として指定する。これによりComponent引数として渡されるpropsが使用可能となる。
mapDispatchToPropsとはdipatchをpropsへ擬態化させるアイテムであり、
dispatch()に発火させるactionを指定する。これにより発火時にReducerに向けて通知が行われるようになる。
*/ 