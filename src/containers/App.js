/**
 * Created by olinnyk on 10/5/16.
 */


import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

    render() {
        const { name, surname, age } = this.props.user;
        return <div>
            <p>Привет из App, {name} {surname}!</p>
            <p>Тебе уже {age} ?</p>
        </div>
    }

}

function mapStateToProps (state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App)
/**
 connect -  помогает нам получить в качестве props для компонента <App /> данные из store

 Назначение функции connect вытекает из названия: подключи React компонент к Redux store
 Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.
 У нас был компонент <App /> , а на выходе получился <Connected(App)>

 https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
*/
