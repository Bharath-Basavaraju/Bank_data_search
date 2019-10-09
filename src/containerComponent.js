import React from 'react';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import { DataReducer } from  './reducers/dataReducer';
import DataSagas from './sagas/dataSagas';
import SearchContainer from './view/searchContainer';


const sagaMiddleware = CreateSagaMiddleware();
let store = createStore(DataReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(DataSagas);
const title = "Bank Data Search",
    errorMsg = "Sorry, we are trying to get back. Try after sometime !";

export default class ContainerComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }

    render(){
        return(
            this.state.hasError ?
                <h3>{errorMsg}</h3>
            :   <div>
                    <h1>{title}</h1>
                    <Provider store={store}>
                        <SearchContainer {...this.props} />
                    </Provider>
                </div>
        )
    }
}