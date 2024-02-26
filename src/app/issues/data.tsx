import { ITableColumnProps } from "@/components/Table";

export const TABLE_COLUMN_SAMPLE:ITableColumnProps[] = [{
    key: '1',
    title: 'Ticket Code',
    dataIndex: 'ticketCode',
}, {
    key: '2',
    title: 'Title',
    dataIndex: 'title',
},{
    key: '3',
    title: 'Date Posted',
    dataIndex: 'datePosted',
}, {
    key: '4',
    title: 'Requestor',
    dataIndex: 'requestor',
}, {
    key: '5',
    title: 'Status',
    dataIndex: 'status',
}, {
    key: '6',
    title: 'Department',
    dataIndex: 'department',
}, {
    key: '7',
    title: 'Last Updated At',
    dataIndex: 'lastUpdatedAt',
}, {
    key: '8',
    title: 'Last Updated By',
    dataIndex: 'lastUpdatedBy',
}, {
    key: '9',
    title: 'Actions',
    dataIndex: 'actions',
    render: (data:any, dataIndex:string, index:number) => (<>Action</>)
}]

export const TABLE_DATA = [{
    ticketCode: 1001,
    title: 'Issue #1',
    datePosted: '2021-08-01',
    requestor: 'John Doe',
    status: 'Open',
    department: 'IT',
    lastUpdatedAt: '2021-08-01',
    lastUpdatedBy: 'John Doe'
}]