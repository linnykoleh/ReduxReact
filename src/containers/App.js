/**
 * Created by olinnyk on 10/5/16.
 */


import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/PageActions';

class App extends React.Component {

    render() {
        const { user, page } = this.props;
        const { setYear } = this.props.pageActions;
        return <div>
            <User name={user.name}/>
            <Page year={page.year} photos={page.photos} setYear={setYear}/>
        </div>
    }

}

function mapStateToProps (state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

/**
 connect -  помогает нам получить в качестве props для компонента <App /> данные из store

 Назначение функции connect вытекает из названия: подключи React компонент к Redux store
 Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.
 У нас был компонент <App /> , а на выходе получился <Connected(App)>

 https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
*/
