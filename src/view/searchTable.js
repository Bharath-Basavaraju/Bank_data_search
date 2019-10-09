import React from 'react';
import * as styles from '../resources/css/style.scss';
import * as actions from '../actions/searchActions';
import { Dropdown, Segment } from 'semantic-ui-react';
import {AutoSizer, Table, Column} from 'react-virtualized';


export default class SearchTable extends React.Component {
    constructor(props) {
        super(props);
    }

    _getDatum(list, index) {
        return list.get(index % list.size);
    }

    render() {  
        let list = this.props.records;  
        //const rowGetter = ({index}) => this._getDatum(list, index);
        
        return (
                <div className={styles.tableContainer}>
                   
                    <Table
                        width={800}
                        height={500}
                        headerHeight={20}
                        noRowsRenderer={() => {
                            return <div className={styles.noRows}>No rows</div>
                        }}
                        rowHeight={30}
                        rowCount={list.length}
                        rowGetter={({ index }) => list[index]}
                    >  
                            <Column
                                label="Bank Id"
                                dataKey="bank_id"
                                width={60}
                            />
                            <Column
                                dataKey="bank_name"
                                label="Bank Name"
                                width={90}
                            />
                            <Column
                                dataKey="branch"
                                label="Brach"
                                width={90}
                            />
                            <Column
                                dataKey="city"
                                label="City"
                                width={90}
                            />
                            <Column
                                dataKey="ifsc"
                                label="Ifsc Code"
                                width={90}
                            />
                            <Column
                                dataKey="state"
                                label="State"
                                width={90}
                            />
                            <Column
                                dataKey="address"
                                label="address"
                                width={90}
                            />
                        </Table>
                </div>
        );
    }


}