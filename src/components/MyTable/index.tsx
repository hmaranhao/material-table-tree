import React, { forwardRef, ReactNode } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props: any, ref: any) => <AddBox style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    Check: forwardRef((props: any, ref: any) => <Check style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    Clear: forwardRef((props: any, ref: any) => <Clear style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    Delete: forwardRef((props: any, ref: any) => <DeleteOutline style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    DetailPanel: forwardRef((props: any, ref: any) => <ChevronRight style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    Edit: forwardRef((props: any, ref: any) => <Edit style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    Export: forwardRef((props: any, ref: any) => <SaveAlt style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    Filter: forwardRef((props: any, ref: any) => <FilterList style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    FirstPage: forwardRef((props: any, ref: any) => <FirstPage style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    LastPage: forwardRef((props: any, ref: any) => <LastPage style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    NextPage: forwardRef((props: any, ref: any) => <ChevronRight style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    PreviousPage: forwardRef((props: any, ref: any) => <ChevronLeft style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    ResetSearch: forwardRef((props: any, ref: any) => <Clear style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    Search: forwardRef((props: any, ref: any) => <Search style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    SortArrow: forwardRef((props: any, ref: any) => <ArrowDownward style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props: any, ref: any) => <Remove style={{ color: '#FB7A00' }} {...props} ref={ref} />),
    ViewColumn: forwardRef((props: any, ref: any) => <ViewColumn style={{ color: '#FB7A00' }} {...props} ref={ref} />)
};

interface MyTableProps {
    data: Array<object>;
    parentChildData?: any;
    columns: Array<object>;
    options?: object;
    actions?: any;
}

const MyTable: React.FC<MyTableProps> = ({
    data,
    parentChildData,
    columns,
    options,
    actions
}) => {

    return (
        <MaterialTable
            title=""
            icons={tableIcons}
            data={data}
            columns={columns}
            parentChildData={parentChildData}
            style={{
                background: '#323131',
                color: '#FB7A00',
                marginTop: 10
            }}
            options={{
                selection: false,
                search: false,
                header: false,
                showTitle: false,
                paging: false,
                toolbar: false,
                actionsCellStyle: {
                    background: '#323131',
                    color: '#FB7A00'
                },
                rowStyle: {
                    background: '#323131',
                    color: '#FB7A00'
                },
                headerStyle: {
                    background: '#323131',
                    color: '#FB7A00'
                },
                actionsColumnIndex: -1,
                ...options
            }}
            actions={actions}
        />
    );
}

export default MyTable;