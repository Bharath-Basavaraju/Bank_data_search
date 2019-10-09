import React from 'react';
import { connect } from 'react-redux';
import * as styles from '../resources/css/style.scss';
import * as actions from '../actions/searchActions';
import { Dropdown, Segment } from 'semantic-ui-react';
import SearchTable from './searchtable';
import { getProductList, getBandOption, getSubBandOption } from '../utils/helperFunction';

export class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {      
        return (
            <div>
                {this.props.apiFailed ?
                    <p>Sorry Data is not avilable right now</p>
                    :
                    <div>
                        <Segment className={styles.searchContainer}>
                            <Dropdown 
                                placeholder='Select City'
                                selection 
                                options={this.props.cityList} 
                                onChange={this.props.cityChange}
                                value={this.props.selectedCity}
                            />
                            <Dropdown 
                                placeholder='Select IFSC CODE'
                                selection 
                                options={this.props.ifscList} 
                                onChange={this.props.ifscChange}
                                search
                                multiple
                            />


                        </Segment>
                        {this.props.bankRecords ?
                            <SearchTable records={this.props.bankRecords}/>
                            : null
                        }  
                    </div>     
                }
            </div>
        );
    }
}
export default connect(
    (store, ownProps)=>{
        return{
            store : store,
            apiFailed: store.get("apiFailed"),
            cityList : store.get("cityList"),
            bankRecords: store.get("bankRecords"),
            selectedCity: store.get("selectedCity"),
            bankRecords: store.get("bankRecords"),
            ifscList: store.get("ifscList"),
            ...ownProps
        }
    },
    (dispatch)=>{
        return{
            cityChange:(e,obj) => {
                dispatch(actions.cityChange(obj.value));
            },
            ifscChange: (e,obj) =>{
                //dispatch();
            }
        }
    }
)(SearchContainer);