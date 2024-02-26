export interface ITableColumnProps {
    key: string
    title: string
    dataIndex: string
    render?: (data: any[], dataIndex: string, index: number) => React.ReactNode
}
export interface ITableProps {
    columns: ITableColumnProps[]
    dataSource: any
}

export const Table = ({columns,dataSource,...props}:ITableProps) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map(({ key, title }) => (
                        <th key={key} className="text-start">
                            <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                    {title}
                                </span>
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                <tr>
                    {
                        dataSource.map((data:any,index:number) => {
                            return columns.map(({ key,dataIndex, render }) => {
                                return (
                                    <td key={`td-${index}${key}`} className="py-4">
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-sm text-gray-800">
                                                {render ? render(data, dataIndex, index) : data[dataIndex]}
                                            </span>
                                        </div>
                                    </td>
                                )
                            })
                        })
                    }
                    <td>

                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;